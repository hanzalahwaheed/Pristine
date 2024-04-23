import React, { useEffect, useState } from "react";
import Accordion from "../components/Accordion";

export default function Dashboard() {
  const [placeData, setPlaceData] = useState([]);

  const loadPlaceData = async () => {
    const response = await fetch("http://localhost:5000/accordionroute", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setPlaceData(data[0]);

}

  useEffect(() => {
    loadPlaceData();
    // console.log(localStorage.getItem("user_id"));
  }, []);



  return (
    <div>
      <div className="d-flex align-items-center p-3 my-3 text-white rounded shadow-sm border border-10 border-success container" style={{ margin: "auto", width: "70%" }}>
        <div>
          <h1 className="h6 mb-0 text-white lh-1">
            Let's take an Oath to clean our city
          </h1>
          <small>
            Our city will not become clean just by not polluting it, but we have
            to join hands and undo what has been polluted by cleaning our city.
          </small>
        </div>
      </div>


{placeData !== 0 ? (
        <div>
          {placeData.map((singledata) => {

            return (
              <div key={singledata._id}>
                <Accordion
                  addressTitle={singledata.addressTitle}
                  addressDetails={singledata.addressDetails}
                  _id={singledata._id}
                  src={singledata.addressImg}
                  reporterId ={singledata.reporterId}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div>No data available</div>
      )}

    </div>
  );
}

