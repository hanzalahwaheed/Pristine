import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Profile() {

  // const [userDet, setUserDet] = useState({ name:localStorage.getItem("userName"), email:localStorage.getItem("userEmail") } );


  // const handleProfileEdit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch("http://localhost:5000/updateprofile", {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({name: userDet.name, email: userDet.email})
  //     })

  //     if (!response.ok) {
  //       throw new Error('Failed to register user');
  //     }

  //     const json = await response.json();

  //     if (!json.success) {
  //       alert('Enter valid credentials');
  //     }
  //     else{
  //       alert("edit Successful!!")
  //       window.location.reload();
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     alert('An error occurred during registration');
  //   }};

  // const onChange = (event) => {
  //   setUserDet({ ...userDet, [event.target.name]: event.target.value });
  // };

  return (
    <div className="container text-white d-flex flex-column justify-content-center" style={{  width: "40%", margin:"auto", padding:"40px", marginTop:"70px", marginBottom:"135px"}}>


{/* <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" value={localStorage.getItem("userName")} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
    <input type="text" className="form-control" id="exampleInputPassword1" value={localStorage.getItem("userEmail")} />
  </div>
<Link  className=" btn btn-outline-success" to="/editprofile">Edit</Link>


</form> */}

<ul class="list-group">
<span>Name:</span>
  <li class="list-group-item">{localStorage.getItem("userName")}</li>
  <span>Email:</span>
  <li class="list-group-item">{localStorage.getItem("userEmail")}</li>
</ul>
<br/>
{" "}

<Link  className=" btn btn-outline-success" style={{width:"20%"}} to="/editprofile">Edit</Link>

<hr />

<div className="row g-3">
  <div className="col">
  <label htmlFor="certificate" class="form-label">Certificate count</label>
    <input type="text" className="form-control" id="certificate" value={2}  disabled readOnly/>
  </div>
  <div className="col">
  <label htmlFor="userid" class="form-label">User Id</label>
    <input type="text" className="form-control" id='userid'value={localStorage.getItem("user_id")}  disabled readOnly/>
  </div>
</div>

    </div>
  );
}
