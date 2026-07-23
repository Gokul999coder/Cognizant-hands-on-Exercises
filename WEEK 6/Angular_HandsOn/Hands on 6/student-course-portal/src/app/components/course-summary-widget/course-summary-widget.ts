import { Component } from '@angular/core';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-course-summary-widget',
  standalone: true,
  templateUrl: './course-summary-widget.html'
})
export class CourseSummaryWidget {

  constructor(
    public courseService: CourseService
  ) {}

}