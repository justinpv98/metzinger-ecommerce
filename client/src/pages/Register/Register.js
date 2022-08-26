import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {useFormValidation, useDocumentTitle} from "../../hooks";
import * as styled from "./Register.styles";

import { reset, register } from "../../features/auth/authSlice";


import { Input, PasswordInput } from "../../components/FormElements/FormElements";
import Button from "../../components/Button/Button"

function Register() {
  useDocumentTitle("Register")
  const { data, errors, handleSubmit, handleChange, setErrors } =
  useFormValidation({
    initialState: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },
    onSubmit: () => {
      try {
        const user = data;
        dispatch(register(user));
      } catch (error) {
        console.log(error.message);
      }
    },
    validations: {
      email: {
        required: {
          value: true,
          message: "Email is a required field.",
        },
      },
      password: {
        required: {
          value: true,
          message: "Password is a required field.",
        },
      },
      firstName: {
        required: {
          value: true,
          message: "First Name is a required field.",
        },
      },
      lastName: {
        required: {
          value: true,
          message: "Last Name is a required field.",
        },
      },
    },
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );



  useEffect(() => {
    if (isError){
      setErrors({server: message})
    } else if (isSuccess || user) {
      navigate('/account')

    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, setErrors, navigate, dispatch]);



  return (
    <styled.Main id="main">
      <styled.FormContainer>
        <styled.Form onSubmit={handleSubmit}>
          <styled.Heading>Register</styled.Heading>
          <p>{errors.server}</p>
          <styled.FormElement>
            <Input
              type="email"
              label="Email"
              onChange={handleChange('email')}
              error={errors.email}
              value={data.email || ""}
              maxlength="320"
              id="email"
              autocomplete="email"
            />
          </styled.FormElement>
          <styled.FormElement>
            <PasswordInput
              label="Password"
              onChange={handleChange('password')}
              error={errors.password}
              value={data.password || ""}
              maxlength="60"
              id="password"
              autocomplete="new-password"
            />
          </styled.FormElement>
          <styled.FormElement>
            <Input
              type="text"
              label="First Name"
              onChange={handleChange('firstName')}
              error={errors.firstName}
              value={data.firstName || ""}
              maxlength="40"
              id="first-name"
              autocomplete="given-name"
            />
          </styled.FormElement>
          <styled.FormElement>
            <Input
              type="text"
              label="Last Name"
              onChange={handleChange('lastName')}
              error={errors.lastName}
              value={data.lastName || ""}
              maxlength="40"
              id="last-name"
              autocomplete="family-name"
            />
          </styled.FormElement>
          <Button variant="primary">Register</Button>
          <styled.HorizontalRule>
            <p>or</p>
          </styled.HorizontalRule>
        </styled.Form>
        <styled.SectionContainer>
          <styled.Heading>Have an Account?</styled.Heading>
          <styled.Copy>
            Login to your account to access your previous orders and checkout
            with ease.
          </styled.Copy>
          <styled.LinkButton to="/login">Login</styled.LinkButton>
        </styled.SectionContainer>
      </styled.FormContainer>
    </styled.Main>
  );
}

export default Register;
