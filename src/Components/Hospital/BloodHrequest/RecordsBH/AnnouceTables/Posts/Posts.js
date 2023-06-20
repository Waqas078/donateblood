import React from 'react'
import '../styles.css';

function Posts (props) {
  return (
    <>
      <td>{props.title}</td>
      <td>{props.date}</td>
      <td>{props.number}</td>
      <td>{props.bottles}</td>
      <td>{props.time}</td>
    </>
  )
}

export default Posts;