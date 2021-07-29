import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseInfoComponent } from './course-info/course-info.component';

import { CoursesComponent } from './courses/courses.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'courses', component: CoursesComponent },
  { path: 'courses/info/:id', component: CourseInfoComponent},
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
