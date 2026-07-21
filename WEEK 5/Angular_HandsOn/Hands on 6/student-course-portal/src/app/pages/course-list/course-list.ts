import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../../directives/highlight';
import { CourseService } from '../../services/course';
import { Course } from '../../models/course.model';
import { CourseCard } from '../../components/course-card/course-card';
@Component({
  selector: 'app-course-list',
  imports: [CommonModule,CourseCard,HighlightDirective],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList {
isLoading = true;
  courses: Course[] = [];
  constructor(
  private courseService: CourseService
) {}
 selectedCourseId: number | null = null;
addDummyCourse() {

  this.courseService.addCourse({
    id: 100,
    name: 'NodeJS',
    code: 'NODE100',
    credits: 3,
    gradeStatus: 'pending'
  });

}
onEnroll(courseId: number) {
  console.log('Enrolling in course: ' + courseId);
  this.selectedCourseId = courseId;
}
  ngOnInit(): void {
   
  this.courses =
    this.courseService.getCourses();
    
  setTimeout(() => {
    this.isLoading = false;
  }, 1500);
  }
 trackByCourseId(index: number, course: any) {
    return course.id;
  }
}
