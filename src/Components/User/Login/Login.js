import React, { useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import { getProfileData, signin } from "../../../api/index";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";
// import jwtDecode from "jwt-decode";

function Login() {
  const [email, setEmail] = useState("");
  // const [route, setRoute] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();
  // const [userID, setUserID] = useState("");

  const { isAuthenticated, login } = useAuth();

  const navigate = useNavigate();

  const fetchProfile = async () => {
    const { data } = await getProfileData();
    console.log(data);
    setUser(data);
  };
  useEffect(() => {
    fetchProfile();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await signin({ email, password });
      login(data.token);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      console.log("====================================");
      console.log("User Authenticated");
      console.log("====================================");
      navigate(`/dash`);
    }
  }, [navigate, isAuthenticated]);

  return (
    <div className="parent clearfix">
      <div className="bg-illustration">
        <div className="burger-btn">
          <img className="imgg" src={require("./blood.png")} alt="logo" />
        </div>
      </div>
      <div className="login">
        <div className="container">
          <h1>
            Login to access to
            <br />
            your account
          </h1>
          <div className="size">
            <div className="LineWrap">
              <div className="Lines">
                <div className="circle">Or</div>
              </div>
            </div>
          </div>

          <div className="login-form">
            <form onSubmit={handleLogin}>
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

              <div className="remember-form">
                <input type="checkbox" />
                <span className="abc">Remember me</span>
              </div>
              <div className="forget-pass">
                {/* <a className="abc" href="#"> */}
                <Link to="/registerm">Get yourself Registered ?</Link>
                {/* </a> */}
              </div>

              <button type="submit">LOG-IN</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
