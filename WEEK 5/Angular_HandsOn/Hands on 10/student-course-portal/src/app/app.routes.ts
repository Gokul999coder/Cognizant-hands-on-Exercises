import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { StudentProfile } from './pages/student-profile/student-profile';
import { CourseList } from './pages/course-list/course-list';
import { CourseDetail } from './pages/course-detail/course-detail';
import { NotFound } from './pages/not-found/not-found';
import { CoursesLayout } from './layouts/courses-layout/courses-layout';
import { authGuard } from './guards/auth-guard';
import { ReactiveEnrollmentForm } from './pages/reactive-enrollment-form/reactive-enrollment-form';
export const routes: Routes = [

  {
    path: '',
    component: Home
  },
  {
  path: 'enroll',
  canActivate: [authGuard],
  loadChildren: () =>
    import('./features/enrollment/enrollment-module')
      .then(m => m.EnrollmentModule)
},

  {
  path: 'profile',
  canActivate: [authGuard],
  component: StudentProfile
},

  {
    path: 'courses',
    component: CoursesLayout,
    children: [
      {
        path: '',
        component: CourseList
      },
      {
        path: ':id',
        component: CourseDetail
      }
    ]
  },
  
  {
    path: '**',
    component: NotFound
  }

];