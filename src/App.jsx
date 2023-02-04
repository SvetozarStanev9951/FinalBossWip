import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SignIn from "./pages/SignIn/SignIn";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "signIn",
    element: <SignIn />,
  },
  {
    path: "about",
    element: <About />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
