import React from 'react'
import Mission from '@views/mission'
import { graphql } from 'gatsby'

const MissionPage = () => {
  return <Mission />
}

export default MissionPage

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
