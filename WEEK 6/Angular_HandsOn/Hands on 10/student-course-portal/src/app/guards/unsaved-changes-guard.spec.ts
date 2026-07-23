import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { unsavedChangesGuard } from './unsaved-changes-guard';

describe('unsavedChangesGuard', () => {
  const executeGuard = (...guardParameters: any[]) =>
    TestBed.runInInjectionContext(() => (unsavedChangesGuard as any)(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
