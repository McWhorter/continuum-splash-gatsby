import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import MailchimpForm from '../components/MailchimpForm'

const Home = ({ data }) => {
  // We only need the homepage which is the first node returned.
  const node = data.allWpPage.nodes[0]

  // Create an array of images with valid data.
  const images = []
  Object.values(node.imageGallery.images).forEach(image => {
    if (image) {
      images.push(image)
    }
  })

  // Return our homepage.
  return (
    <Layout>
      <SEO title="home" />
      <header className="page-heading">
        <h1 className="page-heading__heading">{node.pageHeading.heading}</h1>
        <p className="page-heading__subheading">— {node.pageHeading.subheading}</p>
      </header>
      <div className="gallery">
        {images.map(image => (
          <img src={image.sourceUrl} alt="" />
        ))}
      </div>
      <MailchimpForm />
    </Layout>
  )
}

// Homepage export
export default Home

// Query for the homepage data from WP.
export const pageQuery = graphql`
  query {
    allWpPage {
      nodes {
        pageHeading {
          heading
          subheading
        }
        imageGallery {
          images {
            image {
              sourceUrl
            }
            image2 {
              sourceUrl
            }
            image3 {
              sourceUrl
            }
          }
        }
      }
    }
  }
`
