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
              {text: "Hi", order:"", like: false, id: "0"},
              {text: "Hi, my clone!", order:"true", like: false, id: "1"},
            ]
          },
          {
            name: 'Svino',
            messages: [
              {text: "Bruh", order:"", like: true, id: "0"},
              {text: "Leatherman", order:"true", like: "", id: "2"},
              {text: "Did you mean Featherman?", order:"", like: "", id: "3"},
            ]
          }, 
          {
            name: 'GeoShroom',
            messages: [
              {text: "Do you want some mushrooms?", order:"", like: "", id: "1"},
              {text: "No.", order:"true", like: "", id: "2"},
              {text: "Why?", order:"", like: "", id: "3"},
              {text: "It is tasty!", order:"", like: "", id: "4"},
              {text: "I said no.", order:"true", like: "", id: "5"},
            ]
          },
          {
            name: '????',
            messages: [
              {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", order:"", like: "", id: "1"},
            ]
          }
        ],
        dialogueId: 0
      }
      this.addItem = this.addItem.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
      this.onSwitchDialogue = this.onSwitchDialogue.bind(this);
      this.likeItem = this.likeItem.bind(this);
    }
    addItem(body) {
      const {dialogues, dialogueId: dialogue} = this.state;
      const messages = dialogues[dialogue].messages;
      if(!body || !body.replace(/\s/g, '').length) return {
        dialogues : dialogues
      }

      const newId = messages[messages.length - 1].id + 1;

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

   likeItem(id) {
    const {dialogueId} = this.state;
    this.setState(({dialogues}) => {
      
      let changed = dialogues;
      const newMessages = dialogues[dialogueId].messages;
      const index = newMessages.findIndex((item) => item.id === id);
      newMessages[index].like = !newMessages[index].like;
      
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
         onLike={this.likeItem}
         onDelete={this.deleteItem}
         onSwitchDialogue={this.onSwitchDialogue}/>
        </div>
      )
    }
}
