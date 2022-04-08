import React, {Component} from "react";

import './dialogue-list-item.css';

export default class DialogueListItem extends Component {
    render() {
        const {name, url, onSwitchDialogue} = this.props;
        return (
            <img className="dialogue__list-item"
            src={url}
            alt={name}
                onClick={onSwitchDialogue}>
            </img>
        )
    }
}