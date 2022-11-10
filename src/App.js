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
import UpdateReview from "./components/UpdateReview";
import PrivateRoute from "./Routes/PrivateRoute";
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
          loader: async () => {
            return fetch("https://cleaning-service-server-theta.vercel.app/services/ShortService");
          },
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/services/:serviceId",
          element: <ServiceDetails />,
          loader: async ({ params }) => {
            return fetch(`https://cleaning-service-server-theta.vercel.app/services/${params.serviceId}`);
          },
        },
        {
          path: "/addService",
          element: (
            <PrivateRoute>
              <AddService />
            </PrivateRoute>
          ),
          loader: async () => {
            return fetch("https://cleaning-service-server-theta.vercel.app/services");
          },
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/review",
          element: (
            <PrivateRoute>
              <MyReview />
            </PrivateRoute>
          ),
        },
        
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/update/:reviewId",
          element: <UpdateReview />,
          loader: async ({ params }) => {
            return fetch(`http://localhost:5000/singleReviews/${params.reviewId}`);
          },
        },
      ],
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/signup",
      element: <SignUp />,
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
