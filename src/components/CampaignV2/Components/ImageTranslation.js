import React, { useContext } from 'react'
import { useTheme, useMediaQuery } from '@material-ui/core'
import { useI18next } from 'gatsby-plugin-react-i18next'
import { ImagesTranslationContext } from '@components/CampaignV2/utils/context'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const { languagePrefixes } = require('../../../../languages')

const ImageTranslation = ({ filename, alt, hasMobile = true, ...rest }) => {
  const { language } = useI18next()
  const { images } = useContext(ImagesTranslationContext)

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))

  const realFilename = `${filename}${isMobile && hasMobile ? '_mobile' : ''}${
    languagePrefixes[language] ? `_${languagePrefixes[language]}` : ''
  }`

  const imageData = images?.find((item) => item.name === realFilename)
  const image = getImage(imageData)

  return <GatsbyImage image={image} alt={alt} {...rest}></GatsbyImage>
}

export default ImageTranslation
