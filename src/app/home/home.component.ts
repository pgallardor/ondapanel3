import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private ref: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.ref.nativeElement.ownerDocument.body.style.backgroundColor = 'white';
  }
}
