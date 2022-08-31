import React, { useLayoutEffect, useRef } from 'react'
import { makeStyles, createStyles, Box, Container } from '@material-ui/core'
import Header from './Components/Header'
import Sections from './Components/Sections'
import ContactReference from './Components/ContactReference'
import Footer from './Components/Footer'
import Banner from './Components/Banner'
import { gsap, ScrollTrigger } from '@components/CampaignV2/utils/initGsap'
import { ImagesTranslationContext } from '@components/CampaignV2/utils/context'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& sup': {
        fontSize: theme.typography.caption.fontSize,
      },
    },
  })
)

const Page = ({ storyNodes, healthTipsNodes, imagesTranslation, athleteNodes }) => {
  const classes = useStyles()
  const el = useRef()
  const q = gsap.utils.selector(el)
  const t = useRef()

  useLayoutEffect(() => {
    // symptom circle scale animation
    t.current = gsap.timeline()
    t.current
      .fromTo(q('.gsap-scale-1'), { scale: 1 }, { scale: 0.9, duration: 2, repeat: -1, yoyoEase: true })
      .fromTo(q('.gsap-scale-2'), { scale: 0.98 }, { scale: 1, duration: 2, repeat: -1, yoyoEase: true })

    // page scroll trigger fade in animation
    for (let index = 1; index <= 11; index++) {
      const fadeIn = gsap.fromTo(
        q(`.gsap-fade-in-${index}`),
        { autoAlpha: 0, y: 100 },
        { duration: 1, autoAlpha: 1, y: 0, stagger: 0.1 }
      )
      ScrollTrigger.create({
        trigger: q(`.gsap-fade-in-${index}-trigger`),
        animation: fadeIn,
        start: '200 bottom',
        toggleActions: 'play none none none',
      })
    }

    return () => ScrollTrigger.kill()
  }, [])

  return (
    <ImagesTranslationContext.Provider value={{ images: imagesTranslation }}>
      <Box
        className={classes.root}
        id='scroll-to-top'
        ref={(current) => {
          el.current = current
        }}
        bgcolor='#FAFFFF'
      >
        <Header></Header>
        <Container disableGutters maxWidth='lg'>
          <Banner />
          <Sections storyNodes={storyNodes} healthTipsNodes={healthTipsNodes} athleteNodes={athleteNodes}></Sections>
          <ContactReference></ContactReference>
          <Footer></Footer>
        </Container>
      </Box>
    </ImagesTranslationContext.Provider>
  )
}

export default Page
