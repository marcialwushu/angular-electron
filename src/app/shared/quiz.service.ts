import { Injectable } from '@angular/core';
// import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  //--------------Properties-----------------------
  readonly rootUrl = 'http://localhost:2690';


  //---------------Helper Metods--------------------------

  constructor(private http: HttpClient) { }


  //---------------Http Metods--------------------------

  insertParticipant(name: string, email: string) {
    var body = {
      Name: name,
      Email: email
    }
    return this.http.post(this.rootUrl + '/api/InsertParticipant', body);
  }


}
