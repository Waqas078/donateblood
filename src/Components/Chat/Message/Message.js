// eslint-disable-next-line
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useLocation, useMatch, useParams } from "react-router-dom";
import { getChat, getChatMessages, getChats } from "../../../api";
import useAuth from "../../../hooks/useAuth";
import socket from "../../../socket";
import Navbar from "../../Member/Sidenav/Navbar";
// import AllChat from "./AllChat/AllChat";
// import "./message.css";
// import data from "./messages.json";
// import Messages from "./Messages/Messages";
//595A4A

function Message() {
  const [chats, setChats] = useState([]);
  // const [selectedChat, setSelectedChat] = useState();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [chatId, setChatId] = useState();
  const [name, setName] = useState("");
  const [userId, setUserId] = useState();
  const { isAuthenticated } = useAuth();
  const token = Cookies.get("blood-bank");
  const { id } = jwtDecode(token);

  let { search } = useLocation();
  console.log(chats);

  let otherUserId = new URLSearchParams(search).get("userId");

  const fetchChats = async () => {
    const { data } = await getChats();

    setChats(data);
  };

  const handleSend = async () => {
    const token = Cookies.get("blood-bank");
    const { id } = jwtDecode(token);
    await socket.emit("message", { chatId, senderId: id, message }, (res) => {
      if (res) {
        setMessage("");
      }
    });
  };

  const handleIncoming = (data) => {
    let msgs = messages;
    msgs.push(data.message);
    setMessages(msgs);

    let chts = [data.chat];
    chats.forEach((chat) => {
      if (chat._id !== data.chat._id) {
        chts.push(chat);
      } else {
        let s = { ...chat, ...data.chat };
        chts[0] = s;
      }
    });

    setChats(chts);
  };

  const fetchChatRoom = async (other) => {
    try {
      const { data } = await getChat(other);
      console.log(data, "data");
      setName(data.firstName);
      setChatId(data.id);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchChat = async () => {
    try {
      const { data } = await getChatMessages(chatId);
      setMessages(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (chatId) {
      fetchChat();
      // fetchChatRoom();
    }
  }, [chatId]);

  useEffect(() => {
    const token = Cookies.get("blood-bank");
    console.log(token, "token");

    if (token) {
      const { id } = jwtDecode(token);

      socket.emit("addUser", id);
      socket.on("reply", handleIncoming);
    }
    fetchChats();

    if (otherUserId) {
      fetchChatRoom(otherUserId);
    }
  }, []);

  return (
    <div
      className="background"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Navbar />

      <div
        style={{
          width: "80vw",
          height: "80vh",
          backgroundColor: "#d1d5db",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "row",
          marginTop: "100px",
        }}
      >
        <div
          style={{
            width: "25%",
            padding: "6px",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#1C1C1C",
              borderRadius: "10px",
            }}
          >
            <div style={{ height: "7%", padding: "10px" }}>
              <input
                style={{ width: "100%", borderRadius: "5px" }}
                placeholder="Search..."
              />
            </div>

            <div
              style={{
                height: "93%",
                padding: "10px",
                overflow: "hidden",
                overflowY: "scroll",
              }}
            >
              {chats.map((chat) => (
                <Chat
                  key={chat._id}
                  chat={chat}
                  onClick={() => {
                    fetchChatRoom(chat.userId);
                    setChatId(chat._id);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        <div style={{ width: "75%", padding: "6px" }}>
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#1C1C1C",
              borderRadius: "10px",
            }}
          >
            <div
              style={{
                height: "10%",
                display: "flex",
                alignItems: "center",
                paddingLeft: "50px",
              }}
            >
              <h5 style={{ color: "white" }}>{name}</h5>
            </div>

            <div
              style={{
                height: "75%",
                padding: "15px",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                overflowY: "scroll",
              }}
            >
              {messages.map((message) =>
                message.senderId === id ? (
                  <SenderMessage key={message._id} message={message} />
                ) : (
                  <ReceiveMessage key={message._id} message={message} />
                )
              )}
            </div>

            <div
              style={{
                height: "15%",
                //  backgroundColor: "red"
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  height: "100%",
                }}
              >
                <div style={{}}>
                  <input
                    placeholder="Type Message Here"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={{
                      width: "600px",
                      backgroundColor: "white",
                      borderRadius: "10px",
                      padding: "10px",
                    }}
                  />
                </div>
                <button
                  onClick={handleSend}
                  style={{
                    backgroundColor: "#d1d5db",
                    color: "black",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ReceiveMessage = ({ message }) => {
  return (
    <div
      style={{
        padding: "10px 20px",
        backgroundColor: "#d1d5db",
        maxWidth: "70%",
        width: "max-content",
        borderRadius: "15px",
        marginBottom: "15px",
      }}
    >
      <div style={{ color: "black" }}>{message.message}</div>
    </div>
  );
};

const SenderMessage = ({ message }) => {
  return (
    <div
      style={{
        padding: "10px 20px",
        backgroundColor: "#d1d5db",
        maxWidth: "70%",
        width: "max-content",
        borderRadius: "15px",
        marginBottom: "15px",
        alignSelf: "flex-end",
      }}
    >
      <div style={{ color: "black" }}>{message.message}</div>
    </div>
  );
};

const Chat = ({ chat, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        color: "white",
        border: "1px solid white",
        borderRadius: "5px",
        paddingLeft: "20px",
        paddingRight: "20px",
        paddingTop: "10px",
        paddingBottom: "10px",
        marginBottom: "10px",
        cursor: "pointer",
      }}
    >
      <h5>{chat.name}</h5>
      <div style={{ fontWeight: "normal", fontSize: "12px" }}>
        {chat.last ? chat.last : "Start sending messages"}
      </div>
    </div>
  );
};

export default Message;
