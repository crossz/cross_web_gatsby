import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import SectionBanner from './SectionBanner'
import ShoppingBtn from './ShoppingBtn'
import { makeStyles } from '@material-ui/core'
import { useMatch } from '@reach/router'
import { HeroThemeContext } from '@layouts/context'
import Seo from './Seo'
import { useI18next } from 'gatsby-plugin-react-i18next'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: theme.palette.background.paper,
  },
}))

const Layout = ({ children }) => {
  const classes = useStyles()
  const [heroTheme, setHeroTheme] = useState('light')
  const [logoTheme, setLogoTheme] = useState()

  const { routed, language } = useI18next()
  const isPromotions = useMatch(`${routed ? `/${language}` : ''}/promotions/consumption-voucher`)
  const isRehealthPrevaccinationPlans = useMatch(
    `${routed ? `/${language}` : ''}/whats-new/campaign/rehealth-prevaccination-plans`
  )
  const isCampaign = useMatch(`${routed ? `/${language}` : ''}/whats-new/campaign`)

  const handleChangeHeroTheme = (theme, index) => {
    setHeroTheme(theme)
    setLogoTheme(index)
  }

  return (
    <HeroThemeContext.Provider
      value={{
        theme: heroTheme,
        logoTheme: logoTheme,
        toggleTheme: handleChangeHeroTheme,
      }}
    >
      <Seo></Seo>
      <main id='main' className={classes.root}>
        {isPromotions || isRehealthPrevaccinationPlans || isCampaign ? (
          children
        ) : (
          <>
            <Header></Header>
            <SectionBanner></SectionBanner>
            {children}
            <Footer></Footer>
          </>
        )}
        <ShoppingBtn></ShoppingBtn>
      </main>
    </HeroThemeContext.Provider>
  )
}

export default Layout
