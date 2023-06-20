import React from 'react'
import '../styles.css';

function Posts (props) {
  return (
    < >
        <td>{props.name}</td>
        <td>{props.phoneNumber}</td>
        <td>{props.time}</td>
        <td>{props.bottles}</td>
        <td>{props.action}</td>
        <td>{props.bloodGroup}</td>
        <td><button>Delete</button></td>
    </>
  )
}

export default Posts;