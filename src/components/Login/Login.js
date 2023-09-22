import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Hide from "../../images/eye-slash-solid.svg";
import Show from "../../images/eye-solid.svg";
import White from "../../images/white.png";

const Login = ({ updateUser }) => {
  const history = useHistory();
  const [passwordType, setPasswordType] = useState("password");
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios
      .post("https://backend012.azurewebsites.net/login", user)
      .then((res) => {
        alert(res.data.message);
        updateUser(res.data.user);
        history.push("/");
      });
  };
  return (
    <div className="login">
      {/* {console.log(user)} */}
      <h1 className="login-title">Sign in</h1>
      <br />
      <br />
      <span className="first-input-title">Enter Email or Phone No.</span>
      <input
        className="email-input"
        type="text"
        name="email"
        value={user.email}
        placeholder="Enter Email or Phone No."
        onChange={HandleChange}
      ></input>
      <img alt="" className="white-img" src={White} />
      <br />
      <br />
      <span className="first-input-title pass-title">Enter Password</span>
      <input
        type={passwordType}
        name="password"
        value={user.password}
        placeholder="Enter Password"
        onChange={HandleChange}
      ></input>
      <span className="pass-span" onClick={togglePassword}>
        {passwordType === "password" ? (
          <img alt="hide" className="hide-img" src={Hide} />
        ) : (
          <img alt="show" className="hide-img" src={Show} />
        )}
      </span>
      <div className="button" onClick={login}>
        Login
      </div>
      <div>or</div>
      <div
        className="button"
        onClick={() => {
          history.push("/register");
        }}
      >
        Register
      </div>
    </div>
  );
};

export default Login;
