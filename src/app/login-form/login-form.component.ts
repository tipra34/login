import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor() {
  }
  signin(){
    if(this.username)
      swal(`Login as ${this.username}`);
    else
      swal('Enter username');
  }
  username: string;
  ngOnInit() {
  }

}
