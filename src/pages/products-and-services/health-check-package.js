import React from 'react'
import HealthCheck from '@views/health-check-package'
import { graphql } from 'gatsby'
import { ImagesTranslationContext } from '@layouts/context'

const HealthCheckPackage = ({ data }) => {
  const { imagesTranslation } = data

  return (
    <ImagesTranslationContext.Provider
      value={{
        images: imagesTranslation?.nodes,
      }}
    >
      <HealthCheck />
    </ImagesTranslationContext.Provider>
  )
}

export default HealthCheckPackage

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
