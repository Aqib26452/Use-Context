//Sign up

import React, { useContext, useState, useEffect } from "react";
import Inputs from "../shared/Inputs";
import Button from "../shared/Button";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  // const { signup } = useContext(AuthContext);
  const { user, error, signup } = useContext(AuthContext);
  const navigation = useNavigate();

  function HandleSignup(e) {
    e.preventDefault();
    if (signup({ email, pass })) {
      localStorage.getItem(email, pass);

      navigation("/profile");
      setEmail("");
      setPass("");
    } else {
      alert("Sign up failed");
    }
  }
  useEffect(() => {
    if (user) {
      navigation("profile");
    }
  });

  return (
    <>
      <div className="  relative w-screen h-screen">
        <div className="p-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-xl bg-zinc-200 rounded-xl">
          <form action="" onSubmit={HandleSignup}>
            <h1 className="text-center font-bold text-2xl">Signup</h1>

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
              />
            </div>
            {error && (
              <p className="text-red-500  text-center mt-2 ">{error}</p>
            )}
            <div className="text-center">
              <Button
                style={{
                  backgroundColor: "#316EE2",
                }}
                type="submit"
                btnTitle="Sign up "
                className="mt-4 py-2 px-3 text-white font-bold rounded "
              />
              <p className="mt-5">
                Already have account please{" "}
                <Link to="/" className="text-blue-600 font-bold">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
