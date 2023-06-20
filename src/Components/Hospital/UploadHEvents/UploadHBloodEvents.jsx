import React, { useState } from "react";
import "./UploadBloodEvent.css";
import Footer from "../../Member/Footer/Footer";
import Navbar from "../Sidenav/Navbar";
import { useNavigate } from "react-router-dom";
import { postAnnounce } from "../../../api";

function UploadBloodEvents() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log({ title, description });
      const { data } = await postAnnounce({ title, description });
      console.log(data);
      navigate("/hospital");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="background">
      <Navbar />
      <div className="p-4">
        <div className="welcome">
          <div className="content rounded-3 p-3">
            <h1 className="fs-3">Upload-Events</h1>
          </div>
        </div>
      </div>
      <section class="we-offer-area text-center bg-gray">
        <form onSubmit={handleSubmit}>
          <div class="container">
            <div class="row">
              <div className="FormStyles">
                <div class="row">
                  <div class="booking-form">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <span class="form-labe">Title of Event</span>
                          <input
                            class="form-control"
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <span class="form-labe">Descripition of Event</span>
                          <textarea
                            className="Textareabd"
                            id="w3review"
                            name="w3review"
                            rows="4"
                            cols="120"
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div class="col-md-12">
                        <div class="for-btn">
                          <button type="submit" class="submi-btn">
                            Upload Event
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
      <Footer />
    </div>
  );
}

export default UploadBloodEvents;
