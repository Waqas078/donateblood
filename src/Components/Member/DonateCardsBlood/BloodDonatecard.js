import React from 'react'
import "./BloodDonate.css";
import Modall from '../DonateCardsBlood/DonateModalBlood/Modal';
function Card(props) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="cardd">
      <img src={props.img} className="carddimg" />
      <div className="cardd__body">
        <h3 className="cardd__Blood">{props.Bloodbankname}</h3>
        <p className="cardd__Location">{props.Location}</p>
        <h3 className="cardd__Bloodtype">{props.Bloodtype}</h3>
        <button className="cardd__btn" onClick={() => setModalShow(true)}>
          Donate
        </button>
        <Modall show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    </div>
  );
}
export default Card;
