import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = props => {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post("https//localhost:3300/api/auth/register", user)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        props.history.push("/jokes");
      })
      .catch(err => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input
        name="username"
        type="text"
        placeholder="username"
        value={user.username}
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        placeholder="password"
        value={user.password}
        onChange={handleChange}
      />
      <button>Submit</button>
      <p>
        Don't have an account? <Link to="/register">Register here!</Link>
      </p>
    </form>
  );
};

export default Login;
