import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = [];
  display_users = [];
  constructor() { }

  ngOnInit() {
    const us1: any = {username: 'pgallardo', status: 0};
    const us2: any = {username: 'zulul', status: 1};
    this.users.push(us1);
    this.users.push(us2);
    //
    this.display_users = this.users;
  }

  setStatus(uname: string){
    if (confirm('¿Está seguro?')) {
      for (const u of this.users) {
        if (uname === u.username) {
          u.status = 1 - u.status;
        }
      }
    }
  }

  filter(uname: string){
    if (!uname || uname === '') {
      this.display_users = this.users;
    } else {
      const exp = new RegExp(uname);
      this.display_users = [];
      for (const u of this.users) {
        if (exp.test(u.username)) {
          this.display_users.push(u);
        }
      }
    }
  }
}
