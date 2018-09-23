import { SignupForm } from './signup-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '../../node_modules/@angular/forms';
import { courseComponent } from './courses.component';
import { CourseService } from './course.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupForm,
    courseComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule ,
    ReactiveFormsModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
