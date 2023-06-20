import React from 'react'
import '../styles.css';

function Posts (props) {
  return (
    < >
      <td>{props.tittle}</td>
      <td>{props.description}</td>
      <td>{props.time}</td>
        
    </>
  )
}

export default Posts;