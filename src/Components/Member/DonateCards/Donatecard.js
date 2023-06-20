import React, { useState } from "react";
import "./Donate.css";
import Modall from "../DonateCards/DonateModal/Modal";
import { specificData } from "../../../api";
function Card(props) {
  const [modalShow, setModalShow] = useState(false);
  const [pro, setPro] = useState("");
  // const [postId, setPostId] = useState(false);
  const handleModal = async (props) => {
    setModalShow(true);
    console.log(props);
    const id = props;
    console.log(id);
    const { data } = await specificData(id);
    console.log(data);
    setPro(data);
    // setPostId(props);
  };

  return (
    <div className="cardd">
      {/* <img src={props.img} className="carddimg" /> */}
      <div className="cardd__body">
        <h3 className="cardd__Hospital">{props.postCreator}</h3>
        <h3 className="cardd__Hospital">{props.postTitle}</h3>
        <p className="cardd__Location">{props.postLocation}</p>
        <h3 className="cardd__Bloodtype">{props.postGroup}</h3>
        <button
          className="cardd__btn"
          onClick={() => handleModal(props.postId)}
        >
          Donate
        </button>
        <Modall
          postId={props.postId}
          show={modalShow}
          data={pro}
          onHide={() => setModalShow(false)}
        />
      </div>
    </div>
  );
}
export default Card;
