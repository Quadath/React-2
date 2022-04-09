import React, {Component} from "react";

import './dialogue-message.css';

export default class DialogueMessage extends Component {
    render() {
        const {label, order, like, onLike, onDelete} = this.props;
        let classNames = "dialogue__message";
        if(order) {classNames += " order"}
        if(like) {classNames += " like"}
        return (
            <div className={classNames}>     
                <div className="message__actions">
                    <button className="btn-like"
                        onClick={onLike}>
                        <img src="https://img.icons8.com/tiny-color/344/experimental-like-tiny-color.png" alt="like"></img>
                    </button>
                    <button className="btn-delete"
                        onClick={onDelete}>
                        <img src="https://cdn-icons-png.flaticon.com/128/1828/1828843.png" alt="delete"></img>
                    </button>
                </div>
                <div className="dialogue__message-text">
                    <span>{label}</span>
                    <img src="https://img.icons8.com/tiny-color/344/experimental-like-tiny-color.png"
                     className="like-heart"
                     alt=""></img>
                </div>
            </div>
        )
    }
}