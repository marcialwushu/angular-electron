import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { QuizService } from './shared/quiz.service';
import { AuthGuard } from './auth/auth.guard';
import { MaterialComponent } from './layout/material/material.component';
import { AsidenavbarComponent } from './layout/asidenavbar/asidenavbar.component';
import { FooternavbarComponent } from './layout/footernavbar/footernavbar.component';
import { SettingsnavbarComponent } from './layout/settingsnavbar/settingsnavbar.component';
import { TopnavbarComponent } from './layout/topnavbar/topnavbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionnairComponent } from './questionnair/questionnair.component';
import { QuestionComponent } from './questionnair/question/question.component';
// import { MDBBootstrapModule } from 'angular-bootstrap-md';
// import { SurveyComponent } from './survey/survey.component';
// import { SurveyQuestionsComponent } from './survey/survey-questions/survey-questions.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    QuizComponent,
    ResultComponent,
    MaterialComponent,
    AsidenavbarComponent,
    FooternavbarComponent,
    SettingsnavbarComponent,
    TopnavbarComponent,
    DashboardComponent,
    QuestionnairComponent,
    QuestionComponent,
    // SurveyComponent,
    // SurveyQuestionsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
    // MDBBootstrapModule.forRoot()
  ],
  exports: [BsDropdownModule, TooltipModule,ModalModule],
  providers: [QuizService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
