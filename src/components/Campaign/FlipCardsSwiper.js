import React, { useEffect, useState } from 'react'
import {
  makeStyles,
  createStyles,
  useTheme,
  useMediaQuery,
} from '@material-ui/core'
import Box from '@material-ui/core/Box'
import classnames from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/core'

import 'swiper/swiper-bundle.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'
import { cardListData } from './utils/constant'
import IconArrow from './images/icon_arrow.png'
import { gsap } from './utils/initGsap'
import Container from '@material-ui/core/Container'

SwiperCore.use([Autoplay, Pagination, Navigation])

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},
    sectionFiveText: {
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.typography.body1.fontSize,
        letterSpacing: 2,
      },
    },
    cardWrapper: {},
    questionWrapper: {
      width: '27vw',
      maxWidth: theme.spacing(47),
      height: '28vw',
      maxHeight: theme.spacing(48.75),
      position: 'relative',
      flexShrink: 0,
      transform: 'rotateY(0deg)',
      transformStyle: 'preserve-3d',
      perspective: 1000,
      cursor: 'pointer',
      transition: 'transform 0.7s ease-in-out',
      fontSize: theme.spacing(4),
      [theme.breakpoints.down('md')]: {
        fontSize: theme.typography.h5.fontSize,
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.typography.h6.fontSize,
      },
      [theme.breakpoints.only('xs')]: {
        width: '56vw',
        maxWidth: theme.spacing(26.25),
        height: '55vw',
        maxHeight: theme.spacing(26),
      },
    },
    questionContent: {
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: theme.spacing(4),
      border: `6px solid ${theme.palette.primary.main}`,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      alignItems: 'center',
      boxSizing: 'border-box',
      flexDirection: 'column',
      backfaceVisibility: 'hidden',
      position: 'absolute',
      zIndex: 1,
      [theme.breakpoints.only('xs')]: {
        border: `3px solid ${theme.palette.primary.main}`,
        borderRadius: theme.spacing(2),
      },
    },
    questionIcon: {
      width: '60%',
      height: 'auto',
      display: 'block',
    },
    answerWrapper: {
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
      borderRadius: theme.spacing(4),
      border: `6px solid ${theme.palette.primary.main}`,
      backgroundColor: theme.palette.background.default,
      display: 'flex',
      alignItems: 'center',
      position: 'absolute',
      zIndex: -1,
      transform: 'rotateY(180deg) translateZ(1px)',
      [theme.breakpoints.only('xs')]: {
        border: `3px solid ${theme.palette.primary.main}`,
        borderRadius: theme.spacing(2),
      },
    },
    answerImg: {
      display: 'block',
      width: '100%',
    },
    swiperSlide: {
      display: 'flex',
      justifyContent: 'center',
    },
    swiper: {
      paddingBottom: theme.spacing(8),
      '& .swiper-pagination': {
        bottom: theme.spacing(1),
        [theme.breakpoints.only('xs')]: {
          bottom: theme.spacing(3),
        },
      },
      '& .swiper-pagination-bullet': {
        width: theme.spacing(1.5),
        height: theme.spacing(1.5),
        backgroundColor: theme.palette.secondary.contrastText,
        opacity: 1,
        [theme.breakpoints.only('xs')]: {
          width: theme.spacing(1),
          height: theme.spacing(1),
        },
      },
      '& .swiper-pagination-bullet-active': {
        backgroundColor: theme.palette.secondary.main,
      },
      '& .swiper-button-next': {
        '&:after': {
          backgroundImage: `url(${IconArrow})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '150%',
          backgroundPositionY: 'center',
          backgroundPositionX: 'center',
          transform: 'rotate(-90deg)',
          content: '""',
          width: '100%',
          height: theme.spacing(6),
        },
      },
      '& .swiper-button-prev': {
        '&:after': {
          backgroundImage: `url(${IconArrow})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '150%',
          backgroundPositionY: 'center',
          backgroundPositionX: 'center',
          transform: 'rotate(90deg)',
          content: '""',
          width: '100%',
          height: theme.spacing(6),
        },
      },
    },
    slideHover: {
      '&:hover': {
        transform: 'rotateY(-180deg)',
      },
    },
    cover: {
      position: 'absolute',
      left: -2,
      right: -2,
      top: -2,
      bottom: -2,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      borderRadius: theme.spacing(3.25),
      transition: 'opacity 0.3s ease',
      opacity: 1,
      [theme.breakpoints.only('xs')]: {
        borderRadius: theme.spacing(1.5),
      },
    },
    hideCover: {
      opacity: 0,
    },
    container: {
      padding: 0,
    },
  })
)

const FlipCardsSwiper = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.only('xs'))
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    gsap.fromTo(
      '.swiper-button-next',
      {
        opacity: 1,
        scale: 1,
        x: -12,
        repeat: -1,
      },
      {
        opacity: 0.8,
        scale: 0.8,
        x: 12,
        duration: 1,
        repeat: -1,
        ease: 'power1.inOut',
        yoyo: true,
      }
    )
    gsap.fromTo(
      '.swiper-button-prev',
      {
        opacity: 1,
        scale: 1,
        x: 12,
        repeat: -1,
      },
      {
        opacity: 0.8,
        scale: 0.8,
        x: -12,
        duration: 1,
        repeat: -1,
        ease: 'power1.inOut',
        yoyo: true,
      }
    )
  }, [])

  const fakeActive = (index) =>
    index ===
    (activeSlide + (matches ? 0 : 1) >= 5 ? 0 : activeSlide + (matches ? 0 : 1))

  return (
    <Container className={classes.container} maxWidth='xl'>
      <Swiper
        spaceBetween={matches ? '-40%' : '-13%'}
        slidesPerView={matches ? 1 : 3}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        grabCursor
        loop={true}
        onSlideChange={(swiper) => {
          setActiveSlide(swiper.realIndex)
        }}
        className={classes.swiper}
        initialSlide={matches ? 0 : 2}
        onInit={(swiper) => {
          setActiveSlide(swiper.realIndex)
        }}
      >
        {cardListData.map((card, index) => {
          const CardIcon = card.icon

          return (
            <SwiperSlide className={classes.swiperSlide} key={card.label}>
              <Box
                className={classnames(classes.questionWrapper, 'flip-card', {
                  [classes.slideHover]: fakeActive(index),
                })}
              >
                <Box className={classes.questionContent}>
                  <Box
                    className={classnames(classes.cover, {
                      [classes.hideCover]: fakeActive(index),
                    })}
                  ></Box>
                  <Box
                    fontWeight='fontWeightBold'
                    color='secondary.main'
                    m={0}
                    mt={matches ? 1.5 : 4}
                  >
                    {card.label}
                  </Box>
                  <CardIcon className={classes.questionIcon}></CardIcon>
                  <Box
                    fontWeight='fontWeightBold'
                    color='primary.light'
                    m={0}
                    mt='auto'
                    mb={matches ? 3 : 4}
                  >
                    {card.question}
                  </Box>
                </Box>
                <Box className={classes.answerWrapper}>
                  <img
                    className={classes.answerImg}
                    src={card.answer}
                    alt={card.label}
                  />
                </Box>
              </Box>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Container>
  )
}

export default FlipCardsSwiper
