//userloginSignup

const User_key = "users";
const Current_user = "curr-userss";

export const userlogin = (email, pass) => {
  let users = JSON.parse(localStorage.getItem(User_key) || "[]");

  const user = users.find((item) => item.email === email && item.pass === pass);

  if (user) {
    // console.log("User found:", user); // Check what user contains
    // let user = localStorage.getItem(User_key) || "[]";
    localStorage.setItem(Current_user, JSON.stringify(user));
    console.log("Found user:", user);
    return user;
  }
  // users.push(email, pass);
  // localStorage.setItem(User_key, JSON.stringify(users));
  // localStorage.setItem(Current_user, JSON.stringify({ email, pass }));
  return false;
};

export const usersignup = ({ email, pass }) => {
  let users = JSON.parse(localStorage.getItem(User_key) || "[]");
  // let isExist = false;
  // let users = JSON.parse(users);
  let isExist = users.find((item) => item.email === email) ? true : false;
  if (isExist) {
    // localStorage.setItem(Current_user, JSON.stringify({ email, pass }));
    return false;
  }
  const newUser = { email, pass };
  users.push(newUser);
  localStorage.setItem(User_key, JSON.stringify(users));
  localStorage.setItem(Current_user, JSON.stringify(newUser)); // Store new user as current user
  return true;
  // users.push({ email, pass });
  // localStorage.setItem(User_key, JSON.stringify(users));
  // localStorage.setItem(Current_user, JSON.stringify({ email, pass }));
  // return true;
};

// export const checkLogin = () => {
//   const user = localStorage.getItem(Current_user);
//   return user ? JSON.parse(user) : null;
// };
export const checkLogin = () => {
  const user = localStorage.getItem(Current_user);

  // Try to parse the user JSON string, if it exists
  if (user) {
    try {
      return JSON.parse(user); // Parse the JSON string to an object
    } catch (e) {
      console.error("Error parsing JSON from localStorage:", e);
      localStorage.removeItem(Current_user); // Clean up if the JSON is invalid
      return null;
    }
  }
  return null;
};
//another method
// const user = localStorage.getItem(Current_user); // Get current user from localStorage
// return user ? JSON.parse(user) : null;
