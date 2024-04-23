import React,{ useRef, useState, useContext } from 'react'
import clean from '/clean.png'
import {Link,  useNavigate} from "react-router-dom"
import Navbar from './Navbar';

export default function Hero() {
  const bottomSectionRef = useRef(null);
  // const DataContext = createContext();

  const handleSignInClick = () => {
    bottomSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const [credentials, setCredentials] = useState({ email:"", password:""});
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/loginuser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: credentials.email, password:credentials.password})
      })

      if (!response.ok) {
        throw new Error('Failed to register user');
      }

      const json = await response.json();



      if (!json.success) {
        alert('Enter valid credentials');
      }
      else{
        localStorage.setItem("authToken", json.authToken);
        localStorage.setItem("userName", json.name);
        localStorage.setItem("userEmail", json.email);
        localStorage.setItem("user_id", json._id);
        console.log(localStorage.setItem("user_id", json._id));
        navigate("/dashboard");
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred during registration');
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <div>
   
      <div className="container col-xxl-8 px-4 py-5" id='hero-top'>
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src={clean} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold lh-1 mb-3">Pristine - Clean City Dream</h1>
        <p className="lead">Join hands to clean our city and make it a beautiful place to live</p>
        {(localStorage.getItem("authToken"))?
        ""
        :
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-success px-4 me-md-2"><Link className="nav-link" to="/register" style={{"color":"white"}}>Register</Link></button>
          <button type="button" className="btn btn-outline-success px-4" onClick={handleSignInClick}>Sign-in</button>
        </div>
        }
        
      </div>
    </div>
  </div>




  {/* hero bottom */}
  {(localStorage.getItem("authToken"))?
        ""
        :
      <>
      <hr/>
  <div ref={bottomSectionRef} className="container col-xl-10 col-xxl-8 px-4 py-5" id='hero-bottom'>
    <div className="row align-items-center g-lg-5 py-5">
      
      <div className="col-md-10 mx-auto col-lg-5">


      {/* form */}

        <form className="p-4 p-md-5 border rounded-3 " onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name='email' onChange={onChange} value={credentials.email}/>
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name='password' onChange={onChange} value={credentials.password}/>
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="checkbox mb-3">
          </div>
          <button className="w-100 btn btn-lg btn-success" type="submit" style={{"color": "white"}}>Sign In</button>
         
        </form>
    
      </div>
      <div className="col-lg-7 text-center text-lg-start">
        <h1 className="display-4 fw-bold lh-1 mb-3">Sign In to take a outh to clean your city</h1>
        <p className="col-lg-10 fs-4">Hows the JOSH!! HIGH SIR !!</p>
      </div>
    </div>
  </div>
      </>

  }
    </div>
  )
}
