import { GameService } from 'src/app/services/game.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  messageList : Message[] = []

  content : string
  sender : string

  constructor(
    private hub : GameService
  ) { }

  ngOnInit(): void {
    this.hub.createHub()
    this.hub.myHub.on("sendMessage", (data : Message) => {
      this.messageList.push(data)
      console.log(data)
    })
  }

  sendMessage() {
    console.log("click")
    this.hub.myHub.send("NewMessage", {content : this.content, sender : this.sender}).catch((error) => console.log(error))
  }

  rejoindre() {
    this.hub.myHub.send("JoinGroup")
    this.hub.myHub.on("messagetogroup", (data) => {
      let message : Message = (data as Message) ? data : {sender : "system", content : data}
      this.messageList.push(message)
    })
  }

  envoiAuGroup(){
    this.hub.myHub.send("SendToGroup", {sender : this.sender, content : this.content})
  }

}

export interface Message {
  sender : string
  content : string
}
