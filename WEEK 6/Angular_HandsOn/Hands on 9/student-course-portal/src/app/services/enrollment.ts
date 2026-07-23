import { Injectable } from '@angular/core';
import { CourseService } from './course';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  private enrolledCourseIds: number[] = [];

  constructor(
    private courseService: CourseService
  ) {}

  enroll(courseId: number): void {
    if (!this.enrolledCourseIds.includes(courseId)) {
      this.enrolledCourseIds.push(courseId);
    }
  }
 

  unenroll(courseId: number): void {
    this.enrolledCourseIds =
      this.enrolledCourseIds.filter(id => id !== courseId);
  }

  isEnrolled(courseId: number): boolean {
    return this.enrolledCourseIds.includes(courseId);
  }
  // switchMap cancels the previous HTTP request
// when a new courseId is selected, preventing
// outdated responses from appearing.

// getStudentsByCourse(courseId: number) {
//   return this.http.get<Student[]>(
//     `http://localhost:3000/students?courseId=${courseId}`
//   );
// }

  
}