import React from 'react'
import { useTheme, useMediaQuery } from '@material-ui/core'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import useSectionBannerImage from '@hooks/useSectionBannerImage'

const SectionBannerImage = ({ alt, filename, mobileFilename, ...rest }) => {
  const theme = useTheme()
  const images = useSectionBannerImage()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
  const imageData = images?.find((item) => item.name === filename)
  const mobileImageData = images?.find((item) => item.name === mobileFilename)

  const image = getImage(isMobile ? mobileImageData : imageData)

  return <GatsbyImage image={image} alt={alt} {...rest}></GatsbyImage>
}

export default SectionBannerImage
