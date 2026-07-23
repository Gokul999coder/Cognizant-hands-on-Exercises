import { CommonModule } from '@angular/common';
import {
Component,
  EventEmitter,
Input,
Output,
OnChanges,
SimpleChanges
} from '@angular/core';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { HighlightDirective } from '../../directives/highlight';
import { EnrollmentService } from '../../services/enrollment';
@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule,CreditLabelPipe,HighlightDirective],
  templateUrl: './course-card.html',
  styleUrls: ['./course-card.css'],
})
export class CourseCard implements OnChanges {
constructor(
  public enrollmentService: EnrollmentService
) {}
  isExpanded = false;

get cardClasses() {
  return {
    'card--enrolled': this.course.id === this.selectedCourseId,
    'card--full': this.course.credits >= 4,
    'expanded': this.isExpanded
  };
}

// Keeps template clean instead of writing long ngClass expressions there.
toggleDetails() {
  this.isExpanded = !this.isExpanded;
}
toggleEnrollment() {

  if (this.enrollmentService.isEnrolled(this.course.id)) {

    this.enrollmentService.unenroll(this.course.id);

  } else {

    this.enrollmentService.enroll(this.course.id);

  }

}

getBorderColor() {
  switch (this.course.gradeStatus) {
    case 'passed':
      return 'green';
    case 'failed':
      return 'red';
    default:
      return 'grey';
  }
}
openCourse() {
  this.courseSelected.emit(this.course.id);
}

 @Input()
course!: {
  id: number;
  name: string;
  code: string;
  credits: number;
  gradeStatus: string;
};
@Input() selectedCourseId: number | null = null;

  @Output()
  enrollRequested = new EventEmitter<number>();



@Output()
courseSelected = new EventEmitter<number>();
  
ngOnChanges(changes: SimpleChanges): void {

  for (const key in changes) {
    console.log(
      key,
      changes[key].previousValue,
      '->',
      changes[key].currentValue
    );
  }

}

}
