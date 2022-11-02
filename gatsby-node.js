'use strict'
const { resolve } = require('path')
const { paginate } = require('gatsby-awesome-pagination')

const formatEndsPath = (path) => (path?.endsWith('/') ? path : `${path}/`)
const formatStartsPath = (path) => (path?.startsWith('/') ? path : `/${path}`)

exports.onCreateNode = async ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'Mdx') {
    const { relativeDirectory, name } = getNode(node.parent)

    let slug = ''

    switch (relativeDirectory) {
      case 'clinical-papers':
        break
      case 'join-us':
        slug = `/about-us/${relativeDirectory}/${node.id}`
        break
      case 'terms-and-conditions':
        slug = `/terms-and-conditions/${
          node.frontmatter.slug === 'terms-and-conditions'
            ? ''
            : node.frontmatter.slug || node.frontmatter.title?.trim() || name
        }`
        break
      case 'health-tips':
        slug = node.frontmatter.postType
          ? `/whats-new/campaign/${relativeDirectory}/${
              node.frontmatter.slug || node.frontmatter.cpTitle?.trim() || name
            }`
          : `/whats-new/${relativeDirectory}/${node.frontmatter.slug || node.frontmatter.title?.trim() || name}`
        break
      case 'promotions':
      case 'updates':
        slug = `/whats-new/${relativeDirectory}/${node.frontmatter.slug || node.frontmatter.title?.trim() || name}`
        break
      case 'campaign-page-posts':
        slug = `/whats-new/campaign/${relativeDirectory}/${
          node.frontmatter.slug || node.frontmatter.title?.trim() || name
        }`
        break
      default:
        break
    }

    slug &&
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createRedirect, createPage } = actions

  const careers = await graphql(`
    {
      allMdx(filter: { fields: { slug: { regex: "/join-us/" } } }, sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          id
        }
      }
    }
  `)

  if (careers.errors) return reporter.panicOnBuild(`Error while running GraphQL query.`)
  const joinUsComponent = resolve(__dirname, 'src/templates/JoinUs.js')
  paginate({
    createPage, // The Gatsby `createPage` function
    items: careers?.data?.allMdx?.nodes || [], // An array of objects
    itemsPerPage: 5, // How many items you want per page
    pathPrefix: '/about-us/join-us/', // Creates pages like `/blog`, `/blog/2`, etc
    component: joinUsComponent, // Just like `createPage()`
  })

  const allMdxQuery = await graphql(`
    {
      allMdx(limit: 1000) {
        nodes {
          id
          fields {
            slug
          }
          parent {
            ... on File {
              relativeDirectory
            }
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  const oldPostsData = await graphql(`
    query {
      allMdx(filter: { frontmatter: { date: { lt: "2021-10-31" } } }) {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `)
  const oldPosts = new Set(oldPostsData?.data?.allMdx?.nodes?.map((n) => n?.fields?.slug))
  if (allMdxQuery.errors) return reporter.panicOnBuild(`Error while running GraphQL query.`)

  const postTemplate = resolve(__dirname, 'src/templates/Post.js')
  const tAndCTemplate = resolve(__dirname, 'src/templates/T&C.js')
  const careerTemplate = resolve(__dirname, 'src/templates/Career.js')

  const allMdxList = allMdxQuery.data.allMdx.nodes

  allMdxList?.forEach((mdx) => {
    let path = mdx.fields?.slug
    if (!path) return

    let component = null,
      defer = false

    switch (mdx.parent.relativeDirectory) {
      case 'terms-and-conditions':
        component = `${tAndCTemplate}?__contentFilePath=${mdx.internal.contentFilePath}`
        defer = true
        break
      case 'join-us':
        component = `${careerTemplate}?__contentFilePath=${mdx.internal.contentFilePath}`
        defer = true
        break
      default:
        component = `${postTemplate}?__contentFilePath=${mdx.internal.contentFilePath}`
        defer = oldPosts.has(mdx.fields.slug)
        break
    }

    createPage({
      path,
      component,
      context: {
        slug: mdx.fields.slug,
        sectionPath: mdx.parent.relativeDirectory,
        regex: `/${mdx.parent.relativeDirectory}/`,
        id: mdx.id,
      },
      defer,
    })
  })

  createRedirect({
    fromPath: '/index.html',
    redirectInBrowser: true,
    toPath: '/',
  })
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type Mdx implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      region: String!
    }
  `
  createTypes(typeDefs)
}
