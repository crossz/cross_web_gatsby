import React from 'react'
import Map from '@components/Map'
import Layout from '@layouts/Layout'
import { graphql } from 'gatsby'

const ServiceLocation = () => {
  return (
    <Layout>
      <Map></Map>
    </Layout>
  )
}

export default ServiceLocation

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
