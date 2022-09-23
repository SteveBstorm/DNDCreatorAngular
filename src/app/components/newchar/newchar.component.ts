import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/Models/Char.model';
import { CharService } from 'src/app/services/char.service';
import { GetCharac } from 'src/app/Tools/dice';

@Component({
  selector: 'app-newchar',
  templateUrl: './newchar.component.html',
  styleUrls: ['./newchar.component.scss']
})
export class NewcharComponent implements OnInit {

  nom : string
  race : string

  constructor(
    private _charservice : CharService
  ) { }

  ngOnInit(): void {

  }

  validateForm() {
    this._charservice.create(
      {nom : this.nom, race : this.race, force : GetCharac(), endurance : GetCharac()}
      ).subscribe({
        next : (data : Character) => console.log(data)
      })
  }



}
