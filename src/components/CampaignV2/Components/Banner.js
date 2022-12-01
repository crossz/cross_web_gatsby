import React from 'react'
import { makeStyles, createStyles, useTheme, Box, useMediaQuery, Button } from '@material-ui/core'
import classnames from 'classnames'
import { useI18next } from 'gatsby-plugin-react-i18next'
import ImageTranslation from './ImageTranslation'
import useLangQuery from '@hooks/useLangQuery'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
    },
    button: {
      position: 'absolute',
      left: ({ isEn }) => `${((isEn ? 123 : 124) / 1440) * 100}%`,
      top: ({ isEn }) => `${((isEn ? 424 : 383) / 584) * 100}%`,
      zIndex: 1,
    },
    mobileButton: {
      left: ({ isEn }) => `${((isEn ? 26 : 19) / 320) * 100}%`,
      top: ({ isEn }) => `${((isEn ? 410 : 333) / 486) * 100}%`,
    },
  })
)
const Banner = () => {
  const { t, language } = useI18next()
  const isEn = language === 'en'
  const classes = useStyles({ isEn })
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'), { noSsr: true })
  const addLangQuery = useLangQuery()

  return (
    <Box position='relative'>
      <Button
        className={classnames(classes.button, {
          [classes.mobileButton]: isMobile,
        })}
        href={addLangQuery()}
        variant='contained'
        color='secondary'
        id='ECP_Banner_EH'
        target='_blank'
      >
        {t('common.book_now')}
      </Button>
      <ImageTranslation filename='hero_banner' alt='hero banner'></ImageTranslation>
    </Box>
  )
}

export default Banner
