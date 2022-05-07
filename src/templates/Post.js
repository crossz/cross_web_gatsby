import React from 'react'
import MdxLayout from '@layouts/MdxLayout'
import { graphql } from 'gatsby'
import MorePosts from '@components/WhatsNew/MorePosts'
import MoreUpdates from '@components/WhatsNew/MoreUpdates'
import {
  makeStyles,
  alpha,
  Typography,
  Container,
  Box,
  Breadcrumbs,
  Hidden,
} from '@material-ui/core'
import ArrowIcon from '@images/icons/arrow.svg'
import useMenu from '@hooks/useMenu'
import Links from '@components/WhatsNew/Links'
import { StaticImage } from 'gatsby-plugin-image'
import { POST_TYPES } from '@utils/constant'
import Layout from '@layouts/Layout'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import Link from '@components/Link'
import { formatLocal } from '@utils/moment'

const useStyles = makeStyles((theme) => ({
  root: {},
  breadcrumbsWrapper: {
    position: 'relative',
    zIndex: 1,
    height: 150,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    display: 'flex',
    alignItems: 'center',
    fontSize: theme.typography.body2.fontSize,
    '& a': {
      color: theme.palette.primary.contrastText,
    },
    [theme.breakpoints.down('xs')]: {
      height: 85,
    },
  },
  breadcrumbs: {
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.caption.fontSize,
      padding: theme.spacing(0, 3),
    },
    '& $ol': {
      flexWrap: 'nowrap',
    },
    '& $li:last-child': {
      overflow: 'hidden',
    },
  },
  breadcrumbsTitle: {
    color: theme.palette.primary.contrastText,
    maxWidth: theme.spacing(40),
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  arrowIcon: {
    width: theme.spacing(1.5),
    height: theme.spacing(1.5),
    '& path': {
      fill: theme.palette.primary.contrastText,
    },
  },
  header: {
    paddingTop: theme.spacing(8),
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(1),
    },
  },
  top: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      alignItems: 'flex-start',
    },
  },
  topLeft: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
  date: {
    color: theme.palette.text.primary,
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    marginRight: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(1.5),
      marginBottom: theme.spacing(1),
      marginRight: theme.spacing(2),
      fontSize: theme.typography.body2.fontSize,
      fontWeight: theme.typography.fontWeightMedium,
    },
  },
  mark: {
    fontSize: theme.typography.overline.fontSize,
    color: theme.palette.secondary.contrastText,
    padding: theme.spacing(0.25, 1),
    display: 'inline-block',
  },
  contentWrapper: {
    position: 'relative',
    padding: theme.spacing(0, 3),
    minHeight: theme.spacing(80),
  },
  content: {
    paddingBottom: theme.spacing(30),
    position: 'relative',
    zIndex: 2,
    [theme.breakpoints.down('xs')]: {
      paddingBottom: theme.spacing(15),
    },
  },
  image: {
    marginTop: theme.spacing(-4),
    borderRadius: theme.spacing(0.75),
    overflow: 'hidden',
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(-6),
    },
  },
  postBg: {
    width: '100%',
    height: 800,
    position: 'absolute',
    bottom: 0,
    left: 0,
    [theme.breakpoints.down('xs')]: {
      height: 400,
    },
  },
  moreWrapper: {
    padding: theme.spacing(5, 3),
    backgroundColor: alpha(theme.palette.primary.main, 0.03),
    [theme.breakpoints.down('xs')]: {
      backgroundColor: '#F8F9FA',
    },
  },
}))

const morePostTitle = {
  'health-tips': 'menu.health_tips',
  promotions: 'menu.promotions',
  updates: 'menu.updates',
}

const Post = ({ data, pageContext, location: { href } }) => {
  const { sectionPath, regex } = pageContext
  const { t } = useTranslation()
  const classes = useStyles()
  const menu = useMenu()
  if (!data?.mdx) return null
  const mdx = data?.mdx?.body
  const { date, cpTitle, title, type } = data?.mdx?.frontmatter
  const morePostsNodes = data?.morePosts?.nodes
  const middlePath = `/whats-new/${
    sectionPath === 'campaign-page-posts' ? 'campaign/' : sectionPath
  }`
  const middleTitle =
    sectionPath === 'campaign-page-posts'
      ? 'Campaign Page'
      : menu[0].sections?.find((section) => section.path.includes(regex))?.title

  return (
    <Layout>
      <Box className={classes.root}>
        <Container disableGutters maxWidth='xl'>
          <Box className={classes.breadcrumbsWrapper}>
            <Hidden xsDown>
              <Container disableGutters maxWidth='sm'>
                <Breadcrumbs
                  className={classes.breadcrumbs}
                  separator={<ArrowIcon className={classes.arrowIcon} />}
                  aria-label='breadcrumb'
                >
                  <Link to='/'>Take2 Health</Link>
                  <Link to={middlePath}>{t(middleTitle)}</Link>
                  <Box className={classes.breadcrumbsTitle}>{title}</Box>
                </Breadcrumbs>
              </Container>
            </Hidden>
          </Box>
          <Box className={classes.contentWrapper}>
            <Container className={classes.content} disableGutters maxWidth='sm'>
              <Box className={classes.header}>
                <Box className={classes.top}>
                  <Box className={classes.topLeft}>
                    <Box className={classes.date}>{formatLocal(date)}</Box>
                    {type && (
                      <Box
                        className={classes.mark}
                        bgcolor={
                          POST_TYPES.find((item) => item.label === type)
                            ?.color || 'secondary.main'
                        }
                      >
                        {t(`options.post_types.${type}`)}
                      </Box>
                    )}
                  </Box>
                  <Box ml='auto'>
                    <Links href={href}></Links>
                  </Box>
                </Box>
                <Typography variant='h5' color='primary'>
                  {cpTitle || title}
                </Typography>
              </Box>
              <MdxLayout>{mdx}</MdxLayout>
            </Container>
            <StaticImage
              className={classes.postBg}
              src='../assets/images/post_bg.png'
              alt='post background'
            ></StaticImage>
          </Box>
          <Box className={classes.moreWrapper}>
            <Container disableGutters maxWidth='md'>
              {pageContext?.sectionPath === 'updates' ? (
                <MoreUpdates
                  title={t('common.more', {
                    field: t(morePostTitle[pageContext?.sectionPath]),
                  })}
                  nodes={morePostsNodes}
                ></MoreUpdates>
              ) : (
                <MorePosts
                  title={t('common.more', {
                    field: t(morePostTitle[pageContext?.sectionPath]),
                  })}
                  nodes={morePostsNodes}
                ></MorePosts>
              )}
            </Container>
          </Box>
        </Container>
      </Box>
    </Layout>
  )
}

export default Post

export const query = graphql`
  query ($slug: String!, $regex: String!, $language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    mdx: mdx(
      fields: { slug: { eq: $slug } }
      frontmatter: { languages: { eq: $language } }
    ) {
      id
      frontmatter {
        date
        cpTitle
        title
        type
      }
      body
    }
    morePosts: allMdx(
      filter: {
        fileAbsolutePath: { regex: $regex }
        frontmatter: { languages: { eq: $language } }
      }
      limit: 3
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        fields {
          slug
        }
        id
        frontmatter {
          cover {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 2)
            }
          }
          date
          title
          type
          detail
          href
          # pdf {
          #   publicURL
          # }
        }
      }
    }
  }
`
