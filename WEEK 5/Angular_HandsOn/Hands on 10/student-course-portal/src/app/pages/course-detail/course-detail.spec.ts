import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetail } from './course-detail';
import { provideRouter } from '@angular/router';
describe('CourseDetail', () => {
  let component: CourseDetail;
  let fixture: ComponentFixture<CourseDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseDetail],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
