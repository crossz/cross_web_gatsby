import React from 'react'
import useSiteMetadata from '@hooks/useSiteMetadata'

export const SEO = ({ title, description, image, pathname, children }) => {
  const { defaultTitle, defaultDescription, defaultImage, titleTemplate, siteUrl } = useSiteMetadata()

  const seo = {
    title: `${title || defaultTitle}${titleTemplate}`,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
  }
  console.log('seo', defaultTitle)
  return (
    <>
      <title>{seo.title}</title>
      <meta name='description' content={seo.description} />
      <meta name='image' content={seo.image} />
      {children}
    </>
  )
}
