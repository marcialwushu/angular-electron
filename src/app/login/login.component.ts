import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private _emailPatern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  public get emailPatern() {
    return this._emailPatern;
  }
  public set emailPatern(value) {
    this._emailPatern = value;
  }

  imagePath: any = "../../assets/img/facebook-f-brands.svg";


  constructor(private quizService: QuizService, private route: Router) { }

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

  OnSubmit(name:string, email:string) {
    this.quizService.getParticipants(name,email).subscribe(
      (data : any) => {
        localStorage.clear();
        localStorage.setItem('participant',JSON.stringify(data));
        this.route.navigate(['/quiz']);
      }
    );
  }

}
