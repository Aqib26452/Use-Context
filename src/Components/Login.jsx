// Login Page

import React, { useContext, useEffect, useState } from "react";
import Inputs from "../shared/Inputs";
import Button from "../shared/Button";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Login = () => {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const { user, error, login } = useContext(AuthContext);
  const navigate = useNavigate();

  function HandleLogin(e) {
    console.log("Email:", email, "Password:", pass);
    e.preventDefault();
    if (login({ email, pass })) {
      console.log("Login successful");
      navigate("/profile");
      setEmail("");
      setPass("");
    } else {
      // alert("Login faileded");
    }
  }
  useEffect(() => {
    if (user) {
      navigate("profile");
    }
  });
  return (
    <div className="  relative w-screen h-screen">
      <div className="p-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-xl bg-zinc-200 rounded-xl">
        <form action="" onSubmit={HandleLogin}>
          <h1 className="text-center font-bold text-2xl">Login</h1>

          <div className=" mt-10 ">
            <label className="font-bold">Email</label>
            <Inputs
              id="email"
              value={email}
              style={{ width: "300px" }}
              placeholder="Please Enter The Username"
              className="mx-auto border mt-2 rounded px-2 mb-2"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className="font-bold ">Password</label>
            <Inputs
              id="passwordss"
              value={pass}
              style={{ width: "300px" }}
              placeholder="Enter The Password"
              className="mx-auto border mt-2 rounded px-2"
              type="password"
              onChange={(e) => setPass(e.target.value)}
              required
            />
          </div>
          {error && (
            <p className="text-red-500 font-bold text-center mt-4  py-1">
              {error}
            </p>
          )}
          <div className="text-center">
            <Button
              style={{
                backgroundColor: "#316EE2",
              }}
              type="submit"
              btnTitle="Login "
              className="mt-4 py-2 px-3 text-white font-bold rounded "
            />
            <p className="text-blue-800 font-bold mt-4">forget password?</p>
            <p>
              Create a account.{" "}
              <Link className="font-bold text-blue-600" to="/signup">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
