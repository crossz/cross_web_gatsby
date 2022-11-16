import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
// Note: You can change "images" to whatever you'd like.

const SectionBannerImage = ({ alt, filename, ...rest }) => {
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

        if (!imageData) {
          return null
        }

        const image = getImage(imageData)

        return <GatsbyImage image={image} alt={alt} {...rest}></GatsbyImage>
      }}
    />
  )
}

export default SectionBannerImage
