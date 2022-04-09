import React, {Component} from "react";

import './dialogue-message.css';

export default class DialogueMessage extends Component {
    render() {
        const {label, order, onDelete} = this.props;
        let classNames = "dialogue__message";
        if(order) {classNames += " order"}
        return (
            <div className={classNames}>     
                <div className="message__actions">
                    <button className="btn_delete"
                    onClick={onDelete}>
                        <img src="https://cdn-icons-png.flaticon.com/128/1828/1828843.png"></img>
                    </button>
                </div>
                <div className="dialogue__message-text">
                    <span>{label}</span>
                </div>
            </div>
        )
    }
}