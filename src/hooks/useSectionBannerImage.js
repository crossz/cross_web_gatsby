import { useStaticQuery, graphql } from 'gatsby'

const useSectionBannerImage = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { sourceInstanceName: { eq: "images" }, relativeDirectory: { eq: "sectionBanners" } }) {
        nodes {
          relativePath
          name
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `)

  return data.allFile.nodes
}

export default useSectionBannerImage
