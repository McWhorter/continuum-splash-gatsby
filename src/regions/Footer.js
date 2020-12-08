import React from 'react'
import MailchimpForm from '../components/MailchimpForm'
import continuumLogo from '../images/continuum-logo.svg'
import LCORLogo from '../images/LCOR-logo.svg'

const Footer = () => (
  <footer className="region__footer">
    <div className="wrapper">
      <div className="signup">
        <h2>Now Leasing <strong>2021</strong></h2>
        <MailchimpForm />
      </div>
      <div className="information">
        <img className="continuum-logo" src={continuumLogo} alt="Continuum" />
        <p className="footer__address">
          <strong>57 Bank Street</strong> White Plains, NY 10606
        </p>
        <p className="footer__copyright">
          <img className="lcor-logo" src={LCORLogo} alt="LCOR" /> &copy; 2020 Incorporated, All Rights Reserved
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
