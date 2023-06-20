// eslint-disable-next-line
import React, { useState } from "react";
import AllChat from "./AllChat/AllChat";
import "./message.css";
import data from "./messages.json";
import Messages from "./Messages/Messages";
function Message() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <section class="discussions">
            <div class="discussion search">
              <div class="searchbar">
                <i class="fa fa-search" aria-hidden="true"></i>
                <input type="text" placeholder="Search..."></input>
              </div>
            </div>
            <div>
              {data.map((post) => (
                <AllChat
                  username={post.username}
                  lastMessage={post.lastMessage}
                />
              ))}
            </div>
          </section>
          {/* <section>
            {data.map((post) => (
              <AllChat
                username={post.username}
                lastMessage={post.lastMessage}
              />
            ))}
          </section> */}

          {/* <section class="chat"> */}
          {/* <Messages/> */}

          {/* <div class="header-chat">
                    <i class="icon fa fa-user-o" aria-hidden="true"></i>
                    <p class="name">Megan Leib</p>
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
                    <button class="icon send fa fa-paper-plane-o clickable" aria-hidden="true" > */}
          {/* <i ></i> Send */}
          {/* </button>
                </div> */}
          {/* </section> */}
        </div>
      </div>
    </div>
  );
}

export default Message;
