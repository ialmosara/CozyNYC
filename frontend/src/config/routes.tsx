import { createBrowserRouter } from "react-router-dom";
import { RequireAuth } from "react-auth-kit";
import Login from "../pages/LogIn";
import Home from "../pages/Home";
import StreamManager from "../pages/StreamManager";

export const routes = createBrowserRouter([
  {
    path: "/",
    loader: () => ({ message: "Hello Data Router!" }),
    Component: Home,
  },
  {
    path: "login",
    loader: () => ({ message: "Hello Login!" }),
    element: <Login />,
  },
  {
    path: "streamManager",
    loader: () => ({ message: "Hello Stream Manager!" }),
    element: (
      <RequireAuth loginPath={"/login"}>
        <StreamManager />
      </RequireAuth>
    ),
  },
]);
