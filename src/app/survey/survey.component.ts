import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  // @Input()
  // set json(value: object) {
  //   const surveyModel = new Survey.Model(value);
  //   Survey.SurveyWindowNG.render("surveyElement", {
  //     model: surveyModel,
  //     isExplanded: true
  //   });
  // }

  constructor() { }

  ngOnInit() {
  }

}
