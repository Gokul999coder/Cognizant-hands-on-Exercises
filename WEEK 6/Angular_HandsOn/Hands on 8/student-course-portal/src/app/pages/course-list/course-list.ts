import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../../directives/highlight';
import { CourseService } from '../../services/course';
import { Course } from '../../models/course.model';
import { CourseCard } from '../../components/course-card/course-card';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-course-list',
  imports: [CommonModule, CourseCard, HighlightDirective, FormsModule],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList {
  errorMessage = '';
  isLoading = true;
  searchTerm = '';
  courses: Course[] = [];
  constructor(
    private router: Router,
    private courseService: CourseService,
    private route: ActivatedRoute,
  ) {}
  selectedCourseId: number | null = null;
  
  onEnroll(courseId: number) {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }
  getCourseById(id: number) {
  return this.courses.find(c => c.id === id);
}
  searchCourses() {

  this.router.navigate(
    ['courses'],
    {
      queryParams: {
        search: this.searchTerm
      }
    }
  );
  console.log('Searched for: ' + this.searchTerm);

}
  ngOnInit(): void {
     this.courseService
    .getCourses()
    .subscribe({

      next: (courses) => {
        this.courses = courses;
      },

      error: (err) => {
        this.errorMessage = err.message;
      },

      complete: () => {
        this.isLoading = false;
      }
      

    });

    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }
  trackByCourseId(index: number, course: any) {
    return course.id;
  }
  viewCourse(courseId: number) {
    this.router.navigate(['courses', courseId]);
  }
}
