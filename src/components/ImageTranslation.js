import React from 'react'
import { useTheme } from '@material-ui/styles'
import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage, withArtDirection } from 'gatsby-plugin-image'
import { useI18next } from 'gatsby-plugin-react-i18next'
const { languagePrefixes } = require('../../languages')

// Note: You can change "images" to whatever you'd like.

const SectionBannerImage = ({ alt, filename, hasMobile = true, ...rest }) => {
  const theme = useTheme()
  const { language } = useI18next()
  const getOriFilename = (isMobile) =>
    `${filename}${isMobile ? `_mobile` : ''}${languagePrefixes[language] ? `_${languagePrefixes[language]}` : ''}`
  return (
    <StaticQuery
      query={graphql`
        query {
          images: allFile(filter: { sourceInstanceName: { eq: "imagesTranslation" } }) {
            nodes {
              relativePath
              name
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      `}
      render={(data) => {
        const imageData = data.images.nodes.find((n) => {
          return n.name === getOriFilename()
        })

        let image = null

        if (!hasMobile) {
          image = getImage(imageData)
        } else {
          const mobileImageData = data.images.nodes.find((n) => {
            return n.name === getOriFilename(true)
          })
          image = mobileImageData
            ? withArtDirection(getImage(imageData), [
                mobileImageData && {
                  media: `(max-width: ${theme.breakpoints.values.sm}px)`,
                  image: getImage(mobileImageData),
                },
              ])
            : getImage(imageData)
        }

        return <GatsbyImage image={image} alt={alt} {...rest}></GatsbyImage>
      }}
    />
  )
}

export default SectionBannerImage
