import React from 'react'
import Take2Prophecy from '@views/take2-prophecy'
import { graphql } from 'gatsby'
import { ImagesTranslationContext } from '@layouts/context'

const Take2ProphecyPage = ({ data }) => {
  const { imagesTranslation } = data
  return (
    <ImagesTranslationContext.Provider
      value={{
        images: imagesTranslation?.nodes,
      }}
    >
      <Take2Prophecy />
    </ImagesTranslationContext.Provider>
  )
}

export default Take2ProphecyPage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    imagesTranslation: allFile(filter: { sourceInstanceName: { eq: "imagesTranslation" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`
