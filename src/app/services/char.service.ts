import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character, CharacterForm } from '../Models/Char.model';

@Injectable({
  providedIn: 'root'
})
export class CharService {

  private url : string = "https://localhost:7052/api/"
  constructor(
    private _client : HttpClient
  ) { }

  create(newChar : CharacterForm) : Observable<Character> {
    return this._client.post<Character>(this.url+"character", newChar)
  }

  getAll() : Observable<Character[]> {
    return this._client.get<Character[]>(this.url+"character")
  }
}
