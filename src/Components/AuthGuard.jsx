//Auth Guard

import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const AuthGuard = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      // alert("User not logged in. Redirecting to login page.");
      navigate("/");
    }
  }, [user, navigate]);
  return (
    <div className="text-center text-white font-bold text-2xl ">
      <div className="">{/* <p>header</p> */}</div>

      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthGuard;
