import React from "react";

import DialogueListItem from "../dialogue-list-item/dialogue-list-item";

import './dialogue-list.css';
import getService from "../../services/getService";

const DialogueList = ({dialogues, onSwitchDialogue}) => {
    // const service = new getService();
    const elements = dialogues.map((item, i) => {
        return (
            <li key={dialogues[i].name}>
                <DialogueListItem
                onSwitchDialogue={() => onSwitchDialogue(i)}
                // url={service.getResource(`http://localhost:3000/${dialogues[i].name}`).photo}
                name={dialogues[i].name}></DialogueListItem>
            </li>
        )
    })

    return (
        <ul className="dialogue__list">
            {elements}
        </ul>
    )
}

export default DialogueList;