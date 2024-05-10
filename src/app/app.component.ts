import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  title = 'my-app';

  _message="Hello! Aaditya";

  currentDate=new Date();

  company={
    name:"Aaditya",

    lastName:"Mittal",

    city:"Ambala Cantt.",
    age:20
  }

  myObj=[
    {
        "id": 1,
        "name": "John",
        "age": 30,
        "city": "New York"
    },
    {
        "id": 2,
        "name": "Alice",
        "age": 25,
        "city": "Los Angeles"
    },
    {
        "id": 3,
        "name": "Michael",
        "age": 35,
        "city": "Chicago"
    },
    {
        "id": 4,
        "name": "Emily",
        "age": 28,
        "city": "San Francisco"
    }
];

_serviceMessage:string="";

constructor(private _messageService:MessageService){
    this._serviceMessage=_messageService.getmessage();
}

getmessage(){
  // this._serviceMessage=this._messageService.getmessage();
}

}
