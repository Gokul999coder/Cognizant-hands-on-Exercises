import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProfile } from './student-profile';
import { EnrollmentService } from '../../services/enrollment';

describe('StudentProfile', () => {

  let component: StudentProfile;
  let fixture: ComponentFixture<StudentProfile>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [StudentProfile],
      providers: [
        {
          provide: EnrollmentService,
          useValue: {}
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(StudentProfile);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});