import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import LinkButton from "../components/LinkButton";
import { AuthContext } from "../services/AuthFunctions";
import NavBar from "../components/NavBar";

const Login = () => {
  const { loginHandler } = useContext(AuthContext);
  const [showPwd, setShow] = useState(true);

  function testCred() {
    const details = {
      userName: "test@gmail.com",
      pwd: "test",
      fName: "john",
      lName: "wick",
    };
    loginHandler(null, details);
  }
  return (
    <>
      <NavBar></NavBar>
      <div className="flex  font-nunito justify-between items-center max-md:justify-center">
        <div className="w-1/2 text-center ">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              loginHandler(e);
            }}
            className="flex flex-col items-center space-y-5"
          >
            <h1 className="text-5xl  font-normal">Welcome Back</h1>
            <label className="text-xl font-medium">Enter Username</label>
            <input
              className="border-b-2 outline-none border-stone-500"
              type="text"
              id="username"
              required
            ></input>
            <label className="text-xl font-medium">Enter Password</label>
            <div>
              <input
                className="border-b-2 outline-none border-stone-500"
                type={showPwd ? "password" : "text"}
                id="pwd"
                required
              ></input>
              <span
                className="pointer"
                onClick={() => setShow((show) => !show)}
              >
                <FontAwesomeIcon icon={faEyeSlash} />
              </span>
            </div>
            <button
              className="p-1 text-lg bg-blue-500 text-white rounded"
              type="submit"
            >
              Login
            </button>
          </form>
          <button
            onClick={testCred}
            className="p-1 text-lg bg-blue-500 text-white rounded my-4"
          >
            Login with Test Credentials
          </button>
          <p className="text-lg p-2 mt-3 space-x-2">
            Don't Have Account?
            <LinkButton to={"/Signup"}> SignUp!</LinkButton>
          </p>
        </div>
        <div className="h-[calc(100vh-84.095px)] w-1/2 max-md:hidden">
          <img
            className="h-full object-cover w-full"
            src="./login.jpg"
            alt="loginImage"
          />
        </div>
      </div>
    </>
  );
};

export default Login;
