import React from 'react'
import * as yup from 'yup';

import MailchimpURL from '../third-party/mailchimp'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const SignupForm = ({ status, message, onValidated }) => {
  let name, email, phone;

  let schema = yup.object().shape({
    name: yup.string().required(`Required`),
    email: yup.string().email(`Invalid email address`).required(`Required`),
  })

  const submit = () => schema.isValid({ name, email }).then(
    onValidated({
      NAME: name.value,
      EMAIL: email.value,
      PHONE: phone.value,
    })
  )

  return (
    <Container maxWidth="xs">
      <CssBaseline />
      { console.log(status, message || '') }
      <form autoComplete="off">
        <Grid container spacing={2}>
          <TextField
            name="NAME"
            variant="filled"
            required
            fullWidth
            id="name"
            label="Name"
          />
          <TextField
            name="EMAIL"
            variant="outlined"
            required
            fullWidth
            id="email"
            label="Email"
          />
          <TextField
            name="PHONE"
            variant="standard"
            fullWidth
            id="phone"
            label="Phone"
            type="number"
          />
        </Grid>
      </form>
    </Container>
  );
};

const MailchimpForm = () => (
  <MailchimpSubscribe
    url={MailchimpURL}
    render={({ subscribe, status, message }) => (
      <SignupForm
        status={status}
        message={message}
        onValidated={formData => subscribe(formData)}
      />
    )}
  />
)

export default MailchimpForm
