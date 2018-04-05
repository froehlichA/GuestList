import { Injectable } from '@angular/core';
import Guest from './Guest';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GaestelisteService {
  backendUrl: string = "http://localhost:8080";
  backendData = endpoint => `${this.backendUrl}/${endpoint}`;

  guests: Array<Guest> = [];

  constructor(private _httpClient: HttpClient) { }

  loadData(): any {
    return this._httpClient.get(this.backendData('guests'));
  }
}
