import React from 'react'

import * as yup from 'yup'
import { useFormik } from 'formik'

import MailchimpURL from '../third-party/mailchimp'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

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

const textfieldStyles = makeStyles({
  root: {
    backgroundColor: `var(--color-cream)`,
    color: `var(--color-blue)`,
  },
})

const buttonStyles = makeStyles({
  root: {
    borderRadius: 0,
    fontFamily: `var(--font-heading)`,
    backgroundColor: `var(--color-gold)`,
    color: `var(--color-blue)`,
  }
})

const validationSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
})

const SignupForm = ({ status, message, onValidated }) => {
  const textfieldClasses = textfieldStyles()
  const buttonClasses = buttonStyles()

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
      <form className="MailchimpForm" onSubmit={formik.handleSubmit}>
        { console.log(status, message || status) }
        <h3>Apply Now</h3>
        <div className="MailchimpFormComponents">
          <TextField
            name="name"
            id="name"
            label="Name"
            size="small"
            variant="filled"
            value={formik.values.name}
            onChange={formik.handleChange}
            className={textfieldClasses.root}
            error={formik.touched.name && Boolean(formik.errors.name)}
          />
          <TextField
            name="email"
            id="email"
            label="Email"
            size="small"
            variant="filled"
            value={formik.values.email}
            onChange={formik.handleChange}
            className={textfieldClasses.root}
            error={formik.touched.email && Boolean(formik.errors.email)}
          />
          <TextField
            name="phone"
            id="phone"
            label="Phone"
            size="small"
            variant="filled"
            value={formik.values.phone}
            onChange={formik.handleChange}
            className={textfieldClasses.root}
          />
          <Button
            type="submit"
            disableElevation
            className={buttonClasses.root}
          >
            Submit
          </Button>
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
