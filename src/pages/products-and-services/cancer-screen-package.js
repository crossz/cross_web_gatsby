import React from 'react'
import CancerScreen from '@views/cancer-screen'
import { graphql } from 'gatsby'
import { ImagesTranslationContext } from '@layouts/context'

const CancerScreenPackage = ({ data }) => {
  const { imagesTranslation } = data
  return (
    <ImagesTranslationContext.Provider
      value={{
        images: imagesTranslation?.nodes,
      }}
    >
      <CancerScreen />
    </ImagesTranslationContext.Provider>
  )
}

export default CancerScreenPackage

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
