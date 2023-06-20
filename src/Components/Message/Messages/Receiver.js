import React from 'react'
import './../message.css'

function receiver(props) {
  return (
    <>
      <div class="message text-only">
          <div class="message">
          {/* <p class="text"> Hey Megan ! It's been a while 😃</p> */}
            <p class="text"> {props.lastMessage}</p>
          </div>
      </div>   
    </>
  )
}

export default receiver