import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const SignIn = () => {
  const { signIn, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  // call location
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  //handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    //catch input field
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    //sign in user in firebase
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        //navigate
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  //handle google sign in
  const handleGoogleSignIn = () => {
    console.log("google sign in");
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        const errorMessage = err.message;
        setError(errorMessage);
        console.log(error);
      });
  };

  return (
    <div>
      <div className="w-full my-14 mx-auto max-w-md p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
        <h1 className="text-2xl font-bold text-center">Sign In</h1>
        <form
          onSubmit={handleSubmit}
          noValidate=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-gray-400">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 text-gray-900 bg-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block dark:text-gray-400">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 text-gray-900 bg-gray-100 focus:dark:border-violet-400"
            />
            <div className="flex  text-xs dark:text-gray-400">
              <button rel="noopener noreferrer" href="#">
                Forgot Password?
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="block w-full p-3 text-center rounded-sm font-semibold text-gray-900 bg-violet-400"
          >
            Sign In
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleGoogleSignIn}
            aria-label="Log in with Google"
            className="p-3 rounded-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 dark:text-gray-400">
          Already have an account?
          <Link
            to="/signup"
            rel="noopener noreferrer"
            href="#"
            className="underline dark:text-gray-100"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
