import { Component, OnInit } from '@angular/core';

import { Message } from '../message';
import { MessageService } from '../message.service'

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  message: Message;
  messages: Message[];
  selectedMessage: Message;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  	this.getMessages();
  }

  getMessages(): void {
  	this.messageService.getMessages()
  	.subscribe(messages => this.messages = messages);
  }

  add(userid: number, messageid: number, messagetext: string): void {
  	messagetext = messagetext.trim();
  	if(!messagetext ) { return; }
  	this.messageService.addMessage({ userid,messageid,messagetext } as Message)
  	.subscribe(message => {
  		this.messages.push(message);
  	});
  }

  delete(message: Message ): void{
  	this.messages = this.messages.filter(m => m !== message);
  	this.messageService.deleteMessage(message).subscribe;
  }

  onSelect(message: Message): void {
    this.selectedMessage = message;
  }
}
