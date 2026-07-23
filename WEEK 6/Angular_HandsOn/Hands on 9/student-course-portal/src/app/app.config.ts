import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient,withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { authInterceptor } from './interceptors/auth-interceptor';
import { errorHandlerInterceptor } from './interceptors/error-handler-interceptor';
import { loadingInterceptor } from './interceptors/loading-interceptor';
import { provideStore,provideState} from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { enrollmentReducer } from './store/enrollment/enrollment.reducer';

import { CourseEffects } from './store/course/course.effects';
import { courseReducer } from './store/course/course.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    
    provideHttpClient(
      withInterceptors([
        authInterceptor,
        errorHandlerInterceptor,
        loadingInterceptor,
        
      ])
    ),
    provideState('enrollment', enrollmentReducer),
      provideState('course', courseReducer),
      provideEffects([
CourseEffects
]),
    provideStore(),
  provideStoreDevtools({maxAge: 25}),
    provideRouter(routes)
  ]
};
