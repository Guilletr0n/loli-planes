import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SitePosts = ({ data }) => {
  const { title, description } = data.contentfulBlogPost
  return (
    <Layout>
      <SEO title={title} />
      <div className="ourpost">
        <p>{title}</p>
        <p>{description.description}</p>
        <Link to="/siteposts">Ver mas articulos</Link>
        <br/>
        <Link to="/">Volver al inicio</Link>
      </div>
    </Layout>
  )
}

export default SitePosts

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      id
      slug
      title
      description {
        description
      }
    }
  }
`