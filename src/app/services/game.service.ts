import { Injectable } from '@angular/core';
import * as signalr from '@microsoft/signalr';
@Injectable({
  providedIn: 'root'
})
export class GameService {
  myHub : signalr.HubConnection
  constructor() { }

  createHub()  {
    this.myHub = new signalr.HubConnectionBuilder().withUrl("https://localhost:7052/charhub").build()
    this.myHub.start().then(() => console.log("Connexion établie"))
    .catch((error) => console.log(error))
  }

}
