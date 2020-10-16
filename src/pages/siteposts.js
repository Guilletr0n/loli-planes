import React from "react"
import { Link, graphql } from "gatsby"
import { node } from "prop-types"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SitePosts = ({ data }) => {
  const ourPosts = data.allContentfulBlogPost.edges
  console.log('our posts:',ourPosts);
  return (
    <Layout>
      <SEO title="Our Posts" />
      <h1>{"Welcome to our Blog"}</h1>
      <div>
        <p>Articulos:</p>
        <p>{node.slug}</p>
        {ourPosts.map(({ node: post }) => (
          <div key={post.id}>
            <Link to={`/siteposts/${post.slug}`}>
              {post.title}
            </Link>
          </div>
        ))}
        <span />
        <Link to="/">Back to the homepage</Link>
      </div>
    </Layout>
  )
}

export default SitePosts

export const query = graphql`
  query SitePostsPageQuery {
    allContentfulBlogPost(limit: 1000) {
      edges {
        node {
          id
          slug
          title
        }
      }
    }
  }
`