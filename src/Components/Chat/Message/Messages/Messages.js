import React from "react";
import Receiver from "./Receiver";
import Sender from "./Sender";
import chatData from "../chats.json";
import "./../message.css";

function Messages() {
  return (
    <>
      <div class="header-chat">
            <i class="icon fa fa-user-o" aria-hidden="true"></i>
            <p class="name">Hamza</p>
            <i class="icon clickable fa fa-ellipsis-h right" aria-hidden="true"></i>
        </div>

        <div class="messages-chat">
            {chatData.map((post) => (
                (post.userid === "1"? 
                <Sender
                // username={post.username}
                lastMessage={post.lastMessage}
                />
                : 
                <Receiver
                // username={post.username}
                lastMessage={post.lastMessage}
                />
                )
            ))}
        </div>

        <div class="footer-chat">
            <input type="text" class="write-message" placeholder="Type your message here"></input>
            <button class="icon send fa fa-paper-plane-o clickable" aria-hidden="true" >
                {/* <i ></i> */} Send
            </button>
        </div>
    </>
  );
}

export default Messages;
