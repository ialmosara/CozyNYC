import { useState } from "react";
import {
  Box,
  Button,
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
            width: 400,
            border: "2px solid #000",
            bgcolor: "background.paper",
            boxShadow: 24,
            pt: 2,
            px: 4,
            pb: 3,
          }}
        >
          {page === "login" && (
            <>
              <Typography variant={"h4"}>Login</Typography>
              <div>
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
                />
              </div>
              <Typography display={"inline"}>Don't have an account?</Typography>
              <Link
                component={"button"}
                onClick={() => setPage("signup")}
                color={"#C4C4C4"}
                variant={"body1"}
              >
                &nbsp; Sign Up
              </Link>
              <div>
                <Button variant="contained">Log in</Button>
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
              />
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Password />
                    </InputAdornment>
                  ),
                  style: { min: 0, textAlign: 'center' }
                }}
                required
                label={"Retype Password"}
              />
              <div>
              <Typography display={"inline"}>Don't have an account?</Typography>
              <Link
                component={"button"}
                onClick={() => setPage("login")}
                color={"#C4C4C4"}
                variant={"body1"}
              >
                &nbsp; login
              </Link>
              </div>
              <Button variant="contained">Create Account </Button>
            </>
          )}
        </Box>
      </Modal>
    </ThemeProvider>
  );
};

export default Login;
