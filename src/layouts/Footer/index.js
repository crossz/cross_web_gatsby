import React, { useState } from 'react'
import {
  makeStyles,
  useMediaQuery,
  useTheme,
  Grid,
  Container,
  alpha,
} from '@material-ui/core'
import Box from '@material-ui/core/Box'
import useMenu from '@hooks/useMenu'
import useSiteMetadata from '@hooks/useSiteMetadata'
import PhoneIcon from '@images/icons/phone.svg'
import WhatsappIcon from '@images/icons/whatsapp.svg'
import EmailIcon from '@images/icons/mail.svg'
import SocialLinks from '@layouts/SocialLinks'
import {
  EAccordion,
  EAccordionSummary,
  EAccordionDetails,
} from '@themes/components/EAccordion'
import ArrowIcon from '@images/icons/arrow.svg'
import { Link } from 'gatsby'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import classnames from 'classnames'
import { StaticImage } from 'gatsby-plugin-image'
import GoToTop from './GoToTop'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 'auto',
    backgroundColor: theme.palette.primary.main,
    height: theme.spacing(66.5),
    paddingBottom: theme.spacing(4),
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.down('xs')]: {
      height: 'auto',
      padding: theme.spacing(3, 1),
      paddingTop: 0,
      paddingBottom: theme.spacing(10.5),
    },
  },
  logo: {
    [theme.breakpoints.down('xs')]: {
      height: theme.spacing(4.5),
      width: theme.spacing(16.25),
    },
  },
  container: {
    paddingTop: theme.spacing(10),
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(3),
    },
  },
  divider: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      backgroundColor: 'transparent',
      marginBottom: 0,
    },
  },
  arrowIcon: {
    transform: 'rotate(90deg)',
    '& path': {
      fill: theme.palette.primary.contrastText,
    },
  },
  link: {
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
  },
  copyRight: {
    fontSize: theme.typography.caption.fontSize,
    display: 'flex',
    marginTop: 'auto',
    flexWrap: 'wrap',
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(6),
    },
  },
  copyRightLink: {
    marginRight: theme.spacing(5),
    [theme.breakpoints.down('xs')]: {
      marginRight: theme.spacing(3),
    },
  },
  infoWrapper: {
    height: '100%',
  },
  infoIcon: {
    paddingRight: theme.spacing(1),
    '& path': {
      fill: theme.palette.primary.contrastText,
    },
  },
  accordionSummaryRoot: {
    [theme.breakpoints.down('xs')]: {
      minHeight: theme.spacing(9),
      borderTop: `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
      padding: 0,
      '&.Mui-expanded': {
        minHeight: theme.spacing(9),
      },
    },
  },
  accordionSummaryContent: {
    flexGrow: 1,
  },
  accordionDetailsRoot: {
    paddingTop: 0,
    paddingBottom: 0,

    [theme.breakpoints.down('xs')]: {
      paddingBottom: theme.spacing(3),
    },
  },
  menuWrapper: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    maxHeight: theme.spacing(36),
    [theme.breakpoints.down('xs')]: {
      maxHeight: 'none',
    },
  },
  menuItem: {
    width: `calc(100% / 3)`,
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginBottom: 0,
    },
  },
  lastMenuItem: {
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(3.5),
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: 0,
    },
  },
}))

const Footer = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))
  const menu = useMenu()
  const { email, phone, whatsapp, whatsappAccount } = useSiteMetadata()
  const [panel, setPanel] = useState('')

  const handleChange = (activePanel) => (e, isExpanded) =>
    setPanel(isExpanded ? activePanel : '')

  const CopyRights = (params) => (
    <Box className={classes.copyRight}>
      <Box
        className={classes.copyRightLink}
        width={matches ? '100%' : 'auto'}
        mb={matches ? 2 : 0}
      >
        ©2021 Take2 Health 版權所有
      </Box>
      <Link
        className={classnames(classes.link, classes.copyRightLink)}
        to='/terms-and-conditions/私隱政策'
      >
        私隱政策
      </Link>
      <Link className={classnames(classes.link, classes.copyRightLink)} to='/'>
        服務條款
      </Link>
      <Link
        className={classnames(classes.link, classes.copyRightLink)}
        to='/terms-and-conditions/免責聲明'
      >
        免責聲明
      </Link>
      <Link
        className={classnames(classes.link, classes.copyRightLink)}
        to='/terms-and-conditions/網站使用條款'
      >
        網站使用條款
      </Link>
    </Box>
  )

  return (
    <Box className={classes.root}>
      <Container className={classes.container} maxWidth='md'>
        <GoToTop></GoToTop>
        <Grid container>
          <Grid className={classes.infoWrapper} item xs={12} sm={3} md={4}>
            <Box width={matches ? 100 : 145}>
              <StaticImage
                src='../../assets/images/common/take2_white_orange.png'
                alt='Logo'
                placeholder='tracedSVG'
              />
            </Box>
            <Box mt={matches ? 4 : 5}>
              <a href={`tel:${phone}`} className={classes.link}>
                <Box display='flex' mb={matches ? 1 : 1.5} alignItems='center'>
                  <PhoneIcon className={classes.infoIcon}></PhoneIcon>
                  {phone}
                </Box>
              </a>
              <a
                href={whatsapp}
                className={classes.link}
                target='_blank'
                rel='noreferrer'
              >
                <Box display='flex' mb={matches ? 1 : 1.5} alignItems='center'>
                  <WhatsappIcon className={classes.infoIcon}></WhatsappIcon>
                  {whatsappAccount}
                </Box>
              </a>
              <a href={`mailto:${email}`} className={classes.link}>
                <Box display='flex' alignItems='center'>
                  <EmailIcon className={classes.infoIcon}></EmailIcon>
                  {email}
                </Box>
              </a>
            </Box>
            <Box mb={matches ? 5 : 0} display='inline-block'>
              <Divider className={classes.divider} />
              <Box mb={0.5}>關注我們</Box>
              <SocialLinks></SocialLinks>
            </Box>
          </Grid>
          <Grid item xs={12} sm={9} md={8}>
            <Box className={classes.menuWrapper}>
              {menu?.map((item, index) => (
                <Box
                  key={index}
                  className={classnames(
                    classes.menuItem,
                    index === menu.length - 1 && classes.lastMenuItem
                  )}
                >
                  <EAccordion
                    expanded={!matches || item.path === panel}
                    square
                    onChange={handleChange(
                      !matches || !(item.sections && item.sections?.length)
                        ? ''
                        : item.path
                    )}
                  >
                    <EAccordionSummary
                      expandIcon={
                        matches &&
                        item.sections &&
                        item.sections?.length && (
                          <ArrowIcon className={classes.arrowIcon} />
                        )
                      }
                      aria-controls='panel1a-content'
                      id='panel1a-header'
                      classes={{
                        root: classes.accordionSummaryRoot,
                        content: classes.accordionSummaryContent,
                      }}
                    >
                      {!(item.sections && item.sections?.length) ? (
                        <Link className={classes.link} to={item.path}>
                          <Box
                            fontSize='body1.fontSize'
                            fontWeight='fontWeightBold'
                          >
                            {item.title}
                          </Box>
                        </Link>
                      ) : (
                        <Box
                          fontSize='body1.fontSize'
                          fontWeight='fontWeightBold'
                        >
                          {item.title}
                        </Box>
                      )}
                    </EAccordionSummary>
                    {item.sections && item.sections?.length && (
                      <EAccordionDetails
                        classes={{
                          root: classes.accordionDetailsRoot,
                        }}
                      >
                        <Typography variant='body2' component='div'>
                          {item.sections.map((tab) => (
                            <Box mt={1} key={tab.title}>
                              <Link to={tab.path} className={classes.link}>
                                {tab.title}
                              </Link>
                            </Box>
                          ))}
                        </Typography>
                      </EAccordionDetails>
                    )}
                  </EAccordion>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
        <CopyRights></CopyRights>
      </Container>
    </Box>
  )
}

export default Footer
