import React, {Component} from 'react';
import './App.css';


import DialogueWindow from './components/dialogue-window/dialogue-window';
import DialogueHeader from './components/dialogue-header/dialogue-header';


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
      this.addItem = this.addItem.bind(this);
      this.onSwitchDialogue = this.onSwitchDialogue.bind(this);
    }
    addItem(body) {
      const {dialogues, dialogue} = this.state;

      const index = dialogues.findIndex(elem => elem.name === dialogue);
      const newId = dialogues[index].messages.length + 1;

      const newMessage = {
        text: body,
        order: "true",
        id: newId
      }
      this.setState(({dialogues}) => {
        const changed = dialogues;
        changed[index].messages.push(newMessage);
        console.log('called');
        return {
          dialogues: changed
        }
      });
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
         <DialogueWindow 
         dialogues={dialogues}
         messages={messages().messages}
         onAdd={this.addItem}
         onSwitchDialogue={this.onSwitchDialogue}/>
        </div>
      )
    }
}
