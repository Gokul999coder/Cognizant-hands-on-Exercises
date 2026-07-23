import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
  FormArray,
  FormControl
} from '@angular/forms';
import { CommonModule } from '@angular/common';

export function simulateEmailCheck(
  control: AbstractControl
): Promise<ValidationErrors | null> {

  return new Promise((resolve) => {

    setTimeout(() => {

      if (
        control.value &&
        control.value.includes('test@')
      ) {
        resolve({ emailTaken: true });
      }
      else {
        resolve(null);
      }

    }, 800);

  });

}
export function noCourseCode(
  control: AbstractControl
): ValidationErrors | null {

  const value = control.value;

  if (value && value.toString().startsWith('XX')) {
    return { noCourseCode: true };
  }

  return null;
}
@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css'
})
export class ReactiveEnrollmentForm implements OnInit {
  

  enrollForm!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {}
ngOnInit(): void {

  this.enrollForm = this.fb.group({

    studentName: [
      '',
      [
        Validators.required,
        Validators.minLength(3)
      ]
    ],

    studentEmail: this.fb.control(
      '',
      [
        Validators.required,
        Validators.email
      ],
      [
        simulateEmailCheck
      ]
    ),

    courseId: [
      '',
      [
        Validators.required,
        noCourseCode
      ]
    ],

    preferredSemester: [
      'Odd',
      Validators.required
    ],

    agreeToTerms: [
      false,
      Validators.requiredTrue
    ],

    additionalCourses: this.fb.array([])

  });

}
get additionalCourses(): FormArray {

  return this.enrollForm.get(
    'additionalCourses'
  ) as FormArray;

}
addCourse() {

  this.additionalCourses.push(
    new FormControl(
      '',
      Validators.required
    )
  );

}
removeCourse(index: number) {

  this.additionalCourses.removeAt(index);

}

  onSubmit() {
      console.log(this.enrollForm.value);

    console.log(
      'Form Value:',
      this.enrollForm.value
    );

    console.log(
      'Raw Value:',
      this.enrollForm.getRawValue()
    );

  }

}