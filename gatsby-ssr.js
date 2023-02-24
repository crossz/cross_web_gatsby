import React from 'react'
import { wrapRootElement, wrapPageElement } from './wrapElement'
// import useSiteMetadata from '@hooks/useSiteMetadata'
// import useLanguageInSSR from '@hooks/useLanguageInSSR'
import { languages } from './languages'

// const { siteUrl } = useSiteMetadata() // hooks not working here.
// const siteUrl = `${process.env.GATSBY_SITE_URL}` // TODO: wrongly used for 'health-platform'.
const siteUrl = "https://take2health.net"

// </* Solutin1(ok): basic solution by using ESM importing, not in Gatsby way, aka no GraphQL.
// const headComponents = [
//   <link rel="alternate" key="languages-zh-hk" href={`${siteUrl}/zh-HK`} hrefLang="zh-HK" />,
//   <link rel="alternate" key="languages-zh-cn" href={`${siteUrl}/zh-CN`} hrefLang="zh-CN" />,
//   <link rel="alternate"key="languages-en" href={`${siteUrl}/en`} hrefLang="en" />,
//   <link rel="alternate"key="languages-x-default" href={`${siteUrl}`} hrefLang="x-default" />,
// ];

languages.push('')
const headComponents = languages.map((locale) => {
    const hrefString = `${siteUrl}/${locale}`
    const hreflangString = locale === '' ? 'x-default' : locale
  return(
    <link rel="alternate" href={hrefString} hrefLang={hreflangString} />
  )
})
// */>

// </* Solutin2(failed): Please note: As of Gatsby 5 the <StaticQuery /> component is deprecated. Use the useStaticQuery hook instead. <StaticQuery /> will be removed in Gatsby 6.
// const headComponents = () => {
//   return(
//     <StaticQuery
//       query={graphQL`
//         query MyQuery {
//           allLocale(filter: {ns: {eq: "translation"}}) {
//             nodes {
//               language
//             }
//           }
//         }
//         `
//       }
//       render={data => (
//         data.allLocale.nodes.language.map((locale) => {
//           const hrefstring = `http://example.com/${locale}`
//           console.log(`----==== hrefstring: ${hrefstring}`)
//           return (
//             <link rel="alternate" href={hrefstring} hrefLang={locale} />
//           )
//         })
//       )}
//     />
//   )
// }
// */>

// </* Solutin3 (failed): ERROR #98124  WEBPACK; Generating development SSR bundle failed; Can't resolve 'public/page-data/sq/d/284492608.json'
// const query = useStaticQuery(graphql`
//   query MyQuery {
//     allLocale(filter: {ns: {eq: "translation"}}) {
//       nodes {
//         language
//       }
//     }
//   }
// `)
// 
// const { allLocale } = useStaticQuery(query)
// console.log(allLocale)
// 
// const headComponents = allLocale.nodes.language.map((locale) => {
//   const hrefstring = `http://example.com/${locale}`
//   return(
//     <link rel="alternate" href={hrefstring} hrefLang={locale} />
//   )
// })
// */>

// </* Solutin4(failed for build): gatsby way (with GraphQL), but only works in Gatsby-ssr,js ,not in Gatsby-browser.js or wrapElement.js!!!
// const language = useLanguageInSSR() // an array (not object): [ { language: 'zh-HK' }, { language: 'zh-CN' }, { language: 'en' } ]
// language.push({language: ''})

// const headComponents = language.map((locale) => {
//   const hrefString = `${siteUrl}/${locale.language}`
//   const hreflangString = locale.language === '' ? 'x-default' : locale.language
//   return(
//     <link rel="alternate" href={hrefString} hrefLang={hreflangString} />
//   )
// })
// */>


const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(headComponents);
};

export { wrapRootElement, wrapPageElement, onRenderBody }
