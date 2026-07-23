import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { CourseList } from './course-list';

describe('CourseList', () => {

  let component: CourseList;
  let fixture: ComponentFixture<CourseList>;
  let store: MockStore;

  const mockCourses = [
    {
      id: 1,
      name: 'Angular',
      code: 'ANG101',
      credits: 4,
      gradeStatus: 'passed'
    },
    {
      id: 2,
      name: 'Java',
      code: 'JAVA201',
      credits: 3,
      gradeStatus: 'pending'
    }
  ];

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [CourseList],

      providers: [

        provideMockStore({

          initialState: {

            course: {

              courses: mockCourses,
              loading: false,
              error: null

            },

            enrollment: {
              enrolledCourseIds: []
            }

          }

        })

      ]

    }).compileComponents();

    store = TestBed.inject(MockStore);

    fixture = TestBed.createComponent(CourseList);
    component = fixture.componentInstance;

    fixture.detectChanges();

  });

  it('should create', () => {

    expect(component).toBeTruthy();

  });

  it('should load courses from store', () => {

    expect(component).toBeTruthy();

  });

  it('should show loading state', () => {

    store.setState({

      course: {

        courses: [],
        loading: true,
        error: null

      },

      enrollment: {
        enrolledCourseIds: []
      }

    });

    fixture.detectChanges();

    expect(component).toBeTruthy();

  });

});