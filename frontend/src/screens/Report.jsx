import React, { useState, useEffect } from "react";
import clean from "/clean.png";

export default function Report() {
  const [imageUrl, setImageUrl] = useState();
  const [addressData, setAddressData] = useState({
    addressTitle: "",
    addressDetails: "",
  });
  const [cleanerName, setCleanerName] = useState();
  const [cleanerEmail, setCleanerEmail] = useState();

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    setAddressData({ ...addressData, addressImg: file });

    const src = URL.createObjectURL(file);
    const imagePreview = document.getElementById("file-preview");
    imagePreview.src = src;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user_id = localStorage.getItem("user_id");
      const formData = new FormData();
      formData.append("addressTitle", addressData.addressTitle);
      formData.append("addressDetails", addressData.addressDetails);
      formData.append("addressImg", addressData.addressImg);
      formData.append("reporterId", user_id);

      const response = await fetch("http://localhost:5000/reportroute", {
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

  const onChange = (event) => {
    setAddressData({ ...addressData, [event.target.name]: event.target.value });
  };

  const loadCleanImgData = async () => {
    const reporterId = localStorage.getItem("user_id");
    try {
      const response = await fetch("http://localhost:5000/cleanimgret", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ reporterId: reporterId }),
      });
      console.log(response);
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      const json = await response.json();

      setImageUrl(json.cleanImg);
    } catch (error) {
      console.error(error);
    }
  };

  const isActive = async (e) => {
    e.preventDefault();
    console.log(1)
    const reporterId = localStorage.getItem("user_id");
    try {
      const response = await  fetch("http://localhost:5000/setisactive", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ reporterId: reporterId }),
      });
      console.log("isactive",response);
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      const json = await response.json();
      setCleanerName(json.cleanerName);
      setCleanerEmail(json.cleanerEmail);
      console.log("cleanerEmail", cleanerEmail);
      console.log("cleanerName", cleanerName);

    } catch (error) {
      console.error(error);
    }
  };

  let text1 = "../../backend/uploads2/";
  let text2 = imageUrl;
  let result = text1.concat(text2);

  useEffect(() => {
    loadCleanImgData();
  }, []);

  return (
    <div>
      <div
        className="container"
        style={{
          margin: "auto",
          marginTop: "10px",
          display: "flex",
          flexDirection: "row",
          padding: "10px",
        }}
      >
        <div className="card" style={{ width: "50%", margin: "10px" }}>
          <img
            src={clean}
            className="card-img-top"
            alt="..."
            style={{ width: "50%", margin: "auto" }}
            id="file-preview"
          />
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div>
                <div className="mb-3">
                  <label htmlFor="address-title" className="form-label">
                    Address Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address-title"
                    name="addressTitle"
                    onChange={onChange}
                    value={addressData.addressTitle}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="address-dicp" className="form-label">
                    Detail Address
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="address-dicp"
                    name="addressDetails"
                    onChange={onChange}
                    value={addressData.addressDetails}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="image" className="form-label">
                    Upload Image
                  </label>{" "}
                  <input
                    type="file"
                    id="image"
                    name="addressImg"
                    accept="image/*"
                    required
                    onChange={(e) => handleFileUpload(e)}
                  />
                </div>
                <button type="submit" className="btn btn-outline-success">
                  Upload Report
                </button>{" "}
                <button
                  type="reset"
                  className="btn btn-outline-success"
                  onClick={() => window.location.reload()}
                >
                  Reset
                </button>{" "}
              </div>
            </form>
          </div>
        </div>
        <div className="card rounded" style={{ width: "50%", margin: "10px" }}>
          <h3 className="bg-success" style={{ padding: "10px" }}>
            Cleaned Image Verification
          </h3>
          <img
            src={result ? result : clean}
            className="card-img-top"
            alt="..."
            style={{ Width: "70%", margin: "auto", height: "inherit" }}
          />
          <div className="card-body" style={{ height: "20px" }}>
            <form onSubmit={(e)=>{isActive(e)}}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "5px",
                }}
              >
                {/* <button
                  className="btn btn-success btn-lg"
                  style={{ margin: "auto" }}
                  onClick={loadCleanImgData}
                >
                  Check
                </button> */}
                <button
                  type="submit"
                  className="btn btn-success btn-lg"
                  style={{ margin: "auto" }}
            
                >
                  Verify
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
