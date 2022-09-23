import { CharService } from 'src/app/services/char.service';
import { Character } from './../../Models/Char.model';
import { Component, OnInit } from '@angular/core';
import * as signalr from '@microsoft/signalr';
import { GameService } from 'src/app/services/game.service';
import { MessageService} from 'primeng/api';

@Component({
  selector: 'app-charlist',
  templateUrl: './charlist.component.html',
  styleUrls: ['./charlist.component.scss']
})
export class CharlistComponent implements OnInit {

  liste : Character[]
  myHub : signalr.HubConnection
  constructor(
    private service : CharService,
    private signalrservice : GameService,
    private toast : MessageService
  ) { }

  ngOnInit(): void {
    this.refreshList()

    this.signalrservice.createHub()
    //Que faire quand je suis notifié
    this.signalrservice.myHub.on("nouveauPerso", () => this.refreshList())
  }

  refreshList() {
    this.service.getAll().subscribe({
      next : (data : Character[]) => {
        this.liste = data
        this.toast.add({
          severity : "success",
          summary : "nouveau perso ok"
        })
      }
    })
  }

}
