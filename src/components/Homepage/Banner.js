import React, { useContext } from 'react'
import {
  makeStyles,
  Typography,
  Container,
  Button,
  Box,
  useTheme,
  useMediaQuery,
  Grid,
  alpha,
  Hidden,
} from '@material-ui/core'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/core'
import 'swiper/swiper-bundle.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'
import { HeroThemeContext } from '@layouts/context'
SwiperCore.use([Autoplay, Pagination, Navigation])

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
  },
  staticImage: {
    gridArea: '1/1',
    // height: 'calc((877 / 1440) * 100vw)',
    height: 877,
    [theme.breakpoints.down('xs')]: {
      minHeight: 'auto',
      height: 'calc((502 / 375) * 100vw)',
      maxHeight: 877,
    },
  },
  wrapper: {
    position: 'relative',
    gridArea: '1/1',
    display: 'grid',
    height: 877,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 6),
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 3),
      minHeight: 'auto',
      height: 'calc((502 / 375) * 100vw)',
      maxHeight: 877,
    },
  },
  contentWrapper: {
    height: '100%',
    maxWidth: theme.spacing(60),
    paddingTop: theme.spacing(29),
    paddingBottom: theme.spacing(5.5),
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      maxWidth: 'none',
      paddingTop: theme.spacing(3),
      paddingBottom: 0,
    },
  },
  reference: {
    fontSize: 9,
    lineHeight: 1,
    marginTop: 'auto',
    [theme.breakpoints.down('xs')]: {
      color: theme.palette.primary.main,
      fontSize: 6,
      marginTop: 'auto',
      padding: theme.spacing(0, 3),
      paddingTop: theme.spacing(1),
    },
  },
  btnWrapper: {
    display: 'flex',
    marginTop: theme.spacing(8),
    '& a': {
      textDecoration: 'none',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: 0,
      position: 'absolute',
      top: 314,
      left: theme.spacing(3),
    },
  },
  btn: {
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2, 3.5),
    },
  },
  heroBannerWrapper: {
    display: 'grid',
  },
  swiperWrapper: {
    width: '100%',
    '& .swiper-button-prev,.swiper-button-next': {
      '&:after': {
        fontSize: theme.spacing(5),
        color: alpha(theme.palette.common.black, 0.25),
        [theme.breakpoints.down('xs')]: {
          fontSize: theme.spacing(3),
        },
      },
    },
    '& .swiper-slide': {
      // width: '100%',
    },
    '& .swiper-pagination-bullet': {
      opacity: 0.3,
    },
    '& .swiper-pagination-bullet-active': {
      opacity: 1,
      background: alpha(theme.palette.common.white, 0.9),
    },
    '& .swiper-pagination': {
      [theme.breakpoints.down('xs')]: {
        bottom: 'auto',
        top: `calc( 100% - ${theme.spacing(9)}px)`,
      },
    },
  },
}))
const Banner = ({ nodes, changeHeroTheme }) => {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))
  const context = useContext(HeroThemeContext)

  return (
    <Container disableGutters maxWidth='xl' className={classes.root}>
      {nodes?.length > 0 && (
        <Swiper
          loop={nodes?.length > 1}
          navigation={nodes?.length > 1}
          pagination={{ clickable: true }}
          className={classes.swiperWrapper}
          autoplay={{ delay: 5000 }}
          onSlideChange={(swiper) => {
            return (
              context?.toggleTheme &&
              context?.toggleTheme(nodes[swiper.realIndex]?.frontmatter?.theme)
            )
          }}
          initialSlide={0}
        >
          {nodes?.map((node) => (
            <SwiperSlide key={node.id}>
              <Box className={classes.heroBannerWrapper}>
                {matches ? (
                  <GatsbyImage
                    className={classes.staticImage}
                    image={
                      node?.frontmatter?.mobileImage &&
                      getImage(node?.frontmatter?.mobileImage)
                    }
                    placeholder='blurred'
                    alt={node?.frontmatter?.title}
                  ></GatsbyImage>
                ) : (
                  <GatsbyImage
                    className={classes.staticImage}
                    image={
                      node?.frontmatter?.image &&
                      getImage(node?.frontmatter?.image)
                    }
                    placeholder='blurred'
                    alt={node?.frontmatter?.title}
                  ></GatsbyImage>
                )}
                <Container className={classes.wrapper} maxWidth='md'>
                  <Box className={classes.contentWrapper}>
                    <Typography variant='h2' color='primary' component='div'>
                      <Box
                        mb={matches ? 1 : 2}
                        lineHeight={1.5}
                        dangerouslySetInnerHTML={{
                          __html: node?.frontmatter?.title,
                        }}
                        whiteSpace='nowrap'
                      ></Box>
                      <Box
                        fontSize={
                          matches ? 'caption.fontSize' : 'body1.fontSize'
                        }
                        fontWeight='fontWeightLight'
                        lineHeight='1.5'
                        textAlign='justify'
                        dangerouslySetInnerHTML={{
                          __html: node?.frontmatter?.detail,
                        }}
                      ></Box>
                    </Typography>
                    <Grid className={classes.btnWrapper} container spacing={2}>
                      {node?.frontmatter?.buttons?.length > 0 &&
                        node?.frontmatter?.buttons?.map((button) => (
                          <Grid
                            key={button.name}
                            item
                            xs={
                              matches
                                ? 12
                                : node?.frontmatter?.buttons?.length === 1
                                ? 12
                                : 'auto'
                            }
                          >
                            {button.internal ? (
                              <Link to={button.link}>
                                <Button
                                  variant={button.variant}
                                  color={button.color}
                                  className={classes.btn}
                                  fullWidth={
                                    !matches &&
                                    node?.frontmatter?.buttons?.length === 1
                                  }
                                >
                                  {button.name}
                                </Button>
                              </Link>
                            ) : (
                              <Button
                                variant={button.variant}
                                color={button.color}
                                href={button.link}
                                target='_blank'
                                className={classes.btn}
                                fullWidth={
                                  !matches &&
                                  node?.frontmatter?.buttons?.length === 1
                                }
                              >
                                {button.name}
                              </Button>
                            )}
                          </Grid>
                        ))}
                    </Grid>
                    <Hidden xsDown>
                      <Box
                        className={classes.reference}
                        dangerouslySetInnerHTML={{
                          __html: node?.frontmatter?.reference,
                        }}
                      ></Box>
                    </Hidden>
                  </Box>
                </Container>
              </Box>
              <Hidden smUp>
                <Box
                  className={classes.reference}
                  dangerouslySetInnerHTML={{
                    __html: node?.frontmatter?.reference,
                  }}
                ></Box>
              </Hidden>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Container>
  )
}

export default Banner
