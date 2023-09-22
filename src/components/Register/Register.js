import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && password === reEnterPassword) {
      // alert("Posted");
      axios
        .post("https://backend012.azurewebsites.net/register", user)
        .then((res) => {
          alert(res.data.message);
          history.push("/login");
        });
    } else {
      alert("Incorrect");
    }
  };

  return (
    <div className="register">
      {/* {console.log("User", user)} */}
      <h1 className="register-title">Register</h1>
      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="Your Name"
        onChange={HandleChange}
      ></input>
      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="Your Email"
        onChange={HandleChange}
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Your Password"
        onChange={HandleChange}
      ></input>
      <input
        type="password"
        name="reEnterPassword"
        value={user.reEnterPassword}
        placeholder="Re-enter Password"
        onChange={HandleChange}
      ></input>
      <div className="button" onClick={register}>
        Register
      </div>
      <div>or</div>
      <div
        className="button"
        onClick={() => {
          history.push("/");
        }}
      >
        Login
      </div>
    </div>
  );
};

export default Register;