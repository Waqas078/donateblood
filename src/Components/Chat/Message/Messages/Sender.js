import React from 'react'
import './../message.css'

function sender(props) {
  return (
    <>
        <div class="message text-only">
            <div class="response">
                {/* <p class="text"> Hey Megan ! It's been a while 😃</p> */}
                <p class="text">{props.lastMessage}</p>
            </div>
        </div>   
    </>
  )
}

export default sender