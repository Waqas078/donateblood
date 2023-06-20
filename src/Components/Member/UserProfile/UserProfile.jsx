import React, { useState } from "react";
import "./UserProfile.css";
import Navbar from "../Sidenav/Navbar";
import Footer from "../Footer/Footer";
import FileBase from "react-file-base64";
import { getProfileData, profileSetup } from "../../../api";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function UserProfile() {
  const navigate = useNavigate();

  const [user, setUser] = useState();

  const fetchProfile = async () => {
    const { data } = await getProfileData();
    console.log(data);
    setUser(data);
  };
  useEffect(() => {
    fetchProfile();
  }, []);
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [bloodGroup, setBloodGroup] = useState(user?.bloodGroup);
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber);
  const [address, setAddress] = useState(user?.address);
  const [state, setState] = useState(user?.state);
  const [city, setCity] = useState(user?.city);
  const [zip, setZip] = useState(user?.zip);
  const [cnic, setCnic] = useState(user?.cnic);
  const [dob, setDOB] = useState(user?.dob);
  const [disease, setDisease] = useState(user?.disease);
  const [profilePicture, setProfilePicture] = useState(user?.userImage);
  const [description, setDescription] = useState(user?.description);

  useEffect(() => {
    setFirstName(user?.firstName);
    setLastName(user?.lastName);
    setBloodGroup(user?.bloodGroup);
    setPhoneNumber(user?.phoneNumber);
    setAddress(user?.address);
    setState(user?.state);
    setCity(user?.city);
    setZip(user?.zip);
    setCnic(user?.cnic);
    setDOB(user?.dob);
    setDisease(user?.disease);
    setDescription(user?.description);
    setProfilePicture(user?.userImage);
  }, [
    user?.firstName,
    user?.lastName,
    user?.bloodGroup,
    user?.phoneNumber,
    user?.address,
    user?.state,
    user?.city,
    user?.zip,
    user?.cnic,
    user?.dob,
    user?.disease,
    user?.description,
    user?.userImage,
  ]);

  // const handleChange = (event) => {
  //   const result = event.target.value.replace(/[^a-z]/gi, "");

  //   setFirstName(result);
  // };

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
        description,
        profilePicture,
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
        description,
        profilePicture,
      });
      console.log(data);
      navigate("/Member");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="background">
      <Navbar />
      <div class="p-4">
        <div class="welcomeDonateblood ">
          <div class="content rounded-3 p-3">
            <h1 class="fs-3">User Profile</h1>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="back-color container rounded mt-5">
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
                          onDone={({ base64 }) =>
                            // setPostData({ ...postData, selectedFile: base64 })
                            setProfilePicture(base64)
                          }
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
                      onChange={(e) =>
                        setFirstName(e.target.value.replace(/[^a-z]/gi, ""))
                      }
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="last-name"
                      value={lastName}
                      onChange={(e) =>
                        setLastName(e.target.value.replace(/[^a-z]/gi, ""))
                      }
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
                      type="number"
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
                      type="text"
                      className="form-control"
                      placeholder="Postal/Zip Code"
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    {/* <div
                      style={{
                        border: "1px solid black",
                        backgroundColor: "white",
                      }}
                    >
                      <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) =>
                          // setPostData({ ...postData, selectedFile: base64 })
                          setProfilePicture(base64)
                        }
                      />
                    </div> */}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="CNIC"
                      value={cnic}
                      onChange={(e) => setCnic(e.target.value)}
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
                <div className="row mt-3">
                  <div className="col-md-6">
                    <select
                      className="form-control"
                      value={disease}
                      onChange={(e) => setDisease(e.target.value)}
                    >
                      <option> ANY DISEASE?</option>
                      <option value="yes">Yes</option>
                      <option value="no"> No</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <textarea
                      className="form-control"
                      placeholder="Disease Info"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                <div className="mt-5 text-right">
                  <button className="ProfileButto" type="submit" value="Submit">
                    Save Profile Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default UserProfile;

// import React, { useState } from "react";
// import "./UserProfile.css";
// import Navbar from "../Sidenav/Navbar";
// import Footer from "../Footer/Footer";
// // import Profilepic from "./Profilepic";
// import FileBase from "react-file-base64";
// import { profileSetup } from "../../../api";
// import { useNavigate } from "react-router-dom";

// function UserProfile() {
//   const navigate = useNavigate();

//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [bloodGroup, setBloodGroup] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [address, setAddress] = useState("");
//   const [state, setState] = useState("");
//   const [city, setCity] = useState("");
//   const [zip, setZip] = useState("");
//   const [cnic, setCnic] = useState("");
//   const [dob, setDOB] = useState("");
//   const [disease, setDisease] = useState("");
//   const [alergy, setAlergy] = useState("");
//   const [cardiac, setCardiac] = useState("");
//   const [bleeding, setBleeding] = useState("");
//   const [profilePicture, setProfilePicture] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       console.log({
//         firstName,
//         lastName,
//         bloodGroup,
//         phoneNumber,
//         address,
//         state,
//         city,
//         zip,
//         cnic,
//         dob,
//         disease,
//         alergy,
//         cardiac,
//         bleeding,
//       });
//       const { data } = await profileSetup({
//         firstName,
//         lastName,
//         bloodGroup,
//         phoneNumber,
//         address,
//         state,
//         city,
//         zip,
//         cnic,
//         dob,
//         disease,
//         alergy,
//         cardiac,
//         bleeding,
//       });
//       console.log(data);
//       navigate("/Member");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="background">
//       <Navbar />
//       <div class="p-4">
//         <div class="welcomeDonateblood ">
//           <div class="content rounded-3 p-3">
//             <h1 class="fs-3">User-Profile</h1>
//           </div>
//         </div>
//       </div>
//       <form onSubmit={handleSubmit}>
//         <div className="back-color container rounded mt-5">
//           <div className="row">
//             <div className="col-md-4 border-right">
//               <div className="d-flex flex-column align-items-center text-center p-3 py-5">
//                 {/* <Profilepic setProfilePicture /> */}
//                 <div>
//                   <div className="pages">
//                     <div className="contains">
//                       <div className="img-holders">
//                         <img
//                           src={profilePicture}
//                           alt=""
//                           id="img"
//                           className="imgs"
//                         />
//                       </div>
//                       <div
//                         style={{
//                           margin: "auto",
//                           marginTop: "20px",
//                           width: "67%",
//                           backgroundColor: "white",
//                         }}
//                       >
//                         <FileBase
//                           type="file"
//                           multiple={false}
//                           onDone={({ base64 }) =>
//                             // setPostData({ ...postData, selectedFile: base64 })
//                             setProfilePicture(base64)
//                           }
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-8">
//               <div className="p-3 py-5">
//                 <div className="d-flex justify-content-between align-items-center mb-3">
//                   <div className="d-flex flex-row align-items-center back"></div>
//                   {/* <button className="ProfileButton" type="submit" value="Submit">
//                     Edit Profile
//                   </button> */}
//                 </div>
//                 <div className="row mt-2">
//                   <div className="col-md-6">
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="first name"
//                       value={firstName}
//                       onChange={(e) => setFirstName(e.target.value)}
//                     />
//                   </div>
//                   <div className="col-md-6">
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="last-name"
//                       value={lastName}
//                       onChange={(e) => setLastName(e.target.value)}
//                     />
//                   </div>
//                 </div>
//                 <div className="row mt-3">
//                   <div className="col-md-6">
//                     <select
//                       className="form-control"
//                       value={bloodGroup}
//                       onChange={(e) => setBloodGroup(e.target.value)}
//                     >
//                       <option>BLOOD GROUP? </option>
//                       <option value="A+">A+</option>
//                       <option value="A-">A-</option>
//                       <option value="B+">B+</option>
//                       <option value="B-">B-</option>
//                       <option value="AB+">AB+</option>
//                       <option value="AB-">AB-</option>
//                       <option value="O+">O+</option>
//                       <option value="O-">O-</option>
//                     </select>
//                   </div>
//                   <div className="col-md-6">
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="Phone number"
//                       value={phoneNumber}
//                       onChange={(e) => setPhoneNumber(e.target.value)}
//                     />
//                   </div>
//                 </div>
//                 <div className="row mt-3">
//                   <div className="col-md-6">
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="address"
//                       value={address}
//                       onChange={(e) => setAddress(e.target.value)}
//                     />
//                   </div>
//                   <div className="col-md-6">
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="State"
//                       value={state}
//                       onChange={(e) => setState(e.target.value)}
//                     />
//                   </div>
//                 </div>
//                 <div className="row mt-3">
//                   <div className="col-md-6">
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="City"
//                       value={city}
//                       onChange={(e) => setCity(e.target.value)}
//                     />
//                   </div>
//                   <div className="col-md-6">
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="Postal/Zip Code"
//                       value={zip}
//                       onChange={(e) => setZip(e.target.value)}
//                     />
//                   </div>
//                 </div>
//                 <div className="row mt-3">
//                   <div className="col-md-6">
//                     {/* <div
//                       style={{
//                         border: "1px solid black",
//                         backgroundColor: "white",
//                       }}
//                     >
//                       <FileBase
//                         type="file"
//                         multiple={false}
//                         onDone={({ base64 }) =>
//                           // setPostData({ ...postData, selectedFile: base64 })
//                           setProfilePicture(base64)
//                         }
//                       />
//                     </div> */}
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="CNIC"
//                       value={cnic}
//                       onChange={(e) => setCnic(e.target.value)}
//                     />
//                   </div>
//                   <div className="col-md-6">
//                     <input
//                       type="date"
//                       className="form-control"
//                       placeholder="Date of Birth"
//                       value={dob}
//                       onChange={(e) => setDOB(e.target.value)}
//                     />
//                   </div>
//                 </div>
//                 <div className="row mt-3">
//                   <div className="col-md-6">
//                     <select
//                       className="form-control"
//                       value={disease}
//                       onChange={(e) => setDisease(e.target.value)}
//                     >
//                       <option> ANY DISEASE?</option>
//                       <option value="yes">Yes</option>
//                       <option value="no"> No</option>
//                     </select>
//                   </div>
//                   <div className="col-md-6">
//                     <select
//                       className="form-control"
//                       value={alergy}
//                       onChange={(e) => setAlergy(e.target.value)}
//                     >
//                       <option> ANY ALERGY?</option>
//                       <option value="yes">Yes</option>
//                       <option value="no"> No</option>
//                     </select>
//                   </div>
//                 </div>
//                 <div className="row mt-3">
//                   <div className="col-md-6">
//                     <select
//                       className="form-control"
//                       value={cardiac}
//                       onChange={(e) => setCardiac(e.target.value)}
//                     >
//                       <option>ANY CARDIAC PROBLEM?</option>
//                       <option value="yes">Yes</option>
//                       <option value="no"> No</option>
//                     </select>
//                   </div>
//                   <div className="col-md-6">
//                     <select
//                       className="form-control"
//                       value={bleeding}
//                       onChange={(e) => setBleeding(e.target.value)}
//                     >
//                       <option> ANY BLEEDING DISORDERS?</option>
//                       <option value="yes">Yes</option>
//                       <option value="no"> No</option>
//                     </select>
//                   </div>
//                 </div>
//                 <div className="mt-5 text-right">
//                   <button className="ProfileButto" type="submit" value="Submit">
//                     Save Profile Changes
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </form>
//       <Footer />
//     </div>
//   );
// }

// export default UserProfile;

// // import React from "react";
// // import "./UserProfile.css";
// // import Navbar from "../Sidenav/Navbar";
// // import Footer from "../Footer/Footer";
// // import Profilepic from "./Profilepic";
// // function UserProfile() {
// //   return (
// //     <div className="background">
// //       <Navbar />
// //       <div class="p-4">
// //         <div class="welcomeDonateblood ">
// //           <div class="content rounded-3 p-3">
// //             <h1 class="fs-3">User-Profile</h1>
// //           </div>
// //         </div>
// //       </div>
// //       <div className="back-color container rounded mt-5">
// //         <div className="row">
// //           <div className="col-md-4 border-right">
// //             <div className="d-flex flex-column align-items-center text-center p-3 py-5">
// //               <Profilepic/>
// //             </div>
// //           </div>
// //           <div className="col-md-8">
// //             <div className="p-3 py-5">
// //               <div className="d-flex justify-content-between align-items-center mb-3">
// //                 <div className="d-flex flex-row align-items-center back"></div>
// //                 <button className="ProfileButton" type="submit" value="Submit">
// //                   Edit Profile
// //                 </button>
// //               </div>
// //               <div className="row mt-2">
// //                 <div className="col-md-6">
// //                   <input
// //                     type="text"
// //                     className="form-control"
// //                     placeholder="first name"
// //                   />
// //                 </div>
// //                 <div className="col-md-6">
// //                   <input
// //                     type="text"
// //                     className="form-control"
// //                     placeholder="last-name"
// //                   />
// //                 </div>
// //               </div>
// //               <div className="row mt-3">
// //                 <div className="col-md-6">
// //                   <input
// //                     type="text"
// //                     className="form-control"
// //                     placeholder="Email"
// //                   />
// //                 </div>
// //                 <div className="col-md-6">
// //                   <input
// //                     type="text"
// //                     className="form-control"
// //                     placeholder="Phone number"
// //                   />
// //                 </div>
// //               </div>
// //               <div className="row mt-3">
// //                 <div className="col-md-6">
// //                   <input
// //                     type="text"
// //                     className="form-control"
// //                     placeholder="address"
// //                   />
// //                 </div>
// //                 <div className="col-md-6">
// //                   <input
// //                     type="text"
// //                     className="form-control"
// //                     placeholder="State"
// //                   />
// //                 </div>
// //               </div>
// //               <div className="row mt-3">
// //                 <div className="col-md-6">
// //                   <input
// //                     type="text"
// //                     className="form-control"
// //                     placeholder="City"
// //                   />
// //                 </div>
// //                 <div className="col-md-6">
// //                   <input
// //                     type="text"
// //                     className="form-control"
// //                     placeholder="Postal/Zip Code"
// //                   />
// //                 </div>
// //               </div>
// //               <div className="row mt-3">
// //                 <div className="col-md-6">
// //                   <input
// //                     type="text"
// //                     className="form-control"
// //                     placeholder="CNIC"
// //                   />
// //                 </div>
// //                 <div className="col-md-6">
// //                   <input
// //                     type="text"
// //                     className="form-control"
// //                     placeholder="Date of Birth"
// //                   />
// //                 </div>
// //               </div>
// //               <div className="row mt-3">
// //                 <div className="col-md-6">
// //                   <select className="form-control">
// //                     <option> Any Disease?</option>
// //                     <option>Yes</option>
// //                     <option> No</option>
// //                   </select>
// //                 </div>
// //                 <div className="col-md-6">
// //                   <select className="form-control">
// //                     <option> Any Alerg?</option>
// //                     <option>Yes</option>
// //                     <option> No</option>
// //                   </select>
// //                 </div>
// //               </div>
// //               <div className="row mt-3">
// //                 <div className="col-md-6">
// //                   <select className="form-control">
// //                     <option>Any Cardic problem?</option>
// //                     <option>Yes</option>
// //                     <option> No</option>
// //                   </select>
// //                 </div>
// //                 <div className="col-md-6">
// //                   <select className="form-control">
// //                     <option> Any Bleeding disorders?</option>
// //                     <option>Yes</option>
// //                     <option> No</option>
// //                   </select>
// //                 </div>
// //               </div>
// //               <div className="mt-5 text-right">
// //                 <button className="ProfileButto" type="submit" value="Submit">
// //                   Save Profile Changes
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       <Footer/>
// //     </div>
// //   );
// // }

// // export default UserProfile;
