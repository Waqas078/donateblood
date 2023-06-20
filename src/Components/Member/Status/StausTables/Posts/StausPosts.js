import React from "react";
import "../styles.css";

function Posts(props) {
  return (
    <>
      <td>{props.name}</td>
      <td>{props.email}</td>
      <td>{props.bottles}</td>
      <td>{props.time}</td>
      <td>Confirm / Delete</td>
    </>
  );
}

export default Posts;
