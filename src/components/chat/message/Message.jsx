import React from 'react'

function Message(props) {
    return (
        <div>
            <p>{props.username} :{props.text}</p>
        </div>
    )
}

export default Message
