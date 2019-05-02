import axios from 'axios'
import path from 'path'

import dotenv from 'dotenv'
dotenv.config()

// import { Post } from './types'

// Typescript support in static.config.js is not yet supported, but is coming in a future update!

const accessToken = process.env.ACCESS_TOKEN
const spaceId = process.env.SPACE_ID

export default {
  getSiteData: async ({ dev }) => ({
    title: 'Ali Avci\'s personal site',
    lastBuilt: Date.now(),
  }),
  entry: 'index.tsx',
  siteRoot: 'https://aliavci.info',
  getRoutes: async () => {
    const { data: posts } /* :{ data: Post[] } */ = await axios.get(
      'https://cdn.contentful.com/spaces/' + spaceId + '/environments/master/entries?access_token=' + accessToken
    )
    return [
      {
        path: '/blog',
        getData: () => ({
          posts,
        }),
        children: posts.items.map((post /* : Post */) => {
          const postFields = post.fields
          return ({
            path: `/post/${post.sys.id}`,
            template: 'src/containers/Post',
            getData: () => ({
              post,
            }),
          })
        }),
      },
    ]
  },
  plugins: [
    'react-static-plugin-typescript',
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
