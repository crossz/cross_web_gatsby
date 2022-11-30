import React, { useState } from 'react'
import { makeStyles, Box, alpha } from '@material-ui/core/'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper/core'
import 'swiper/css'
import ImageTranslation from '../ImageTranslation'

SwiperCore.use([Autoplay])

const SYMPTOMS = [
  {
    label: '頭痛',
  },
  {
    label: '耳鳴',
  },
  {
    label: '鼻塞',
  },
  {
    label: '鼻涕帶血絲',
  },
  {
    label: '淋巴結腫大',
  },
  {
    label: '聲音沙啞',
  },
]

const useStyles = makeStyles((theme) => ({
  root: {},
  symptomImg: {
    display: 'block',
    objectFit: 'contain',
  },
  swiper: {
    // width: 780,
    height: '100%',
    '& .swiper-button-prev,.swiper-button-next': {
      '&:after': {
        fontSize: theme.spacing(3),
        color: alpha(theme.palette.primary.contrastText, 0.25),
      },
    },
  },
  imgWrapper: {
    transition: theme.transitions.create(['transform'], {
      duration: theme.transitions.duration.standard,
    }),
  },
}))

const SymptomSwiper = () => {
  const classes = useStyles()
  const [deg, setDeg] = useState(0)
  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <Swiper
      className={classes.swiper}
      loop
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        reverseDirection: true,
      }}
      // navigation
      initialSlide={0}
      onSlideChange={(swiper) => {
        if (swiper.realIndex === activeSlide) return
        let plusDeg = 0
        setActiveSlide((oldActiveSlide) => {
          switch (true) {
            case swiper.isBeginning:
              plusDeg = 60
              break
            case swiper.isEnd:
              plusDeg = -60
              break
            case swiper.realIndex < oldActiveSlide:
              plusDeg = 60
              break
            case swiper.realIndex > oldActiveSlide:
              plusDeg = -60
              break
            default:
              break
          }
          return swiper.realIndex
        })
        setDeg((oldDeg) => oldDeg + plusDeg)
      }}
    >
      {SYMPTOMS?.map((symptom, index) => {
        return <SwiperSlide key={index} id={activeSlide === index ? 'ECP_Symptoms_Clicks' : ''}></SwiperSlide>
      })}
      <Box
        className={classes.imgWrapper}
        top={0}
        left={0}
        right={0}
        position='absolute'
        mx='auto'
        style={{
          transform: `rotate(${deg}deg)`,
        }}
      >
        <ImageTranslation hasMobile={false} filename='wheel' alt='symptoms'></ImageTranslation>
      </Box>
    </Swiper>
  )
}

export default SymptomSwiper
