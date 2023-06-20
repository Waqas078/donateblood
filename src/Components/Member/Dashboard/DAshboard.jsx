import React from "react";
import "./Dashboard.css";
// import Timer from "./Timer";
import { Link } from "react-router-dom";
import Annoucenment from "../Annoucenement/Annoucenment";
import Footer from "../Footer/Footer";
import Navbar from "../Sidenav/Navbar";
function DAshboard() {
  return (
    <>
      <div className="Dashboard">
        <Navbar />
        <div>
          <div class="p-4">
            <div class="welcome">
              <div class="content rounded-3 p-3">
                <h1 class="fs-3">Welcome to Home</h1>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="wrapper">
            <div class="card">
              <h3 class="card-title">Donate Blood</h3>
              <div className="FAicons">
                <i class="fa fa-tint" aria-hidden="true"></i>
              </div>
              <p class="card-content">
                Donate more and more blood so you can help people one drop of
                blood can make a huge difference If you want to donate blood
                click on the button below.{" "}
              </p>
              <Link to="/MemberDonate/">
                <button class="card-btn">Donate</button>
              </Link>
            </div>
            <div class="card">
              <h3 class="card-title">Edit Profile</h3>
              <div className="FAicons">
                <i class="fas fa-user-edit"></i>
              </div>
              <p class="card-content">
                If you Want to Edit your profile click on the button below and
                provide 100 percent accurate information.
              </p>
              <Link to="/member/UpdateProfile">
                <div className="marg">
                  <button class="card-btn2">Edit-Profile</button>
                </div>
              </Link>
            </div>
            <div class="card">
              <h3 class="card-title">Request Blood</h3>
              <div className="FAicons">
                <i class="fa fa-wheelchair"></i>
              </div>
              <p class="card-content">
                If you want to request the blood click on the button below and
                check your nearest hospital and make a request for blood.
              </p>
              <Link to="/MemberRequest">
                <div className="marg">
                  <button class="card-btn3">Request-blood</button>
                </div>
              </Link>
            </div>
            {/* <div class="card">
              <h3 class="card-title">Valid For Next Donation</h3>
              <Timer />
              <p class="card-content">
                The timer will tell when you will be able to donate blood and
                consider this a warning for your health only donate when you are
                valid to donate.
              </p>
            </div> */}
            <div class="card">
              <h3 class="card-title">Chats</h3>
              <div className="FAicons">
                <i class="fas fa-comment-dots"></i>
              </div>
              <p className="card-content">
                You can chat with Admin, Users, and Hospitals if you desire
              </p>
              <Link to="/Member/Chat">
                <div className="margg">
                  <button className="card-btn4">Chat</button>
                </div>
              </Link>
            </div>
            <div class="card">
              <h3 class="card-title">Check Status</h3>
              <div className="FAicons">
                <i class="fas fa-calendar-check"></i>
              </div>
              <p className="card-content">
                You can check your status of Donations and Blood requests here.
              </p>
              <Link to="/member/status">
                <div className="margg">
                  <button className="card-btn4">Check</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <Annoucenment />
        <Footer />
      </div>
    </>
  );
}

export default DAshboard;
