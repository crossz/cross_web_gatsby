import React from 'react'
import Map from '@components/Map'
import { graphql } from 'gatsby'

const ServiceLocation = () => {
  return <Map></Map>
}

export default ServiceLocation

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
// export async function config() {
//   // Optionally use GraphQL here

//   return ({ params }) => {
//     return {
//       defer: true,
//     }
//   }
// }
