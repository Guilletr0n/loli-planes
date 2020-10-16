import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SitePosts = ({ data }) => {
  const { title, heading, slug } = data.contentfulBlogPost
  return (
    <Layout>
      <SEO title={title} />
      <div className="ourpost">
        <p>Algo</p>
        <img alt={title} src={image.file.url} />
        <p>{slug}</p>
        <Link to="/siteposts">View more posts</Link>
        <Link to="/">Back to Home</Link>
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
    }
  }
`