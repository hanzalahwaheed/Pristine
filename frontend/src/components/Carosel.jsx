import React from 'react'
import q1 from '/q1.jpg'
import q2 from '/q2.jpg'
import q3 from '/q3.jpg'

export default function Carosel() {
  return (
    <div className=''
    //  style={{"margin": "50px"}}
    style={{"width": "63%", "margin": "auto", marginTop: "70px", marginBottom:"70px"}}
     >
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={q1} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={q2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={q3} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
