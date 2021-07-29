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

  getCourse(id: number): Observable<Course> {
    const course = COURSES.find(c => c.id === id)!;
    return of(course);
  }
}
