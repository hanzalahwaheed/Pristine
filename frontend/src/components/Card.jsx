import React, { useState } from "react";

export default function Card() {
  const [like, setLike]  = useState(false);
  return (
    <div className="card-custom " style={{border:"none"}}>
      <div className="card m-4 border border-success shadow" style={{"width": "18rem", borderRadius: "15px"}}>
        <img src="https://1.bp.blogspot.com/-3oCUFFq1BPI/XwLZtLdWUKI/AAAAAAAAALQ/MDvo0nzlvQUosH64wy8GUNakmDlOognTwCK4BGAsYHg/s2280/golghar.jpg" className="card-img-top border" alt="..." style={{ borderRadius: "15px"}}/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on 
          </p>
          <div className="container">
          <button className="btn btn-outline-success" onClick={()=>{
            if(like){
              setLike(false)
            }else{setLike(true)}
          }}>
           LIKE
          </button>
          {" "}
          {like ? <span style={{paddingLeft:"20px"}}>{" "} ❤️ </span>: "" }
          </div>
          
        </div>
      </div>
    </div>
  );
}
