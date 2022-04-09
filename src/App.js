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
        dialogueId: 0
      }
      this.addItem = this.addItem.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
      this.onSwitchDialogue = this.onSwitchDialogue.bind(this);
    }
    addItem(body) {
      const {dialogues, dialogueId: dialogue} = this.state;

      const newId = dialogues[dialogue].messages.length + 1;

      const newMessage = {
        text: body,
        order: "true",
        id: newId
      }
      const changed = dialogues;
      changed[dialogue].messages.push(newMessage);

      this.setState(({dialogues}) => {
        return {dialogues: changed}
      });
    }
    deleteItem(id) {
      const {dialogueId} = this.state;
      this.setState(({dialogues}) => {
        let changed = dialogues;
        const newMessages = changed[dialogueId].messages.filter(item => item.id !== id)
        changed[dialogueId].messages = newMessages;
        return  {
          dialogues: changed
        }
      })
    }

    onSwitchDialogue(dialogueId) {
      this.setState({dialogueId});
    }

    render() {
      const {dialogueId: dialogue, dialogues} = this.state;
      const messages = () => {
        return this.state.dialogues[dialogue];
      }
      console.log();
      return (
        <div className='app'>
         <DialogueHeader label={dialogues[dialogue].name}/>
         <DialogueWindow 
         dialogues={dialogues}
         messages={messages().messages}
         onAdd={this.addItem}
         onDelete={this.deleteItem}
         onSwitchDialogue={this.onSwitchDialogue}/>
        </div>
      )
    }
}
