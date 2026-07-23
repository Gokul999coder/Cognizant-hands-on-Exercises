import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';
import { HttpClient } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { map, catchError, tap, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:3000/courses';
 

  // private courses: Course[] = [
  //   {
  //     id: 1,
  //     name: 'Angular',
  //     code: 'ANG101',
  //     credits: 4,
  //     gradeStatus: 'passed'
  //   },
  //   {
  //     id: 2,
  //     name: 'Java',
  //     code: 'JAVA201',
  //     credits: 3,
  //     gradeStatus: 'pending'
  //   },
  //   {
  //     id: 3,
  //     name: 'Spring Boot',
  //     code: 'SPR301',
  //     credits: 4,
  //     gradeStatus: 'failed'
  //   },
  //   {
  //     id: 4,
  //     name: 'React',
  //     code: 'REA401',
  //     credits: 3,
  //     gradeStatus: 'passed'
  //   },
  //   {
  //     id: 5,
  //     name: 'Database',
  //     code: 'DB501',
  //     credits: 2,
  //     gradeStatus: 'pending'
  //   }
  // ];
  createCourse(
  course: Omit<Course,'id'>
): Observable<Course> {

  return this.http.post<Course>(
    this.apiUrl,
    course
  );

}
updateCourse(
  course: Course
): Observable<Course> {

  return this.http.put<Course>(
    `${this.apiUrl}/${course.id}`,
    course
  );

}
deleteCourse(
  id: number
): Observable<void> {

  return this.http.delete<void>(
    `${this.apiUrl}/${id}`
  );

}

  getCourses(): Observable<Course[]> { return this.http.get<Course[]>(this.apiUrl).pipe(

    // map is used to transform data
    map(courses => courses.filter(c => c.credits > 0)),

    // tap is for side effects like logging.
    // It should NOT modify the data.
    tap(courses =>
      console.log('Courses loaded:', courses.length)
    ),

    // Retry failed request 2 times
    retry(2),

    // Handle errors
    catchError(err => {

      console.error(err);

      return throwError(() =>
        new Error('Failed to load courses. Please try again.')
      );

    })

  );
}

  getCourseById(id: number): Observable<Course> {
  return this.http.get<Course>(
    `${this.apiUrl}/${id}`
  );
}
 
}