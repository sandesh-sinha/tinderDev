import React, { Fragment } from 'react'
import Chat from './Chat'
import './Chats.css'
function Chats() {
    return (
        <Fragment>
            <Chat name='sandesh' message='hi !'  timestamp='35 minutes ago' profilePic='data:image/jpeg;base64,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'/>

        </Fragment>
    )
}

export default Chats