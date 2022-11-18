import React from 'react'
import { useTheme } from '@material-ui/styles'
import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage, withArtDirection } from 'gatsby-plugin-image'
// Note: You can change "images" to whatever you'd like.

const SectionBannerImage = ({ alt, filename, mobileFilename, ...rest }) => {
  const theme = useTheme()

  return (
    <StaticQuery
      query={graphql`
        query {
          images: allFile(
            filter: { sourceInstanceName: { eq: "images" }, relativeDirectory: { eq: "sectionBanners" } }
          ) {
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
          return n.name === filename
        })
        const mobileImageData = data.images.nodes.find((n) => {
          return n.name === mobileFilename
        })

        if (!imageData && !mobileImageData) {
          return null
        }

        const image = withArtDirection(getImage(imageData), [
          {
            media: `(max-width: ${theme.breakpoints.values.sm}px)`,
            image: getImage(mobileImageData),
          },
        ])

        return <GatsbyImage image={image} alt={alt} {...rest}></GatsbyImage>
      }}
    />
  )
}

export default SectionBannerImage
