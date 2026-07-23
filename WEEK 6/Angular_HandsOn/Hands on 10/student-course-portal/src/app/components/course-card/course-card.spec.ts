import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SimpleChange } from '@angular/core';
import { provideMockStore } from '@ngrx/store/testing';

import { CourseCard } from './course-card';

describe('CourseCard', () => {

  let component: CourseCard;
  let fixture: ComponentFixture<CourseCard>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [CourseCard],
      providers: [
        provideMockStore({
          initialState: {
            enrollment: {
              enrolledCourseIds: []
            }
          }
        })
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCard);
    component = fixture.componentInstance;

    component.course = {
      id: 1,
      name: 'Data Structures',
      code: 'CS101',
      credits: 4,
      gradeStatus: 'passed'
    };

    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should display course name', () => {
    const title = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(title.textContent).toContain('Data Structures');
  });

  fit('should display course code', () => {
    const text = fixture.nativeElement.textContent;
    expect(text).toContain('CS101');
  });

  fit('should display course id', () => {
    const text = fixture.nativeElement.textContent;
    expect(text).toContain('1');
  });

  fit('should execute ngOnChanges', () => {

    component.ngOnChanges({
      course: new SimpleChange(
        null,
        {
          id: 2,
          name: 'Java',
          code: 'JAVA201',
          credits: 3,
          gradeStatus: 'pending'
        },
        true
      )
    });

    expect(component).toBeTruthy();

  });

});

function fit(description: string, testFn: () => void) {
  it(description, testFn);
}
