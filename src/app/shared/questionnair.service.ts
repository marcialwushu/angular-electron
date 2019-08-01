import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionnairService {

  allQuestions: Question[] = [];
  questionIndex = 0;

  constructor() {
    let question = new Question();
   }
}
