import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  // console.log(localStorage.getItem("userName"));

  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand h1 mt-2" to="/">
            <strong>Pristine</strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <div class="d-grid gap-2 d-md-flex justify-content-md-end" style={{marginLeft:"350px"}}>
              <Link className="nav-link active  me-md-2" aria-current="page" to="/">
                Home
              </Link>
              {localStorage.getItem("authToken") ? (
                <>
                  
                    <Link className="nav-link" to="/dashboard">
                      Dashboard
                    </Link>
                    <Link className="nav-link" to="/report">
                      Report
                    </Link>
                    <Link className="nav-link" to="/socialmedia">
                      Social Media
                    </Link>
                    <Link className="nav-link" to="/profile">
                      Profile
                    </Link>
                    <span style={{marginTop:"7px", marginLeft:"300px", marginRight:"20px"}} >
                    {localStorage.getItem("userEmail")}
                    </span>
                    
                    <button
                      onClick={handleLogout}
                      className="  rounded btn btn-danger btn-sm"
                    >
                      {" "}
                      Logout
                    </button>
           
                </>
              ) : (
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              )}
            </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
