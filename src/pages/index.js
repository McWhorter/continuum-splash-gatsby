import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import HeroCarousel from '../components/HeroCarousel'

const Home = ({ data }) => {
  // We only need the homepage which is the first node returned.
  const node = data.allWpPage.nodes[0]

  // Create an array of images with valid data.
  const slides = []
  Object.values(node.imageGallery.images).forEach(image => {
    if (image) {
      slides.push(
        <div className="carousel__slide" key={image.id} style={{ backgroundImage: `url(${image.sourceUrl})`}}>
          <img src={image.sourceUrl} alt="" />
        </div>
      )
    }
  })

  // Return our homepage.
  return (
    <Layout>
      <SEO title="home" />
      <div className="container">
        <h1 className="main__heading">{node.pageHeading.heading} — <strong>{node.pageHeading.subheading}</strong></h1>
        <HeroCarousel slides={slides} />
      </div>
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
              id
              sourceUrl
            }
            image2 {
              id
              sourceUrl
            }
            image3 {
              id
              sourceUrl
            }
          }
        }
      }
    }
  }
`
