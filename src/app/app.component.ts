import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'angular-electron';

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

