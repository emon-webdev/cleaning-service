import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AddService from "./components/AddService";
import Blog from "./components/Blog";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import MyReview from "./components/MyReview";
import Profile from "./components/Profile";
import ServiceDetails from "./components/ServiceDetails";
import Services from "./components/Services";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
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
          loader: async () => {
            return fetch("http://localhost:5000/services");
          },
        },
        {
          path: "/services",
          element: <Services />,
          loader: async () => {
            return fetch("http://localhost:5000/services");
          },
        },
        {
          path: "/services/:serviceId",
          element: <ServiceDetails />,
          loader: async ({params}) => {
            return fetch(`http://localhost:5000/services/${params.serviceId}`);
          },
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/review",
          element: <MyReview />,
        },
        {
          path: "/addService",
          element: <AddService />,
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
