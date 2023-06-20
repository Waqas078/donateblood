import React, { useState } from "react";
import Messages from "../Messages/Messages";
// import { Link } from "react-router-dom";
import "./../message.css";

function AllChat(props) {
  // const [chat, setChat] = useState("");
  const [go, setGo] = useState(false);

  const handleSubmit = (props) => {};
  return (
    <>
      <div style={{ display: "flex", background: "" }}>
        <button
          style={{ border: "none", background: "pink" }}
          class="discussion"
          onClick={() => handleSubmit(props.chatId)}
        >
          <div class="desc-contact" style={{ background: "" }}>
            <p class="name">{props.username}</p>
            <p class="message">{props.lastMessage}</p>
          </div>
          {/* <div style={{ background: "blue" }}>
          <Messages trigger={go} setTrigger={setGo} />
        </div> */}
        </button>
        {/* <section class="chat"> */}
        <div className="" style={{ background: "" }}>
          <Messages trigger={go} setTrigger={setGo} />
        </div>
      </div>

      {/* </section> */}
    </>
  );
}

export default AllChat;
