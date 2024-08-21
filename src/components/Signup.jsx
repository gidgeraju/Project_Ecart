import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
    number: "",
  });

  useEffect(() => {
    document.title = "Signup";
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
    alert(`Thank you for signing up....!`);

    console.log("Form data submitted:", formData);

    setFormData({
      name: "",
      password: "",
      email: "",
    });
  };

  return (
    <div>
      <h1 className="heading">Signup</h1>
      <div className="main">
        <form onSubmit={submitData}>
          <input
            name="name"
            onChange={inputHandler}
            className="inputs"
            type="text"
            placeholder="Enter Name...."
            value={formData.name}
            required
          />
          <input
            name="password"
            onChange={inputHandler}
            className="inputs"
            type="password"
            placeholder="Enter password..."
            value={formData.password}
            required
          />
          <input
            name="email"
            onChange={inputHandler}
            className="inputs"
            type="email"
            placeholder="Enter email...."
            value={formData.email}
            required
          />
          
          <div className="btn">
            <button className="btn-text" type="submit">
              Signup
            </button>
          </div>
          <span>
            Already have an account ? <Link to="/Login">Login here</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
