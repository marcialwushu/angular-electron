import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  signUpButton = document.getElementById('signUp');
  signInButton = document.getElementById('signIn');
  container = document.getElementById('container');

  signUp() {
    this.signUpButton.addEventListener('click', () => {
      this.container.classList.add("right-panel-active");
    })
  }

  signIn() {
    this.signInButton.addEventListener('click', () => {
      this.container.classList.remove("right-panel-active");
    })
  }

}
