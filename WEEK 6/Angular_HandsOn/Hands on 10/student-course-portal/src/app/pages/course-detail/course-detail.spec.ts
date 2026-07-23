import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetail } from './course-detail';

import { ActivatedRoute } from '@angular/router';

describe('CourseDetail', () => {
  let component: CourseDetail;
  let fixture: ComponentFixture<CourseDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseDetail],
      providers: [
  {
    provide: ActivatedRoute,
    useValue: {
      snapshot: {
        paramMap: {
          get: () => '1'
        }
      }
    }
  }
]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

