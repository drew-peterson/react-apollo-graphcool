import { compose, withStateHandlers, withHandlers } from "recompose";

export default compose(
  withStateHandlers(
    () => ({
      email: "",
      password: "",
      error: false,
      errorMessage: ""
    }),
    {
      setEmail: props => email => ({ email }),
      setPassword: props => password => ({ password }),
      setError: props => ({ error, errorMessage }) => ({
        error,
        errorMessage
      })
    }
  ),
  withHandlers({
    handleSubmit: ({ email, password, onSubmit, setError }) => e => {
      e.preventDefault();
      setError({ error: false, errorMessage: "" });
      onSubmit({ email, password }, (err, res) => {
        console.log("res", res);
        if (err) {
          console.log("err", err);
          setError({
            error: true,
            errorMessage: err.error_description || err.description
          });
        }
      });
    }
  })
);
