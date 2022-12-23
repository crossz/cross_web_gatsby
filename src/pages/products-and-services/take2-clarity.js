import React from 'react'
import Take2Clarity from '@views/take2-clarity'
import { graphql } from 'gatsby'

const TakeClarity = () => <Take2Clarity />

export default TakeClarity

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { ns: { in: ["translation"] }, language: { eq: $language } }) {
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
