import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../../directives/highlight';
import { CourseCard } from '../../components/course-card/course-card';
@Component({
  selector: 'app-course-list',
  imports: [CommonModule,CourseCard,HighlightDirective],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList {
isLoading = true;
  courses = [
    { id: 1, name: 'Angular', code: 'ANG101', credits: 4, gradeStatus: 'passed' },
    { id: 2, name: 'Java', code: 'JAVA201', credits: 3, gradeStatus: 'failed' },
    { id: 3, name: 'Spring Boot', code: 'SPR301', credits: 4, gradeStatus: 'pending' },
    { id: 4, name: 'React', code: 'REA401', credits: 3, gradeStatus: 'passed' },
    { id: 5, name: 'Database', code: 'DB501', credits: 2, gradeStatus: 'pending' }
  ];
 selectedCourseId: number | null = null;

onEnroll(courseId: number) {
  console.log('Enrolling in course: ' + courseId);
  this.selectedCourseId = courseId;
}
  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }
 trackByCourseId(index: number, course: any) {
    return course.id;
  }
}
