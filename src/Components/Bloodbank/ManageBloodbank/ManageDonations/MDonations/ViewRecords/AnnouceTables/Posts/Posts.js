import React from 'react'
import '../styles.css';

function Posts (props) {
  return (
    < >
        <td>{props.phoneNumber}</td>
        <td>{props.bloodGroup}</td>
        <td>{props.bottlesDonated}</td>
        
    </>
  )
}

export default Posts;