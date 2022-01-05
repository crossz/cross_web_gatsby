import * as React from 'react'
import Homepage from '@components/Homepage'
import { graphql } from 'gatsby'

const Index = ({ data }) => {
  console.log('process.env.GATSBY_API_URL', process.env.GATSBY_API_URL)
  const { promotionNodes, healthTipsNodes } = data
  return (
    <Homepage
      promotionNodes={promotionNodes?.nodes}
      healthTipsNodes={healthTipsNodes?.nodes}
    ></Homepage>
  )
}

export default Index

export const query = graphql`
  {
    promotionNodes: allMdx(
      limit: 6
      filter: { fileAbsolutePath: { regex: "/promotions/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "DD/MM/YYYY")
          type
          cover {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
    healthTipsNodes: allMdx(
      limit: 6
      filter: { fileAbsolutePath: { regex: "/health-tips/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "DD/MM/YYYY")
          type
          cover {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`
