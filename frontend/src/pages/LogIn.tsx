import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  InputAdornment,
  Link,
  Modal,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { AccountCircle, Email, Password } from "@mui/icons-material";

const Login: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [page, setPage] = useState<"login" | "signup">("login");

  const theme = createTheme({
    palette: {
      background: {
        paper: "rgb(170,170,170)",
      },
    },
    typography: {
      fontFamily: "Montserrat",
      fontWeightRegular: 800,
      h4: {
        textAlign: "center",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Button onClick={() => setOpenModal(true)}> Log in </Button>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            border: "2px solid #000",
            bgcolor: "background.paper",
            boxShadow: 24,
            pt: 2,
            px: 4,
            pb: 3,
            borderRadius: "1px",
          }}
          textAlign={"center"}
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
                label={"Password"}
                margin="normal"
                fullWidth
              />
              <FormGroup row>
                <FormControlLabel
                  label="Remember Me?"
                  labelPlacement="start"
                  control={<Checkbox />}
                />
              </FormGroup>
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
              <div>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "5px",
                  }}
                >
                  Log in
                </Button>
              </div>
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
              <div>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#F792BE",
                    borderRadius: "5px",
                  }}
                >
                  Create Account{" "}
                </Button>
              </div>
            </>
          )}
        </Box>
      </Modal>
    </ThemeProvider>
  );
};

export default Login;
