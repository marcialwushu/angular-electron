import { Component, OnInit } from '@angular/core';
import { Question } from '../models/question.model';
import { QuestionnairService } from '../shared/questionnair.service';

@Component({
  selector: 'app-questionnair',
  templateUrl: './questionnair.component.html',
  styleUrls: ['./questionnair.component.css']
})
export class QuestionnairComponent implements OnInit {

  nextQuestion: Question;
  isOnLastQuestion = false;

  constructor(private questionnairService: QuestionnairService) { }

  ngOnInit() {
    this.nextQuestion = this.questionnairService.getNextQuestion();
  }

  next() {
    this.isOnLastQuestion = this.questionnairService.isLastQuestion();
    this.nextQuestion = this.questionnairService.getNextQuestion();
  }

}
