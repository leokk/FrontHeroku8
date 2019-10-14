import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatNativeDateModule} from "@angular/material/core";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {LoginComponent} from "./components/login/login.component";
import {EditProfileComponent} from "./components/profileComponents/edit-profile/edit-profile.component";
import {RegisterComponent} from "./components/profileComponents/register/register.component";
import {ChangePassComponent} from "./components/profileComponents/change-pass/change-pass.component";
import {AlterQuestionComponent} from "./components/alter-question/alter-question.component";
import {CongratulationsPageComponent} from "./components/congratulations-page/congratulations-page.component";
import {AddAnswerComponent} from "./components/add-answer/add-answer.component";
import {AddQuestionComponent} from "./components/add-question/add-question.component";
import {QuestionComponent} from "./components/question/question.component";
import {AnswerComponent} from "./components/answer/answer.component";
import {AuthService} from "./services/auth.service";
import {FieldService} from "./services/field.service";
import {UrlPermission} from "./urlPermission/url.permission";
import {AccountService} from "./services/account.service";
import {RouterModule} from "@angular/router";
import {routing} from "./app.routing";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EditProfileComponent,
    ChangePassComponent,
    AnswerComponent,
    QuestionComponent,
    AlterQuestionComponent,
    AddQuestionComponent,
    AddAnswerComponent,
    CongratulationsPageComponent,
  ],
  imports: [RouterModule, routing,
    BrowserModule, BrowserModule,
    FormsModule, BrowserAnimationsModule, HttpClientModule,
    MatDialogModule, MatButtonModule, MatCheckboxModule, BrowserAnimationsModule, MatTableModule,
    MatPaginatorModule, MatFormFieldModule, MatInputModule, MatDatepickerModule,
    MatNativeDateModule
  ],
  entryComponents:[ AnswerComponent,
    QuestionComponent,AlterQuestionComponent,AddQuestionComponent],
  providers: [AuthService,AccountService,UrlPermission,FieldService,   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
