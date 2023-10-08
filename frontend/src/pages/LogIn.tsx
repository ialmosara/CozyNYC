import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  InputAdornment,
  Link,
  Modal,
  TextField,
  Typography,
  Grid,
} from "@mui/material";
import { AccountCircle, Email, Password } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { login, signup } from "../service/auth";
import { useSignIn } from "react-auth-kit";

const Login: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [page, setPage] = useState<"login" | "signup">("login");
  const [loading, setLoading] = useState<boolean>(false);
  const signIn = useSignIn();

  const formSubmitHelper = (e: React.FormEvent<HTMLFormElement>): FormData => {
    setLoading(true);
    e.preventDefault();
    return new FormData(e.currentTarget);
  };

  const onLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      const data = formSubmitHelper(e);
      const reqBody: RequestBody.LoginBody = {
        username: data.get("username") as string,
        password: data.get("password") as string,
        rememberMe: !!data.get("rememberMe"),
      };
      console.log("pre api call");
      const response = await login(reqBody);
      signIn({
        token: response.token,
        expiresIn: 3600,
        tokenType: "Bearer",
        authState: {
          username: reqBody.username,
        },
      });
      console.log("successful api call", response);
    } catch (e) {
      console.log("failed api call", e);
    }
    setLoading(false);
  };

  const onSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      const data = formSubmitHelper(e);
      const reqBody: RequestBody.SignUpBody = {
        username: data.get("username") as string,
        email: data.get("email") as string,
        password: data.get("password") as string,
      };
      const test = await signup(reqBody);
      console.log("successful api call", test);
    } catch (e) {
      console.log("failed api call", e);
    }
    setLoading(false);
  };

  return (
    <Grid container>
      <Button onClick={() => setOpenModal(true)}> Log in </Button>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box
          sx={{
            transform: "translate(-50%, -50%)",
          }}
          position={"absolute"}
          top={"50%"}
          left={"50%"}
          bgcolor={"background.paper"}
          width={500}
          paddingTop={2}
          paddingX={4}
          paddingBottom={3}
          borderRadius={"1px"}
          boxShadow={24}
          border={"2px solid #000"}
          textAlign={"center"}
          component={"form"}
          onSubmit={page === "login" ? onLogin : onSignup}
        >
          {page === "login" && (
            <>
              <Typography variant={"h4"}>Login</Typography>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
                name={"username"}
                required
                label={"Username"}
                margin="normal"
                fullWidth
              />
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Password />
                    </InputAdornment>
                  ),
                }}
                required
                name={"password"}
                label={"Password"}
                type={"password"}
                margin="normal"
                fullWidth
              />
              <Grid container>
                <Grid xs={6}>
                  <FormControlLabel
                    label="Remember Me?"
                    name={"rememberMe"}
                    labelPlacement="start"
                    control={<Checkbox />}
                  />
                </Grid>
                <Grid xs={6}>
                  <LoadingButton
                    type={"submit"}
                    variant="contained"
                    sx={{
                      borderRadius: "5px",
                    }}
                    loading={loading}
                  >
                    Log in
                  </LoadingButton>
                </Grid>
              </Grid>
              <Typography display={"inline"} align="center">
                Don't have an account?
              </Typography>
              <Link
                component={"button"}
                onClick={() => setPage("signup")}
                color={"#C4C4C4"}
                variant={"body1"}
              >
                &nbsp; Sign Up
              </Link>
            </>
          )}
          {page === "signup" && (
            <>
              <Typography variant={"h4"}>Sign Up</Typography>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
                required
                label={"Username"}
                margin="normal"
                name="username"
                fullWidth
              />
              <TextField
                required
                label={"Email"}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  ),
                }}
                name="email"
                margin="normal"
                fullWidth
              />
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Password />
                    </InputAdornment>
                  ),
                }}
                required
                label={"Password"}
                type="password"
                name="password"
                margin="normal"
                fullWidth
              />
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Password />
                    </InputAdornment>
                  ),
                  style: { textAlign: "center" },
                }}
                required
                label={"Retype Password"}
                margin="normal"
                type="password"
                fullWidth
              />
              <Typography display={"inline"}>
                Already have an account?
              </Typography>
              <Link
                component={"button"}
                onClick={() => setPage("login")}
                color={"#C4C4C4"}
                variant={"body1"}
              >
                &nbsp; Log in
              </Link>
              <Container>
                <LoadingButton
                  variant="contained"
                  sx={{
                    backgroundColor: "#F792BE",
                    borderRadius: "5px",
                  }}
                  type={"submit"}
                  loading={loading}
                >
                  Create Account{" "}
                </LoadingButton>
              </Container>
            </>
          )}
        </Box>
      </Modal>
    </Grid>
  );
};

export default Login;
