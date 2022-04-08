import React, {Component} from "react";

import './dialogue-message.css';

export default class DialogueMessage extends Component {
    render() {
        const {label, order} = this.props;
        let classNames = "dialogue__message";
        if(order) {classNames += " order"}
        return (
            <div className={classNames}>
                <span>{label}</span>
            </div>
        )
    }
}