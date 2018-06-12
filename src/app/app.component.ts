import { Component } from '@angular/core';
import { User } from './display-component/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  userList : User [] = new Array<User> ();
  user : User;
  constructor() {
  //  this.userList =new  Array<User> ();
//    let user : User = new User('Ram',14,new Date());
//    this.userList.push(user);
//     user = {name: 'Shyam', age: 14};
//     this.userList.push(user);
//    user = {name: 'Jodu', age: 34};
//     this.userList.push(user);
  }
  addAndDisplay(myName: HTMLInputElement, myAge: HTMLInputElement, myDob: HTMLInputElement) : boolean {
    this.user = new User(myName.value, myAge.valueAsNumber, myDob.valueAsDate);
    if(this.userList !== undefined)
      this.userList.push(this.user);
    return false;
  }
  removeElement(indexIem){
    this.userList.splice(indexIem,1);
    return false;
  }
}
