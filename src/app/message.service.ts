import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  _message="This is INT219 End-Term Practical!"

  constructor() { }

  getmessage(){
    return this._message;
  }
}
