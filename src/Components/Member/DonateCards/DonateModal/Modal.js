//Hospial Modal
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import * as React from "react";
import "./Modal.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createAppointment } from "../../../../api";

//6389900ec4658f80d2f1346f

function Modall(props) {
  console.log("asdsadsadsad", props.data);
  const [postData, setPostData] = useState({
    postId: props.postId,
    number: "",
    description: "",
    name: props.data.OrganisationName,
    userId: props.data.reqCreator,
    email: props.data.OrganisationEmail,
  });

  console.log("Props hain", props);

  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    console.log(props.postId);
    navigate(`/Member/Chat?userId=${props.postId}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(postData);
      const { data } = await createAppointment(postData);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  //Member/Chat?userId={id}
  // navigate(`Member/Chat?userId=${id}`);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Donate Blood
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row mt-2">
            <div className="col-md-6">
              <p>
                <b>Name: </b> {props.data.OrganisationName}
              </p>
            </div>
            <div className="col-md-6">
              <p>
                <b>City: </b> {props.data.reqCity}
              </p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6">
              <p>
                <b>Phone Number:</b> {props.data.OrganisationNumber}
              </p>
            </div>
            <div className="col-md-6">
              <p>
                <b>Email: </b> {props.data.OrganisationEmail}
              </p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6">
              <p>
                <b>Required Blood Group:</b> {props.data.bloodGroup}
              </p>
            </div>
            <div className="col-md-6">
              <p>
                <b>Emergency:</b> {props.data.reqEmergency}
              </p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6">
              <p>
                <b>Required Bottles:</b> {props.data.reqNumber}
              </p>
            </div>
            <div className="col-md-6">
              <p>
                <b>Remaining Bottles:</b> {props.data.reqNumber}
              </p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6">
              <input
                style={{ width: "60%", margin: "auto" }}
                type="Number"
                value={postData.number}
                onChange={(e) =>
                  setPostData({ ...postData, number: e.target.value })
                }
                className="form-control"
                placeholder="No of Bottles"
              />
            </div>
            <div className="col-md-6">
              <textarea
                type="text"
                value={postData.description}
                onChange={(e) =>
                  setPostData({ ...postData, description: e.target.value })
                }
                className="form-control"
                placeholder="Descripition"
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClick} variant="primary" size="small">
            Chat
          </Button>
          <Button onClick={props.onHide}>Close</Button>
          <Button variant="primary" type="submit">
            Make Appointment
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}
export default Modall;
