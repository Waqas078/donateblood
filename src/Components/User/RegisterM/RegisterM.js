import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signup, duplicate } from "../../../api";
import PasswordChecklist from "react-password-checklist";
import useAuth from "../../../hooks/useAuth";
import validator from "email-validator";

import "./RegisterM.css";
import { data } from "jquery";

function RegisterM() {
  const navigate = useNavigate();

  const [detail, setDetail] = useState("");
  const fetchProfile = async () => {
    const { data } = await duplicate();
    console.log(data);
    setDetail(data);
  };
  useEffect(() => {
    fetchProfile();
  }, []);

  const [type, setType] = useState("member");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { isAuthenticated, login } = useAuth();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // await data.map((post) => (
      //   if(email===post.email)
      //     return alert("Email Already Registered")
      // ))
      const valid = validator.validate(email);
      if (valid === true) {
        if (password !== confirmPassword) {
          return alert("Password and Confirm Password donot match");
        }

        try {
          console.log({ type, email, password });
          const { data } = await signup({ type, email, password }).catch(
            (error) => {
              console.log();
              if (error.response.data.message === "User already exist.") {
                alert("User with this email already exists");
              } else {
                alert("Cant sign up due to some server error");
              }
            }
          );
          console.log(data);
          login(data.token);
        } catch (error) {
          console.log(error);
        }
      } else {
        return alert("Email not Valid");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      console.log("====================================");
      console.log("User Authenticated");
      console.log("====================================");
      navigate("/Verification");
    }
  }, [navigate, isAuthenticated]);

  return (
    <div className="parent clearfix">
      <div className="bg-illustration">
        <div className="burger-btn">
          <img className="imgg" src={require("./blood.png")} alt="logo" />
        </div>
      </div>

      <div className="register">
        <div className="container">
          <h1>
            Register As User
            <br />
          </h1>
          <div className="register-form">
            <form onSubmit={handleSignup}>
              <div
                className="InputGroup"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <input
                  type="radio"
                  name="size"
                  id="size_1"
                  value="member"
                  // checked
                />
                <label className="label" for="size_1">
                  Member
                </label>
                <input type="radio" name="size" id="size_2" value="bloodbank" />
                <label className="label" for="size_2">
                  Blood-Bank
                </label>
                <input type="radio" name="size" id="size_3" value="hospital" />
                <label className="label" for="size_3">
                  Hospital
                </label>
              </div>

              {/* <input type="email" placeholder={type === "hospital" ? "Hospital Name" : "Bloodbank Name"} value={name} onChange={(e) => setName(e.target.value)} /> */}

              <input
                type="email"
                placeholder="E-mail Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="ReType-Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <PasswordChecklist
                rules={[
                  "minLength",
                  "specialChar",
                  "number",
                  "capital",
                  "match",
                ]}
                minLength={8}
                value={password}
                valueAgain={confirmPassword}
              />

              <div className="remembe-form">
                <input type="checkbox" />
                <span className="abc">Remember me</span>
              </div>

              <button type="submit">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterM;
