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
              {text: "Hi", order:""},
              {text: "Hi!", order:"true"},
            ]
          },
          {
            name: 'Svino'

          }, 
          {
            name: 'GeoShroom'

          }
        ],
        dialogue: 'Quadath'
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
         <DialogueHeader label={dialogue}></DialogueHeader>
         <DialogueWindow onSwitchDialogue={this.onSwitchDialogue}
         dialogues={dialogues}></DialogueWindow>
        </div>
      )
    }
}
