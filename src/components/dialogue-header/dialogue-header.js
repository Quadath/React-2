import React, {Component} from "react";
import './dialogue-header.css';

export default class DialogueHeader extends Component {
    
    render() {
        const {label} = this.props;
        return (
            <div className="dialogue__header">
                <img src="https://avatars.githubusercontent.com/u/91686101?s=400&u=c871374d535c1a1fe7fbc94a8ea64d895f43e44c&v=4" className="logo"></img>
                <span>{label}</span>
            </div>
        )
    }
}