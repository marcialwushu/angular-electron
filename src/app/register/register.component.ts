import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private _emailPatern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  public get emailPatern() {
    return this._emailPatern;
  }
  public set emailPatern(value) {
    this._emailPatern = value;
  }

  constructor(private quizService: QuizService, private route : Router) { }

  ngOnInit() {
  }

  OnSubmit(name:string, email:string) {
    this.quizService.insertParticipant(name,email).subscribe(
      (data : any) => {
        localStorage.clear();
        localStorage.setItem('participant',JSON.stringify(data));
        this.route.navigate(['/quiz']);
      }
    );
  }

}
