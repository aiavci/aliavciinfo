import React from 'react'
import { useRouteData } from 'react-static'
import { Link } from '@reach/router'
// import { Post } from 'types'

import { Page } from "r-t-components";

export default () => {
  const { posts }: { posts: any } = useRouteData()
  // console.log('posts', posts.items)

  const blogPosts: any[] = (posts && posts.items) ? posts.items : []

  return (
    <Page>
      <h1 style={{textAlign: 'center'}}>All Blogs</h1>
      <br />
      <ul>
        {blogPosts.map(post => (
          <li key={post.sys.id}>
            <Link to={`/blog/post/${post.sys.id}/`}>{post.fields.title}</Link>
          </li>
        ))}
      </ul>
    </Page>
  )
}
