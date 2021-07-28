import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { StarComponent } from './star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    StarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
