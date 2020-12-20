import React from 'react'

import * as yup from 'yup'
import { useFormik } from 'formik'

import MailchimpURL from '../third-party/mailchimp'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

import Button from '@material-ui/core/Button'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// Turn on debug mode to enable faker data form population.
import faker from 'faker'
const debug = false

const theme = createMuiTheme({
  typography: {
    fontFamily: `inherit`,
    button: {
      fontFamily: `var(--font-heading)`,
      backgroundColor: `var(--color-gold)`,
      color: `var(--color-blue)`,
    },
    shape: {
      borderRadius: 0,
    }
  },
})

const validationSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
})

const SignupForm = ({ status, message, onValidated }) => {
  const formik = useFormik({
    initialValues: {
      name: debug ? faker.name.findName() : ``,
      email: debug ? faker.internet.email() : ``,
      phone: debug ? faker.phone.phoneNumber() : ``,
    },
    validationSchema,
    onSubmit: values => onValidated(values)
  })

  return (
    <ThemeProvider theme={theme}>
      <form className="form" onSubmit={formik.handleSubmit}>
        <h3>Sign Up To Learn More</h3>
        <div className={`confirmation-message ${status === 'success' ? 'show' : 'hide'}`}>
          <h4>Thank you for your interest in 57 Bank St.</h4>
          <p>We’ll notify you shortly.</p>
        </div>
        <div className="components">
          <div className="component">
            <label className="sr-only" htmlFor="name">Name</label>
            <input
              name="name"
              id="name"
              type="text"
              required
              placeholder="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </div>
          <div className="component">
            <label className="sr-only" htmlFor="email">Email</label>
            <input
              name="email"
              id="email"
              type="text"
              required
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </div>
          <div className="component">
            <label className="sr-only" htmlFor="phone">Phone</label>
            <input
              name="phone"
              id="phone"
              type="text"
              placeholder="Phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
            />
          </div>
          <Button type="submit">Learn More</Button>
        </div>
      </form>
    </ThemeProvider>
  );
};

const MailchimpForm = () => (
  <MailchimpSubscribe
    url={MailchimpURL}
    render={({ subscribe, status, message }) => (
      <SignupForm
        status={status}
        message={message}
        onValidated={formData => subscribe({
          FNAME: formData.name.split(' ')[0],
          LNAME: formData.name.split(' ')[1],
          EMAIL: formData.email,
          PHONE: formData.phone,
        })}
      />
    )}
  />
)

export default MailchimpForm
