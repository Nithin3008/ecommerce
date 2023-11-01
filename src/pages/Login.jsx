import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import LinkButton from "../components/LinkButton";
import { AuthContext } from "../services/AuthFunctions";
const Login = () => {
  const { loginHandler } = useContext(AuthContext);
  const [showPwd, setShow] = useState(true);
  return (
    <>
      <div className="flex h-screen font-nunito justify-center items-center">
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
            ></input>
            <label className="text-xl font-medium">Enter Password</label>
            <div>
              <input
                className="border-b-2 outline-none border-stone-500"
                type={showPwd ? "password" : "text"}
                id="pwd"
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
          <p className="text-lg p-2 mt-3 space-x-2">
            Don't Have Account?
            <LinkButton to={"/Signup"} style="p-1 text-lg text-blue-500">
              SignUp!
            </LinkButton>
          </p>
        </div>
        <div className="w-1/2">
          <img className="h-screen w-screen" src="./login.jpg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Login;
