import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  message: string;
  loginData = {username: '', password: ''};
  constructor(private router: Router, private elRef: ElementRef) { }

  ngOnInit() {
    this.message = '';
  }

  ngAfterViewInit(){
    this.elRef.nativeElement.ownerDocument.body.style.backgroundColor = 'purple';
  }

  login(){
    console.log(this.loginData.username + ' ' + this.loginData.password);
    this.router.navigate(['/']);
  }
}
