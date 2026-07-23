import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../services/loading';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {

  const loadingService =
    inject(LoadingService);

 setTimeout(() => {
  loadingService.isLoading$.next(true);
});

return next(req).pipe(
  finalize(() => {
    setTimeout(() => {
      loadingService.isLoading$.next(false);
    });
  })
);

};