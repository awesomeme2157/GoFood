import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting credentials:", credentials);

    // http://localhost:5000/api/loginuser

    try {
      const response = await fetch("http://localhost:5000/api/loginuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const json = await response.json();
      console.log("Response JSON:", json);

      if (response.ok) {
        const authToken = json.token;
        if (authToken) {
          localStorage.setItem("authToken", authToken);
          console.log("authToken:", authToken);
          navigate("/");
        } else {
          console.error("Token not found in response");
        }
      } else {
        const errorMessage =
          json.errors?.[0]?.msg || "Login failed with unknown error";
        console.error("Login failed:", errorMessage);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            name="email"
            value={credentials.email}
            onChange={onChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            name="password"
            value={credentials.password}
            onChange={onChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-success">
          Submit
        </button>

        <Link to="/createuser" className="m-3 btn btn-danger">
          New user?
        </Link>
      </form>
    </div>
  );
}
