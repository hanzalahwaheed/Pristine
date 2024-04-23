import React, { useEffect, useState } from "react";
import clean from "/clean.png";

export default function Accordion(props) {

  const CleanerId = localStorage.getItem('user_id');
  const [accordionOpen, setAccordionOpen] = useState(null);
  const [cleanImg, setCleanImg] = useState();


  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    setCleanImg(file);

    const src = URL.createObjectURL(file);
    const imagePreview = document.getElementById("file-preview");
    imagePreview.src = src;
  };

  const toggleAccordion = (index) => {
    if (accordionOpen === index) {
      setAccordionOpen(null);
    } else {
      setAccordionOpen(index);
    }
  };




  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
 
      
      const formData = new FormData();
      formData.append("cleanImg", cleanImg);
      formData.append("cleanerId", CleanerId);
      formData.append("_id", props._id);

      const response = await fetch("http://localhost:5000/accordionsubmitroute", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to register user");
      }

      const json = await response.json();
      console.log(json);

      if (!json.success) {
        alert("Enter valid addressData");
      } else {
        alert("Report Uploaded !!");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred during registration");
    }
  };

  let text1 = "../../backend/uploads/";
  let text2 = props.src;
  let result = text1.concat(text2);
 

  return (
    <div>
      <div
        className="accordion accordion-flush border border-5 border-success rounded"
        id="accordionFlushExample"
        style={{
          width: "70%",
          margin: "auto",
          padding: "10px",
          marginBottom: "10px",
        }}
      >
        <div className="accordion-item rounded">
          <h2 className="accordion-header rounded" id="flush-headingOne">
            <button
              className="accordion-button rounded"
              type="button"
              onClick={() => toggleAccordion(0)}
              style={{
                backgroundColor: accordionOpen === 0 ? "#00BC8C" : "",
                color: accordionOpen === 0 ? "white" : "",
              }}
            >
              {props.addressTitle}
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className={`accordion-collapse collapse ${
              accordionOpen === 0 ? "show" : ""
            }`}
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body rounded">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <img src={result} className="card-img-top" alt="..." />
                  </div>
                  <div className="col">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">{props.addressTitle}</li>
                      <li className="list-group-item">
                        {props.addressDetails}
                      </li>
                      <li className="list-group-item">
                        {props.reporterId}
                      </li>
               
                      <li className="list-group-item">
                        {props._id}
                        </li>
                    </ul>
                    <br />
              

                    <div className="card-body">
                    
                      <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                          <label htmlFor="image" className="form-label">
                            Upload Image
                          </label>
                          <input
                            type="file"
                            id="image"
                            name="cleanImg"
                            accept="image/*"
                            required
                            onChange={(e) => handleFileUpload(e)}
                          />
                          <br/>
                          {" "}
                          <button
                            type="submit"
                            className="btn btn-outline-success"
                            style={{marginTop:"40px"}}
                          >
                            Upload Report
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="col">
                    <img
                    id="file-preview"
                      src={clean}
                      className="card-img-top"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// import React, { useState } from 'react';

// export default function Accordion(props) {
//   const [accordionOpen, setAccordionOpen] = useState(null);

//   const toggleAccordion = (index) => {
//     if (accordionOpen === index) {
//       setAccordionOpen(null);
//     } else {
//       setAccordionOpen(index);
//     }
//   };

//   return (
//     <div>
//       <div
//         className="accordion accordion-flush border border-5 border-success rounded"
//         id="accordionFlushExample"
//         style={{ width: '70%', margin: 'auto', padding: '10px', marginBottom: '10px' }}
//       >
//         <div className="accordion-item rounded">
//           <h2 className="accordion-header rounded" id="flush-headingOne">
//             <button
//               className="accordion-button rounded"
//               type="button"
//               onClick={() => toggleAccordion(0)}
//               style={{
//                 backgroundColor: accordionOpen === 0 ? '#00BC8C' : '',
//                 color: accordionOpen === 0 ? 'white' : '',
//               }}
//             >
//               {props.addressTitle}
//             </button>
//           </h2>
//           <div
//             id="flush-collapseOne"
//             className={`accordion-collapse collapse ${accordionOpen === 0 ? 'show' : ''}`}
//             aria-labelledby="flush-headingOne"
//             data-bs-parent="#accordionFlushExample"
//           >
//             <div className="accordion-body rounded">
//             <div class="container">
//   <div class="row">
//     <div class="col">
//    <img src={`data:image/jpeg;base64,${props.base64String}`} className="card-img-top" alt="..." />

//     </div>
//     <div class="col">
//     <ul class="list-group list-group-flush">
//   <li class="list-group-item">{props.addressTitle}</li>
//   <li class="list-group-item">{props.addressDetails}</li>

// </ul>
// <br/> {" "}
//     <form className="mb-3">
//                   <input
//                     type="file"
//                     id="image"
//                     name="image"
//                     accept="image/*"
//                     required
//                     className='bg-dark'
//                   />

//                 </form>
//     </div>
//     <div class="col">

//     <img src="https://1.bp.blogspot.com/-3oCUFFq1BPI/XwLZtLdWUKI/AAAAAAAAALQ/MDvo0nzlvQUosH64wy8GUNakmDlOognTwCK4BGAsYHg/s2280/golghar.jpg" className="card-img-top" alt="..."/>
//     </div>
//   </div>
// </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
