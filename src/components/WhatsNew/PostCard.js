import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Box from '@material-ui/core/Box'
import { makeStyles, alpha } from '@material-ui/core'
import { Link } from 'gatsby'
import ViewButton from '@themes/components/ViewButton'
import { Link as MuiLink } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: `0px 15px 40px -10px ${alpha(theme.palette.common.black, 0.05)}`,
    borderRadius: theme.spacing(1.25),
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    textDecoration: 'none',
    height: theme.spacing(41.25),
    display: 'flex',
    flexDirection: 'column',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.standard,
    }),
    '&:hover': {
      transform: 'translateY(-8px)',
    },
    '&:hover $btnWrapper button': {
      backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.down('xs')]: {
      height: theme.spacing(31.25),
    },
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
    height: 210,
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.down('xs')]: {
      height: 118,
    },
  },
  image: {
    height: '100%',
    WebkitMaskImage: '-webkit-radial-gradient(white, black)',
  },
  info: {
    fontSize: theme.typography.body2.fontSize,
    padding: theme.spacing(2),
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
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    textOverflow: 'ellipsis',
    lineClamp: 2,
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.body2.fontSize,
    },
  },
  date: {
    color: theme.palette.grey[600],
    marginTop: 'auto',
  },
}))

const LinkWrapper = ({ href, slug, children, ...rest }) =>
  href ? (
    <MuiLink href={href} target='_blank' {...rest}>
      {children}
    </MuiLink>
  ) : (
    <Link to={slug} {...rest}>
      {children}
    </Link>
  )

const PostCard = ({ title, type, date, cover, slug, href, withViewBtn }) => {
  const classes = useStyles()
  const images = cover.map((item) => getImage(item))
  return (
    <LinkWrapper className={classes.link} href={href} slug={slug}>
      <Box className={classes.root}>
        <Box className={classes.imageWrapper}>
          <GatsbyImage
            className={classes.image}
            image={images[0] || ''}
            placeholder='blurred'
            alt={title}
          ></GatsbyImage>
        </Box>
        <Box className={classes.info}>
          <Box className={classes.type}>{type}</Box>
          <Box className={classes.title}>{title}</Box>
          {withViewBtn ? (
            <Box className={classes.btnWrapper}>
              <ViewButton slug={slug}></ViewButton>
            </Box>
          ) : (
            <Box className={classes.date}>{date}</Box>
          )}
        </Box>
      </Box>
    </LinkWrapper>
  )
}

export default PostCard
