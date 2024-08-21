import React, { useEffect, useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    document.title = "Login";
  }, []);

  const inputHandler = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitData = (event) => {
    event.preventDefault();

    alert(`Thankyou for Login!`);

    console.log("Login data submitted:", formData);

    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <h1 className="heading-login">Login</h1>
      <form onSubmit={submitData}>
        <input
          name="email"
          onChange={inputHandler}
          className="inputs-login"
          type="email"
          placeholder="Enter email...."
          value={formData.email}
          required
        />
        <input
          name="password"
          onChange={inputHandler}
          className="inputs-login"
          type="password"
          placeholder="Enter password..."
          value={formData.password}
          required
        />
        <div className="login-btn">
          <button type="submit" className="btn-text2">
            Login
          </button>
        </div>
        <span>
          New here ?<Link to="/Signup"> Please Signup</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
