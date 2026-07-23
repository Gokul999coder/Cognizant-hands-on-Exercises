import { HighlightDirective } from './highlight';

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    const mockEl = { nativeElement: document.createElement('div') } as any;
    const directive = new HighlightDirective(mockEl);
    expect(directive).toBeTruthy();
  });
});
