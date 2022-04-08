import React from "react";

import './dialogue-window.css';

import DialogueList from '../dialogue-list/dialogue-list';
import DialogueMessageList from "../dialogue-message-list/dialogue-message-list";

const DialogueWindow = ({dialogues, messages, onSwitchDialogue}) => {
    return(
        <div className="dialogue__window">
            <DialogueList dialogues={dialogues}
            onSwitchDialogue={onSwitchDialogue}></DialogueList>
            <DialogueMessageList
            messages={messages}/>
        </div>
    )
}

export default DialogueWindow;