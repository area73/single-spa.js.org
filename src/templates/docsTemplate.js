import React from "react";
import Link from 'gatsby-link'
import styles from './docsTemplate.module.css'

export default function Template ({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <div className="sspa-container">
      <div className="page">
        <h1>{frontmatter.title}</h1>
        <div
          className="page-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <div className={styles.footer}>
          {frontmatter.prevLink && (
            <span style={{marginRight: 'auto'}}>
              &larr; &nbsp;
              <Link to={frontmatter.prevLink}>{buildLinkText(frontmatter.prevLink)}</Link>
            </span>
          )}
          { buildVersionText(frontmatter.path) }
          {frontmatter.nextLink && (
            <span style={{marginLeft: 'auto'}}>
              <Link to={frontmatter.nextLink}>{buildLinkText(frontmatter.nextLink)}</Link>
              &nbsp; &rarr;
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

function buildLinkText(link) {
  const baseText = link.replace(/\/docs\//g, '').replace(/v\d{1}\//g, '').replace(/-/g, ' ').replace(/\.html/g, '')
  return baseText.charAt(0).toUpperCase() + baseText.slice(1)
}
  
function buildVersionText(path) {
  const versionFound = path.match(/\/v\d{1}\//g)
  if(versionFound) {
    return <span style={{margin: 'auto'}}>Viewing docs for {versionFound[0].replace(/\//g, '')}</span>
  }
  return ''
}

export const pageQuery = graphql`
  query PageByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        prevLink
        nextLink
      }
    }
  }
`;