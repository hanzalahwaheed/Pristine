import React, { useEffect, useState } from 'react';
import {  useNavigate } from "react-router-dom";

export default function Profile() {

    const navigate = useNavigate();

    const userId = localStorage.getItem("user_id");

    useEffect(()=>{
        console.log(userId);
    },[])
    

  const [userDet, setUserDet] = useState({ name:"", email:"" } );


  const handleProfileEdit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/updateprofile", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({userId:userId, name: userDet.name, email: userDet.email})
      })

      if (!response.ok) {
        throw new Error('Failed to edit user');
      }

      const json = await response.json();

      if (!json.success) {
        alert('Enter valid credentials');
      }
      else {
        navigate("/profile");

        const alertBox = () =>{
            alert("Sign In again with your new Creds")
        }
        setTimeout(alertBox, 2000);
        
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred during edit');
    }};

  const onChange = (event) => {
    setUserDet({ ...userDet, [event.target.name]: event.target.value });
  };

  return (
    <div className="container text-white d-flex flex-column justify-content-center" style={{  width: "40%", margin:"auto", padding:"40px", marginTop:"70px", marginBottom:"135px"}}>


<form onSubmit={handleProfileEdit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" name='name'  onChange={onChange} value={userDet.name} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
    <input type="text" className="form-control" id="exampleInputPassword1" name='email' value={userDet.email} onChange={onChange}/>
  </div>

  <button type="submit" className=" btn btn-outline-success" >Edit</button>


</form>


    </div>
  );
}
