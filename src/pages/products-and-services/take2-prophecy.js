import React from 'react'
import Take2Prophecy from '@views/take2-prophecy'
import { graphql } from 'gatsby'

const Take2ProphecyPage = () => <Take2Prophecy />
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
  }
`
