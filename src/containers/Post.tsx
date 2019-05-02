import React from 'react'
import { useRouteData } from 'react-static'
import { Link } from '@reach/router'
// import { Post } from '../../types'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

import { Page } from "r-t-components";

export default () => {
  const { post }: { post: any } = useRouteData()

  const postFields = post.fields

  const isBlogContentExists = postFields && postFields.title && postFields.body

  if (!isBlogContentExists) {
    return null
  }

  return (
    <Page>
      <Link to="/blog/">{'<'} Back</Link>
      <br />
      <h1>{postFields.title}</h1>
      <div dangerouslySetInnerHTML = {{ __html: documentToHtmlString(postFields.body)}} />
    </Page>
  )
}
