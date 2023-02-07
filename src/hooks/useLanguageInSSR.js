import { useStaticQuery, graphql } from 'gatsby'

const useLanguageInSSR = () => {
  const { allLocale } = useStaticQuery(graphql`
    {
        allLocale(filter: {ns: {eq: "translation"}}) {
          nodes {
            language
          }
        }
    }
  `)
  return allLocale.nodes
}

export default useLanguageInSSR
