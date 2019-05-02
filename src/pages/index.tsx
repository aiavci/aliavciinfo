import React from 'react'

import { Page, ClickableCard } from 'r-t-components'
import { navigate } from '@reach/router';

export default () => (
  <Page style={{textAlign: 'center', margin: 'auto', alignItems: 'center'}}>
    <h1>
      Welcome to AliAvci.info
    </h1>
    <p>
      Personal site of Ali Avci, Web and Mobile App Developer
    </p>
    <ClickableCard title = "Visit My Blog Posts" imageUrl = "images/blog.jpg" onClickEvent={() => {navigate('blog')}}/>
  </Page>
);