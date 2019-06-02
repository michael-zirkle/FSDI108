import { User } from './user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userList: User [] = [];
  constructor() { 
    var user = new User ();
    user.email = "admin@email.com";
    user.password = "root";
    user.firstName = "Admin";
    user.lastName = "User";
    this.userList.push(user);
  }

  public saveUser(user : User){
    this.userList.push(user);
  }

  public getAllUsers(){
    return this.userList;
  }
}
