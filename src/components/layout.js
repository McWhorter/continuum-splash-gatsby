import React from 'react'
import Header from '../regions/Header'
import Footer from '../regions/Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="region__main">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
