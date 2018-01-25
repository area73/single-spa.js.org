import React from "react";
import Link from 'gatsby-link'

export default function Template({
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
        {frontmatter.prevLink &&
          <div>
            <Link to={frontmatter.prevLink}>{frontmatter.prevLink}</Link>
          </div>
        }
        {frontmatter.nextLink &&
          <div>
            <Link to={frontmatter.nextLink}>{frontmatter.nextLink}</Link>
          </div>
        }
      </div>
    </div>
  );
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