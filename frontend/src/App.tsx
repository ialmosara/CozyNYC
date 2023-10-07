import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./config/routes";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AuthProvider } from "react-auth-kit";

const App: React.FC = () => {
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
      <AuthProvider
        authType={"cookie"}
        authName={"_auth"}
        cookieDomain={window.location.hostname}
        cookieSecure={window.location.protocol === "https"}
      >
        <RouterProvider router={routes} />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
