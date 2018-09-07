import React from "react";
import { Button, Message, Form } from "semantic-ui-react";
import PropTypes from "prop-types";

const SignupForm = ({
  handleSubmit,
  error,
  email,
  password,
  setPassword,
  setEmail,
  errorMessage
}) => (
  <Form error={error} onSubmit={handleSubmit}>
    <Form.Field required>
      <label>Email</label>
      <input
        placeholder="email"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
    </Form.Field>
    <Form.Field required>
      <label>Password</label>
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
    </Form.Field>
    <Button type="submit">Signup</Button>
    <Message error header="Error During Login" content={errorMessage} />
  </Form>
);

SignupForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default SignupForm;
