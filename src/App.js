import { BrowserRouter as Switch, Route } from "react-router-dom";
import Login from "./Components/Login.jsx";
import "./App.css";
import Signup from "./Components/Signup.jsx";
import Profile from "./Components/Profile.jsx";

function App() {
  return (
    <>
      <Switch>
        <Route element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
      </Switch>
      <h1>First page</h1>
    </>
  );
}

export default App;
