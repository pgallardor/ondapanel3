import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: string;
  loginData = {username: '', password: ''};
  constructor(private router: Router) { }

  ngOnInit() {
    this.message = '';
  }

  login(){
    console.log(this.loginData.username + ' ' + this.loginData.password);
    this.router.navigate(['/']);
  }
}
