import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sys-time',
  templateUrl: './sys-time.component.html',
  styleUrls: ['./sys-time.component.css']
})
export class SysTimeComponent implements OnInit {

  constructor() {
    setInterval(this.tick.bind(this), 1000);
  }

  hours: number;
  minutes: number;
  seconds: number;

  tick() {
    var date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
  }
  ngOnInit() {
  }

}
