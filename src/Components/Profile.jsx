//profile
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "react-router-dom";
// import userlogin from "./apis/userlogin";
// import { checkLogin } from "./apis/userLoginOrSignup";

const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  // const [user, setUser] = useState(null);

  const userLogout = () => {
    logout();
    navigate("/");
  };

  // useEffect(() => {
  //   const currentUser = checkLogin();
  //   console.log("Curr-userss", currentUser);
  //   if (currentUser) {
  //     setUser(currentUser);
  //   }
  // }, []);
  // useEffect(() => {
  //   const currentUser = checkLogin();
  //   if (currentUser) {
  //     setUser({ email: currentUser.email, name: "Rajpoot" });
  //   }
  // }, []);

  return (
    <>
      <div className="text-white">Profile</div>

      {/* Display user information if available s */}
      {user ? (
        <div className="">
          <p className="bg-slate-600 mt-5">
            {" "}
            Email: {user.email || "nomi@gmail.com"}{" "}
          </p>
          <p> {user.name}</p>
        </div>
      ) : (
        <div className="text-white">Loading...</div>
      )}
      <button
        onClick={userLogout}
        className="bg-lime-800 text-black px-2 py-1 rounded mt-5"
      >
        Logout
      </button>
    </>
  );
};

export default Profile;
