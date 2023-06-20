import { io } from "socket.io-client";

const socket = io.connect("http://localhost:8080/");

socket.on("getUsers", (msg) => {
  //   console.log(msg);
});
export default socket;
