import React from "react";
import DialogueMessage from "../dialogue-message/dialogue-message";
import './dialogue-message-list.css';

const DialogueMessageList = ({messages}) => {
    const elements = messages.map((item, i) => {
        return (
                <DialogueMessage label={item.text} 
                order={item.order}/>
        )
    })
    return (
        <div className="dialogue__message-list">
            {elements}
        </div>
    )
}

export default DialogueMessageList;