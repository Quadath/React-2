import React from "react";
import DialogueMessage from "../dialogue-message/dialogue-message";
import './dialogue-message-list.css';

const DialogueMessageList = ({messages, onLike, onDelete}) => {
    const elements = messages.map((item, i) => {
        return (
                <DialogueMessage key={item.id}
                label={item.text} 
                order={item.order}
                like={item.like}
                onLike={() => onLike(item.id)}
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