import React from 'react'
import CancerScreen from '@views/cancer-screen'
import { graphql } from 'gatsby'

const CancerScreenPackage = () => <CancerScreen />

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
  }
`
