import React from 'react'
import { Root, Routes } from 'react-static'
import { Link, Router } from '@reach/router'
import './app.css'

import { FooterSection } from './sections'

function App() {
  return (
    <Root>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      <div style={{minHeight: '70vh'}}>
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
      <FooterSection />
    </Root>
  )
}

export default App
