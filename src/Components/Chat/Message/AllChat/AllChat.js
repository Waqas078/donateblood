import React, { useState } from "react";
import Messages from "../Messages/Messages";
// import { Link } from "react-router-dom";
import "./../message.css";

function AllChat(props) {
  // const [chat, setChat] = useState("");
  const [go, setGo] = useState(false);

  const handleSubmit = (props) => {};
  return (
    // <div style={{ display: 'flex', justifyContent: 'center'}}>
    //   {/* <Messages/> */}
    //   <div style={{height: '85vh', width: '20%', backgroundColor:"black",}}>
    //   <div style={{padding: '10px'}}>
    //     <input placeholder="Search"/>
    //     <div>
    //       <div style={{ backgroundColor:"white", border:"1px solid blue", padding:"10px"}}>
    //         <h1 style={{fontSize:"20px"}}>Hamza</h1>
    //         <p>Hello</p>
    //       </div>
    //       <div style={{ backgroundColor:"white", border:"1px solid blue", padding:"10px"}}>
    //         <h1 style={{fontSize:"20px"}}>Talal</h1>
    //         <p>Hello</p>
    //       </div>
    //       <div style={{ backgroundColor:"white", border:"1px solid blue", padding:"10px"}}>
    //         <p style={{fontSize:"20px"}}>Atif</p>
    //         <p>Hello</p>
    //       </div>
    //     </div>
    //   </div>

    //   <div>

    //   </div>
    //   </div>
    //   <div style={{height: '85vh',  width: '80%'}}>
    //     <div style={{backgroundColor:"yellow" ,width:"100%", height: '85vh '}} >
    //       <div style={{backgroundColor:"white" , padding:"25%"}} >

    //       </div>
    //       <div>
    //         <input placeholder="Type message here"/>
    //         <button style={{}}>Submit</button>
    //       </div>
    //     </div>

    //   </div>
       
    // </div>
    <>
      <button style={{ border:"none" }} class="discussion" onClick={()=> handleSubmit(props.chatId)}>
        <div class="desc-contact">
          <p class="name">{props.username}</p>
          <p class="message">{props.lastMessage}</p>
        </div>
      </button>
    </>
  );
}

export default AllChat;
