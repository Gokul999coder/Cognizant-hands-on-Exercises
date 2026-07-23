import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { HighlightDirective } from '../../directives/highlight';
import { EnrollmentService } from '../../services/enrollment';
import { Store } from '@ngrx/store';

import { enrollInCourse, unenrollFromCourse } from '../../store/enrollment/enrollment.actions';

import { selectEnrolledIds } from '../../store/enrollment/enrollment.selectors';

import { Observable, take } from 'rxjs';
@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, CreditLabelPipe, HighlightDirective],
  templateUrl: './course-card.html',
  styleUrls: ['./course-card.css'],
})
export class CourseCard implements OnChanges {
  isExpanded = false;
  enrolledIds$!: Observable<number[]>;
  constructor(private store: Store) {
    this.enrolledIds$ = this.store.select(selectEnrolledIds);
  }

  // get cardClasses() {
  //   return {
  //     'card--enrolled': this.course.id === this.selectedCourseId,
  //     'card--full': this.course.credits >= 4,
  //     expanded: this.isExpanded,
  //   };
  // }

  // Keeps template clean instead of writing long ngClass expressions there.
  // toggleDetails() {
  //   this.isExpanded = !this.isExpanded;
  // }
  toggleEnrollment() {

  this.enrolledIds$
    .pipe(take(1))
    .subscribe(ids => {

      if (ids.includes(this.course.id)) {

        this.store.dispatch(
          unenrollFromCourse({
            courseId: this.course.id
          })
        );

      } else {

        this.store.dispatch(
          enrollInCourse({
            courseId: this.course.id
          })
        );

      }

    });

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
      console.log(key, changes[key].previousValue, '->', changes[key].currentValue);
    }
  }
}
