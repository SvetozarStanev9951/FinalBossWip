import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SignIn from "./pages/SignIn/SignIn";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Shop from "./pages/Shop/Shop";

import AppHeading from "./components/AppHeading/AppHeading";
import Profile from "./components/Profile/Profile";
import Playground from "./pages/Playground/Playground";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppHeading />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/playground",
        element: <Playground />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
