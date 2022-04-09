import React from "react";
import DialogueMessage from "../dialogue-message/dialogue-message";
import './dialogue-message-list.css';

const DialogueMessageList = ({messages, onDelete}) => {
    const elements = messages.map((item, i) => {
        return (
                <DialogueMessage key={item.id}
                label={item.text} 
                order={item.order}
                onDelete={() => onDelete(item.id)}/>
        )
    })
    return (
        <div className="dialogue__message-list">
            {elements}
        </div>
    )
}

export default DialogueMessageList;