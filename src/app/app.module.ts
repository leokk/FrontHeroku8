import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
// import {
//   MatTableModule,
//   MatDialogModule,
//   MatFormFieldModule,
//   MatInputModule,
//   MatButtonModule
// }from '@angular/material'
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatNativeDateModule} from "@angular/material/core";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, BrowserModule,
    FormsModule, BrowserAnimationsModule, HttpClientModule,
    MatDialogModule, MatButtonModule, MatCheckboxModule, BrowserAnimationsModule, MatTableModule,
    MatPaginatorModule, MatFormFieldModule, MatInputModule, MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
