import React from 'react'
import PostList from '@components/WhatsNew/PostList'
import { graphql } from 'gatsby'
import { useI18next } from 'gatsby-plugin-react-i18next'
import Layout from '@layouts/Layout'

const HealthTips = ({ data }) => {
  const { t } = useI18next()
  return (
    <Layout>
      <PostList
        title={t('whats_new.health_tips.title')}
        caption={t('whats_new.health_tips.detail')}
        nodes={data.allMdx.nodes}
      ></PostList>
    </Layout>
  )
}

export default HealthTips

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
    allMdx(
      limit: 1000
      filter: {
        fields: { slug: { regex: "/health-tips/" } }
        frontmatter: { languages: { eq: $language }, hide: { ne: true } }
      }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      totalCount
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          title
          date
          type
          href
          cover {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 2)
            }
          }
          # pdf {
          #   publicURL
          # }
        }
      }
    }
  }
`
