import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  p_display: any;
  payments: any;
  selected: any;
  constructor() { }

  ngOnInit() {
    const ap1 = [
      {by: 'adolf', amount: 1488, status: 0},
      {by: 'benito', amount: 3000, status: 1},
      {by: 'iosif', amount: 1917, status: 1}
    ];
    const ap2 = [
      {by: 'pedro', amount: 2500, status: 1},
      {by: 'caro', amount: 2100, status: 0},
      {by: 'someguy', amount: 100, status: 1}
    ];
    this.payments = {p1: ap1, p2: ap2};
    this.selected = '';
  }

  chooseProject(value: string){
    this.selected = value;
    if (this.selected === ''){
      this.p_display = [];
    }
    else {
      this.p_display = this.payments[this.selected];
    }
  }
}
