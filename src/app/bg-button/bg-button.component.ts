import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bg-button',
  templateUrl: './bg-button.component.html',
  styleUrls: ['./bg-button.component.css']
})
export class BgButtonComponent implements OnInit {
  colors = ['blue darken-1', 'pink darken-4','purple darken-3',];
  index = 0;
  changeBgColor() {
    this.index++;
    if(this.index > this.colors.length-1)
      this.index = 0;
    document.body.className = this.colors[this.index];
  }
  constructor() {
    document.body.className = this.colors[this.index];
  }

  ngOnInit() {
  }

}
