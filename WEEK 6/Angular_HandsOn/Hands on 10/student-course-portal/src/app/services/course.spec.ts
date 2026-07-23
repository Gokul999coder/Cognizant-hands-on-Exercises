import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CourseService } from './course';

describe('CourseService', () => {

  let service: CourseService;
  let httpMock: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CourseService]
    });

    service = TestBed.inject(CourseService);
    httpMock = TestBed.inject(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  });
    it('should fetch courses', () => {

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

  service.getCourses().subscribe(courses => {

    expect(courses.length).toBe(2);

  });

  const req =
    httpMock.expectOne('http://localhost:3000/courses');

  expect(req.request.method).toBe('GET');

  req.flush(mockCourses);

});
it('should handle server error', () => {

  service.getCourses().subscribe({

    next: () => fail('Expected error'),

    error: (err) => {

      expect(err.message)
        .toContain('Failed to load courses');

    }

  });

  

    const req =
      httpMock.expectOne('http://localhost:3000/courses');

    req.flush(
      'Server Error',
      {
        status: 500,
        statusText: 'Internal Server Error'
      }
    );

  

});
});

function fail(arg0: string): void {
  throw new Error(arg0);
}
function fit(arg0: string, arg1: () => void): void {
  it(arg0, arg1);
}

