//AUTH PROVIDER
// import React, { createContext, useState } from "react";

import React, { createContext, useEffect, useState } from "react";

import { userlogout } from "./logout";

import { checkLogin, userlogin, usersignup } from "./apis/userLoginOrSignup";

// export const AuthContext = createContext();
// function AuthProvider({ children }) {
//   const [user, setUser] = useState();
//   const login = () => {};
//   const signup = (email, pass) => {
//     console.log("AurthProvider=====>", email, pass);

//   };
//   const logout = () => {};

//   return (
//     <AuthContext.Provider value={{ user, login, signup, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export default AuthProvider;

export const AuthContext = createContext();
function AuthProvider({ children }) {
  const [user, setuser] = useState(null);
  const [error, setError] = useState();

  const login = ({ email, pass }) => {
    console.log("AurthProvider=====>login", email, pass);
    const data = userlogin(email, pass);
    // console.log("Login Resultss:", data);
    if (data) {
      localStorage.setItem("curr-userss", JSON.stringify(data));
      setuser(data);
      return true;
    } else {
      setError("Email and pass do not match....");
      // alert(" Email or password do not match...");
      console.log("Error set: Email and password do not match");
      setTimeout(() => {
        setError(" ");
      }, 1000);
      return false;
    }
  };

  const signup = ({ email, pass }) => {
    console.log("AurthProvider=====>signup", email, pass);
    const isSignup = usersignup({ email, pass });
    if (isSignup) {
      const newUser = { email, pass };
      localStorage.setItem("curr-userss", JSON.stringify(newUser));
      setuser(newUser);
      return true;
    } else {
      setError("Email & password already exists...");
      setTimeout(() => {
        setError(" ");
      }, 3000);
      return false;
    }
  };
  const logout = () => {
    userlogout();
    setuser(null);
  };

  useEffect(() => {
    const currentuser = checkLogin();
    console.log("Curr-user", currentuser);
    if (currentuser) {
      setuser(currentuser);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ user, login, signup, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;
