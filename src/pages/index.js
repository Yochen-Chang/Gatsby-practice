// Step 1: Import React
import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
// import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql } from "gatsby"

// Step 2: Define your component
const IndexPage = ({data}) => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <p>
          {data.site.siteMetadata.title}
        </p>
        <p>
          {data.site.siteMetadata.description}
        </p>
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        />
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="../images/dog-1.webp"
        />
      </Layout>
    </main>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }`

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home Page" />

// Step 3: Export your component
export default IndexPage