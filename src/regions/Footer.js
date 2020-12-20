import React from 'react'
import Icon from '../components/Icon'
import MailchimpForm from '../components/MailchimpForm'
import continuumLogo from '../images/continuum.svg'
import LCORLogo from '../images/LCOR.svg'

const Footer = () => (
  <footer className="region__footer">
    <div className="wrapper">
      <div className="signup">
        <MailchimpForm />
      </div>
      <div className="information">
        <img className="continuum-logo" src={continuumLogo} alt="Continuum" />
        <p className="footer__address">
          <strong>57 Bank Street</strong> White Plains, NY 10606
        </p>
        <p className="footer__copyright">
          <a href="https://www.hud.gov/program_offices/fair_housing_equal_opp" rel="noopener noreferrer" target="_target">
            <Icon id="equal-housing" label="Equal Housing Opportunity" />
          </a>
          <a href="https://www.ada.gov" rel="noopener noreferrer" target="_target">
            <Icon id="ada" label="Americans with Disabilities Act" />
          </a>
          <img className="lcor-logo" src={LCORLogo} alt="LCOR" /> &copy; 2020 Incorporated, All Rights Reserved
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
