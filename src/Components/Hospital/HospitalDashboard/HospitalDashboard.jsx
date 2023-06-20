import React, { useState, useEffect } from "react";
import "./HospitalDashboard.css";
import { Link } from "react-router-dom";
import Footer from "../../Member/Footer/Footer";
import Navbar from "../Sidenav/Navbar";
import StockCharts from "../BloodHStock/StockHCharts";
import Annoucenment from "../Annoucenement/Annoucenment";
import { getProfileData } from "../../../api";
import { Alert, Space } from "antd";

function DAshboard() {
  const [user, setUser] = useState();
  const [stocks, setStocks] = useState();

  const fetchProfile = async () => {
    const { data } = await getProfileData();

    console.log(data);
    setUser(data);
  };
  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <>
      <div className="Dashboard">
        <Navbar />
        <div>
          <div className="p-4">
            <div className="welcome">
              <div className="content rounded-3 p-3">
                <h1 className="fs-3">{`welcome to ${user?.firstName}`}</h1>
              </div>
            </div>
          </div>
          <div className="Padd"></div>
        </div>
        <div>
          <div className="wrapper">
            <div className="card Card">
              <h3 className="card-title">Upload Events</h3>
              <div className="FAicons FAiconsy">
                <i className="fa fa-upload" aria-hidden="true"></i>
              </div>
              <p className="card-content">
                You can upload events information and can inform all users,
                hospitals and visitors on the platform.
              </p>
              <Link to="/UploadHBloodEvents">
                <div className="marg">
                  <button className="card-btn1">Upload</button>
                </div>
              </Link>
            </div>
            <div className="card Card">
              <h3 className="card-title">Edit Profile</h3>
              <div className="FAicons FAiconsy">
                <i className="fas fa-user-edit"></i>
              </div>
              <p className="card-content">
                If you Want to Edit your profile click on the button below and
                provide 100 percent accurate information.
              </p>
              <Link to="/UpdateHospitalProfile">
                <div className="marg">
                  <button className="card-btn2">Edit-Profile</button>
                </div>
              </Link>
            </div>
            <div className="card Card">
              <h3 className="card-title">Request Blood</h3>
              <div className="FAicons FAiconsy">
                <i className="fa fa-wheelchair"></i>
              </div>
              <p className="card-content">
                If you want to request the blood click on the button below and
                check your nearest hospital and make a request for blood.
              </p>
              <Link to="/MainRequestBH">
                <div className="marg">
                  <button className="card-btn3">Request-blood</button>
                </div>
              </Link>
            </div>
            <div className="card Card">
              <h3 className="card-title">Chat</h3>
              <div className="FAicons FAiconsy">
                <i class="fas fa-comment-dots"></i>
              </div>
              <p className="card-content">
                You can chat with Admin, Users, and Hospitals if you desire
              </p>
              <Link to="/member/chat">
                <div className="margg">
                  <button className="card-btn4">Chat</button>
                </div>
              </Link>
            </div>
            <div className="card Card">
              <h3 className="card-title">Manage records</h3>
              <div className="FAicons FAiconsy">
                <i class="fa fa-tasks" aria-hidden="true"></i>
              </div>
              <p className="card-content">
                You Can Manage, Add and Delete Donation records of Members,
                Hospitals And Other Bloodbanks.
              </p>
              <Link to="/ManageHRecords">
                <div className="marg">
                  <button className="card-btn5">Manage</button>
                </div>
              </Link>
            </div>
            <div className="card Card">
              <h3 className="card-title">Manage Blood Stocks</h3>
              <div className="FAicons FAiconsy">
                <i class="fas fa-chart-pie"></i>
              </div>
              <p className="card-content">
                You Can Manage your Blood Stocks here and can Update your Blood
                Stocks.
              </p>
              <Link to="/StockHForm">
                <div className="marg">
                  <button className="card-btn6">Manage</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="p-4 Stockdiv">
          <div className="welcome">
            <div className="content rounded-3 p-3">
              <h1 className="fs-3">Available Blood Stock</h1>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="chartcolor">
            <StockCharts setStocks />
          </div>
        </div>
        <Annoucenment />
        <Footer />
      </div>
    </>
  );
}

export default DAshboard;
