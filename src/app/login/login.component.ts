import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email= '';
  password= '';
  showLoginError = false;

  constructor( private data : DataService, private router : Router ) { }

  ngOnInit() {
  }

  validateLogin(){
    console.log('Validate Login');

    var allUsers = this.data.getAllUsers();

    var validCreds = false;

    for(var i = 0; i < allUsers.length; i++ ) {
      var aUser = allUsers[i];

      if(this.email == aUser.email && this.password == aUser.password) {
        console.log('Valid Creds!');
        validCreds = true;
        this.showLoginError = false;
        this.router.navigate(['user/register']);
      } 
    }
    if (!validCreds) {
      console.error('inavlid Creds');
      this.showLoginError = true;

    }

  }

}
