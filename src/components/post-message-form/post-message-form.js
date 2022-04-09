import React, {Component} from "react";

import './post-message-form.css';

export default class PostMessageForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.onValueChanged = this.onValueChanged.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onValueChanged(e) {
        this.setState((
            {text: e.target.value}
        ))
    }
    onSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState(({
            text: ''
        }))
    }

    render() {
        return (
            <form className="message__form"
            onSubmit={this.onSubmit}>
                <input
                type="text"
                placeholder="Type message here..."
                onChange={this.onValueChanged}
                value={this.state.text}></input>

            </form>
        )
    }
}