import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Services from "./components/Services";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import SingleService from "./components/SingleService";
import Root from "./Routes/Root";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/services/:serviceId",
          element: <SingleService />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/signin",
          element: <SignIn />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
      <Toaster position="top-center" reverseOrder={false} />
      {/* toast.success('Successfully toasted!') */}
    </div>
  );
}

export default App;
