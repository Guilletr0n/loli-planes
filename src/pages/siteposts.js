import React from "react"
import { Link, graphql } from "gatsby"
import { node } from "prop-types"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SitePosts = ({ data }) => {
  const ourPosts = data.allContentfulBlogPost.edges
  return (
    <Layout>
      <SEO title="Our Posts" />
      <h1>{"Lista de todos los articulos"}</h1>
      <div>
        <p>{node.title}</p>
        {ourPosts.map(({ node: post }) => (
          <div key={post.id}>
            <Link to={`/siteposts/${post.slug}`}>
              {post.title}
            </Link>
          </div>
        ))}
        <span />
        <Link to="/">Volver a la pagina de inicio</Link>
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