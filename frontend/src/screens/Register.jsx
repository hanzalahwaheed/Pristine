//Register.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [register, setRegister] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to register user");
      }

      const json = await response.json();
      console.log(json);

      if (!json.success) {
        alert("Enter valid credentials");
      } else {
        alert("Registeration Successful !!");
        setRegister(true);
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred during registration");
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  return (
    <div>
      {register ? (
        <div
          className="container"
          style={{ height: "68vh", margin: "40px", padding: "40px" }}
        >
          Go to Home page for Sign in &nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/" className="btn btn-lg btn-outline-success">
            Home
          </Link>
        </div>
      ) : (
        <form
          className="container"
          style={{
            margin: "auto",
            width: "50%",
            marginTop: "60px",
            marginBottom: "240px",
          }}
          onSubmit={handleSubmit}
        >
          <div className="mb-3">
            <label htmlFor="nameinputfield" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="nameinputfield"
              name="name"
              onChange={onChange}
              value={credentials.name}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              onChange={onChange}
              value={credentials.email}
              name="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={onChange}
              value={credentials.password}
              name="password"
            />
          </div>
          <button type="submit" className="btn btn-success">
            Register
          </button>{" "}
          <Link to="/" className="btn btn-outline-success">
            Alredy a user?
          </Link>
        </form>
      )}
    </div>
  );
}
