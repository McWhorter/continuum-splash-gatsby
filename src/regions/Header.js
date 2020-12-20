import React from 'react'
import logo from '../images/57-bank-street.svg'

const Header = () => (
  <header className="region__header">
    <div className="container">
      <p className="now-leasing">Now Leasing <strong>2021</strong></p>
      <img className="fifty-seven-logo" src={logo} alt="57 Bank Street" />
    </div>
  </header>
)

export default Header
