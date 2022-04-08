import React, {Component} from 'react';
import './App.css';


import DialogueWindow from './components/dialogue-window/dialogue-window';
import DialogueHeader from './components/dialogue-header/dialogue-header';

import getService from './services/getService';



export default class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        dialogues: [
          {
            name: 'Quadatz',
            messages: [
              {text: "Hi", order:"", id: "1"},
              {text: "Hi, my clone!", order:"true", id: "2"},
            ]
          },
          {
            name: 'Svino',
            messages: [
              {text: "Bruh", order:"", id: "1"},
              {text: "Leatherman", order:"true", id: "2"},
              {text: "Did you mean Featherman?", order:"", id: "3"},
            ]
          }, 
          {
            name: 'GeoShroom',
            messages: [
              {text: "Do you want some mushrooms?", order:"", id: "1"},
              {text: "No.", order:"true", id: "2"},
              {text: "Why?", order:"", id: "3"},
              {text: "It is tasty!", order:"", id: "4"},
              {text: "I said no.", order:"true", id: "5"},
            ]
          }
        ],
        dialogue: 'Quadatz'
      }
      this.onSwitchDialogue = this.onSwitchDialogue.bind(this);
    }

    onSwitchDialogue(dialogue) {
      this.setState({dialogue});
    }

    render() {
      const {dialogue, dialogues} = this.state;
      const messages = () => {
        const index = this.state.dialogues.findIndex(elem => elem.name === dialogue);
        return this.state.dialogues[index];
      }
      console.log();
      return (
        <div className='app'>
         <DialogueHeader label={dialogue}/>
         <DialogueWindow onSwitchDialogue={this.onSwitchDialogue}
         dialogues={dialogues}
         messages={messages().messages}/>
        </div>
      )
    }
}
