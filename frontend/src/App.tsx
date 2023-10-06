import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./config/routes";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const Fallback = () => {
  return <p>Performing initial data load </p>;
};

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
      <RouterProvider router={routes} fallbackElement={<Fallback />} />
    </ThemeProvider>
  );
};

export default App;
