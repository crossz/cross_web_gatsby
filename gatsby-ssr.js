import React from 'react'
const { languages } = require('./languages')
import { wrapRootElement, wrapPageElement } from './wrapElement'

// const headComponents = [
//   <link rel="alternate" key="languages-zh-hk" href="http://example.com/zh-HK" hrefLang="zh-HK" />,
//   <link rel="alternate" key="languages-zh-cn" href="http://example.com/zh-CN" hrefLang="zh-CN" />,
//   <link rel="alternate"key="languages-en" href="http://example.com/en" hrefLang="en" />,
// ];

const headComponents = languages.map((locale) => {
  const hrefstring = `http://example.com/${locale}`
  return(
    <link rel="alternate" href={hrefstring} hrefLang={locale} />
  )
})

const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(headComponents);
};

export { wrapRootElement, wrapPageElement, onRenderBody }
