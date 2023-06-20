import React, { useState } from "react";
import "./UserProfile.css";
import FileBase from "react-file-base64";
import { useNavigate } from "react-router-dom";
import { profileSetup } from "../../../api";

function UserProfile() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [cnic, setCnic] = useState("");
  const [dob, setDOB] = useState("");
  const [disease, setDisease] = useState("");
  const [alergy, setAlergy] = useState("");
  const [cardiac, setCardiac] = useState("");
  const [bleeding, setBleeding] = useState("");
  const [profilePicture, setProfilePicture] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log({
        firstName,
        lastName,
        bloodGroup,
        phoneNumber,
        address,
        state,
        city,
        zip,
        cnic,
        dob,
        disease,
        alergy,
        cardiac,
        bleeding,
      });
      const { data } = await profileSetup({
        firstName,
        lastName,
        bloodGroup,
        phoneNumber,
        address,
        state,
        city,
        zip,
        cnic,
        dob,
        disease,
        alergy,
        cardiac,
        bleeding,
      });
      console.log(data);
      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div class="p-4">
        <div class="Adminh1">
          <div class="content rounded-3 p-3">
            <h1 class="fs-3" style={{ color: "white" }}>
              Admin Profile
            </h1>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="backk-color container rounded mt-5">
            <div className="row">
              <div className="col-md-4 border-right">
                <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                  {/* <Profilepic setProfilePicture /> */}
                  <div>
                    <div className="pages">
                      <div className="contains">
                        <div className="img-holders">
                          <img
                            src={profilePicture}
                            alt=""
                            id="img"
                            className="imgs"
                          />
                        </div>
                        <div
                          style={{
                            margin: "auto",
                            marginTop: "20px",
                            width: "67%",
                            backgroundColor: "white",
                          }}
                        >
                          <FileBase
                            type="file"
                            multiple={false}
                            onDone={({ base64 }) => setProfilePicture(base64)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="p-3 py-5">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex flex-row align-items-center back"></div>
                    {/* <button className="ProfileButton" type="submit" value="Submit">
                    Edit Profile
                  </button> */}
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="first name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="last-name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <select
                        className="form-control"
                        value={bloodGroup}
                        onChange={(e) => setBloodGroup(e.target.value)}
                      >
                        <option>BLOOD GROUP? </option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="State"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        type="date"
                        className="form-control"
                        placeholder="Date of Birth"
                        value={dob}
                        onChange={(e) => setDOB(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mt-5 text-right">
                    <button
                      className="ProfileButto"
                      type="submit"
                      value="Submit"
                    >
                      Save Profile Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserProfile;
