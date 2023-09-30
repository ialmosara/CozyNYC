import {
    createBrowserRouter,
  } from "react-router-dom";
import Login from "../pages/SignIn";
import Home from '../pages/Home';
import Signup from "../pages/Signup";
import StreamManager from "../pages/StreamManager";

export const routes = createBrowserRouter([
    {
        path: '/',
        loader: () => ({ message: "Hello Data Router!" }),
        Component: Home
    },
    {
        path: '/login',
        loader: () => ({ message: "Hello Login!" }),
        Component: Login
    },
    {
        path: '/signup',
        loader: () => ({ message: "Hello Signup!" }),
        Component: Signup
    },
    {
        path: '/streamManager',
        loader: () => ({ message: "Hello Stream Manager!" }),
        Component: StreamManager
    },
])