import React from 'react'
import HealthCheck from '@views/health-check-package'
import { graphql } from 'gatsby'

const HealthCheckPackage = () => <HealthCheck />

export default HealthCheckPackage

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
