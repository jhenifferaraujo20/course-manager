import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Course } from './course';
import { COURSES } from './courses';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getCourses(): Observable<Course[]> {
    const courses = of(COURSES);
    return courses;
  }
}
