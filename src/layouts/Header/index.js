import React, { useState, useContext } from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles, useTheme, useMediaQuery, Container, Hidden } from '@material-ui/core'
import { MOBILE_HEADER_HEIGHT, HEADER_HEIGHT } from '@utils/constant'
import classnames from 'classnames'
import Menu from './Menu'
import { StaticImage } from 'gatsby-plugin-image'
import Link from '@components/Link'
import { Waypoint } from 'react-waypoint'
import { HeroThemeContext } from '@layouts/context'
import { useI18next } from 'gatsby-plugin-react-i18next'
import useLangQuery from '@hooks/useLangQuery'

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: `0 1px 0 0  ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.background.paper,
    position: 'sticky',
    top: 0,
    zIndex: theme.zIndex.appBar,
    transition: `background-color 0.6s`,
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 6),
    height: theme.spacing(HEADER_HEIGHT),
    [theme.breakpoints.down('xs')]: {
      height: theme.spacing(MOBILE_HEADER_HEIGHT),
      padding: theme.spacing(0, 3),
    },
  },
  homepageRoot: {
    backgroundColor: 'transparent',
    position: 'fixed',
    boxShadow: 'none',
    left: 0,
    right: 0,
  },
  withBg: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: `0 1px 0 0  ${theme.palette.grey[400]}`,
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.standard,
    }),
  },
  authBtn: {
    cursor: 'pointer',
    marginLeft: 'auto',
    flexShrink: 0,
    fontWeight: 500,
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.caption.fontSize,
    },
  },
  logo: {
    width: 145,
    [theme.breakpoints.down('xs')]: {
      width: 100,
    },
  },
  link: {
    marginLeft: theme.spacing(3.5),
  },
  withoutShadow: {
    boxShadow: 'none',
  },
  darkHeroTheme: {
    '& $authBtn': {
      color: theme.palette.primary.contrastText,
      '& a': {
        color: theme.palette.primary.contrastText,
      },
    },
  },
  menuBtn: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(-1.5),
  },
}))

const Header = (props) => {
  const classes = useStyles()
  const { t, originalPath } = useI18next()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))
  const isHomepage = originalPath === '/'
  const [withBg, setWithBg] = useState(true)
  const context = useContext(HeroThemeContext)
  const addLangQuery = useLangQuery()
  return (
    <>
      <Box
        id='header'
        className={classnames(classes.root, {
          [classes.withBg]: !matches && withBg,
          [classes.homepageRoot]: !matches && isHomepage,
          [classes.withoutShadow]: !matches && isHomepage && withBg,
          [classes.darkHeroTheme]: !matches && isHomepage && !withBg && context?.theme === 'dark',
        })}
      >
        <Container className={classes.wrapper} maxWidth='lg'>
          <Link to='/'>
            <Box width={matches ? 100 : 145}>
              <StaticImage src='../../assets/images/common/take2_full_color.png' alt='Logo' />
              {/* {context?.logoTheme === 0 ? (
                !withBg ? (
                  <StaticImage src='../../assets/images/common/take2_full_white_color.png' alt='Logo' />
                ) : (
                  <StaticImage src='../../assets/images/common/take2_full_color.png' alt='Logo' />
                )
              ) : (
                <StaticImage src='../../assets/images/common/take2_full_color.png' alt='Logo' />
              )} */}
            </Box>
          </Link>
          <Box className={classes.authBtn} color='primary.main' component='span'>
            <Link to={addLangQuery(`${process.env.GATSBY_SITE_URL}signin`)}>{t('common.book_now')}</Link>
            <Hidden xsDown>
              <Link className={classes.link} to={addLangQuery(`${process.env.GATSBY_SITE_URL}signup`)}>
                {t('common.member_registration')}
              </Link>
            </Hidden>
          </Box>
          <Box className={classes.menuBtn}>
            <Menu dark={!matches && isHomepage && !withBg && context?.theme === 'dark'}></Menu>
          </Box>
        </Container>
        {/* <Waypoint
        onLeave={() => handleWaypoint(true)}
        onEnter={() => handleWaypoint(false)}
      ></Waypoint> */}
      </Box>
      {isHomepage && <Waypoint onEnter={() => setWithBg(false)} onLeave={() => setWithBg(true)}></Waypoint>}
    </>
  )
}

export default Header
