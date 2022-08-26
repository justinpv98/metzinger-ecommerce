import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { reset, login } from "../../features/auth/authSlice";
import {useFormValidation, useDocumentTitle} from "../../hooks";

import * as styled from "./Login.styles";
import { Input, PasswordInput } from "../../components/FormElements/FormElements";
import Button from "../../components/Button/Button";

function Login() {
  useDocumentTitle("Login")
  const { data, errors, handleSubmit, handleChange, setErrors } =
    useFormValidation({
      initialState: {
        email: "",
        password: "",
      },
      onSubmit: () => {
        try {
          const user = data;
          dispatch(login(user));
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
      },
    });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      setErrors({ server: message });
    } else if (isSuccess || user) {
      navigate("/account");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, setErrors, navigate, dispatch]);

  function loginAsGuest(){
    data.email = "guest@example.com"
    data.password = "guest"
  }

  return (
    <styled.Main id="main" >
      <styled.FormContainer>
        <styled.Form onSubmit={handleSubmit}>
          <styled.Heading>Login</styled.Heading>
          <p>{errors.server}</p>
          <styled.FormElement>
            <Input
              type="email"
              label="Email"
              value={data.email || ""}
              onChange={handleChange("email")}
              error={errors.email}
              id="email"
              autocomplete="email"
            />
          </styled.FormElement>
          <styled.FormElement>
            <PasswordInput
              label="Password"
              value={data.password || ""}
              onChange={handleChange("password")}
              error={errors.password}
              id="password"
              autocomplete="current-password"
            />
          </styled.FormElement>
          <styled.GuestLogin  onClick={() => loginAsGuest()}>Login as a demo user.</styled.GuestLogin>
          <Button variant="primary">Login</Button>
          <styled.HorizontalRule>
            <p>or</p>
          </styled.HorizontalRule>
        </styled.Form>
        <styled.SectionContainer>
          <styled.Heading>New Customer?</styled.Heading>
          <styled.Copy>
            Create an account to keep track of orders and expedite your
            checkout.
          </styled.Copy>
          <styled.LinkButton to="/register">
            Create an Account
          </styled.LinkButton>
        </styled.SectionContainer>
      </styled.FormContainer>
    </styled.Main>
  );
}

export default Login;
