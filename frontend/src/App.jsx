import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import Dashboard from "./screens/Dashboard";
import Profile from "./screens/Profile";
import Report from "./screens/Report";
import SocialMedia from "./screens/SocialMedia";
import Register from "./screens/Register";
import Footer from "./components/Footer";
import EditProfile from "./screens/EditProfile";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {

  return (
    <div className="" 
    // style={{backgroundColor: "white"}}
    >
    
      <Router>
      <Navbar/>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/report" element={<Report />} />
            <Route exact path="/socialmedia" element={<SocialMedia />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/editprofile" element={<EditProfile />} />
          </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
