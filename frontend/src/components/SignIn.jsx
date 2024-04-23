import React from 'react'

export default function SignIn() {
  return (
    <div>
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
    <div className="row align-items-center g-lg-5 py-5">
      
      <div className="col-md-10 mx-auto col-lg-5">
        <form className="p-4 p-md-5 border rounded-3 ">
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label for="floatingPassword">Password</label>
          </div>
          <div className="checkbox mb-3">
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign In</button>
         
        </form>
      </div>
      <div className="col-lg-7 text-center text-lg-start">
        <h1 className="display-4 fw-bold lh-1 mb-3">Vertically centered hero sign-up form</h1>
        <p className="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls.</p>
      </div>
    </div>
  </div>
    </div>
  )
}
