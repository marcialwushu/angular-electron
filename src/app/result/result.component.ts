import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  emailPatern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private quizService: QuizService, private router: Router) { }

  ngOnInit() {
    this.quizService.getAnswer().subscribe(
      (data : any) => {
        this.quizService.correctAnswerCount = 0;
        this.quizService.qns.forEach((e,i)=>{
          if(e.answer == data[i])
          this.quizService.correctAnswerCount++;
          e.correct = data[i];
        });
      }
    );
  }

}
