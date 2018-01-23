import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p>
      <Link to="/docs/index.html">Docs</Link>
    </p>
    <Link to="/blog/">Blog</Link>
  </div>
)

export default IndexPage
