import React, { useState } from "react";
import Navbar from "./NavbarandMenu/Navbarr";
import { verifyUser } from "../../../../api";
import "./Verfication.css";
import { useNavigate } from "react-router-dom";
function Verification() {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(code);
      const { data } = await verifyUser(code);
      console.log("Verification status is", data);
      if (data.verified === "1") {
        if (data.type === "member") {
          navigate("/UserProfile");
        }
        if (data.type === "hospital") {
          navigate("/HospitalProfile");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Navbar />
      <section class="contactr" id="contact">
        <div class="overlayr">
          <div class="container">
            <div class="row justify-content-center align-items-center vh-100">
              <div class="car col-12 col-md-8 col-lg-7 p-4 cari">
                <div class="card-body" style={{ color: "white" }}>
                  <h4
                    class="card-title text-center"
                    style={{ color: "Darkred" }}
                  >
                    OTP Verification
                  </h4>
                  <div class="card-text text-center mt-5">
                    <form onSubmit={handleSubmit} class="otp-forme">
                      <input
                        class="otp-fielde"
                        type="text"
                        name="opt-field[]"
                        maxlength="4"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                      />
                      <div class="d-block mt-4">
                        <button class="btn btn-primary" type="submit">
                          Verify
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Verification;
