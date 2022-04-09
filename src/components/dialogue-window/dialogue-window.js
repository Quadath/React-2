import React from "react";

import './dialogue-window.css';

import DialogueList from '../dialogue-list/dialogue-list';
import DialogueMessageList from "../dialogue-message-list/dialogue-message-list";
import PostMessageForm from "../post-message-form/post-message-form";

const DialogueWindow = ({dialogues, messages, onAdd, onSwitchDialogue}) => {
    return(
        <div className="dialogue__window">
            <DialogueList dialogues={dialogues}
            onSwitchDialogue={onSwitchDialogue}></DialogueList>
            <div className="message__window">
            <DialogueMessageList
            messages={messages}/>
            <PostMessageForm
            onAdd={onAdd}/>
            </div>
        </div>
    )
}

export default DialogueWindow;