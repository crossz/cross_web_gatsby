import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { makeStyles, Box } from '@material-ui/core'
import Link from '@components/Link'
import ViewButton from '@themes/components/ViewButton'
import { useI18next } from 'gatsby-plugin-react-i18next'
import { formatLocal } from '@utils/moment'
import { useMatch } from '@reach/router'
import classnames from 'classnames'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: theme.spacing(1.25),
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    '&:hover $btnWrapper button': {
      backgroundColor: theme.palette.secondary.main,
    },
    // [theme.breakpoints.down('xs')]: {
    //   minHeight: theme.spacing(31.25),
    // },
  },
  btnWrapper: {
    marginTop: theme.spacing(3),
    textAlign: 'right',
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
    '&:hover': {
      textDecoration: 'none',
    },
  },
  imageWrapper: {
    width: '100%',
    backgroundColor: theme.palette.background.default,
  },
  image: {
    borderRadius: `10px 10px 0 0 `,
  },
  info: {
    fontSize: theme.typography.body2.fontSize,
    padding: theme.spacing(2, 3),
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1),
      paddingBottom: theme.spacing(1.5),
    },
  },
  type: {
    minHeight: theme.spacing(2.5),
    color: theme.palette.secondary.main,
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.overline.fontSize,
      marginBottom: theme.spacing(0.5),
      minHeight: theme.spacing(1.75),
    },
  },
  title: {
    color: theme.palette.primary.main,
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    textOverflow: 'ellipsis',
    lineClamp: 2,
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.body2.fontSize,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.subtitle1.fontSize,
    },
  },
  campaignPageTitle: {
    textOverflow: 'ellipsis',
    lineClamp: 2,
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    fontSize: 24,
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.subtitle1.fontSize,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.body1.fontSize,
    },
  },
  date: {
    color: theme.palette.grey[600],
    marginTop: 'auto',
  },
}))

const AthletePostCard = ({ title, detail, type, date, cover, slug, href, withViewBtn, pdf, minHeight }) => {
  const classes = useStyles({ minHeight })
  const { t, routed, language } = useI18next()
  const images = cover.map((item) => getImage(item))
  const isCampaignPage = useMatch(`${routed ? `/${language}` : ''}/whats-new/campaign`)

  return (
    <Link className={classes.link} to={pdf?.publicURL || href || slug} isPdf={Boolean(pdf?.publicURL)}>
      <Box className={classes.root}>
        <Box height='auto' className={classes.imageWrapper}>
          {images[0] && (
            <GatsbyImage
              imgClassName={classes.image}
              image={images[0]}
              // placeholder='blurred'
              alt={title}
            ></GatsbyImage>
          )}
        </Box>
        {isCampaignPage ? (
          <Box className={classes.info}>
            <Box className={classes.campaignPageTitle} mb={1} color='secondary.main' fontWeight='fontWeightBold'>
              {title}
            </Box>
            <Box className={classnames(classes.title, classes.campaignPageDetail)}>{detail}</Box>
          </Box>
        ) : (
          <Box className={classes.info}>
            <Box className={classes.type}>{type && t(`options.post_types.${type}`)}</Box>
            <Box className={classes.title}>{title}</Box>
            {withViewBtn ? (
              <Box className={classes.btnWrapper}>
                <ViewButton slug={slug}></ViewButton>
              </Box>
            ) : (
              <Box className={classes.date}>{formatLocal(date)}</Box>
            )}
          </Box>
        )}
      </Box>
    </Link>
  )
}

export default AthletePostCard
