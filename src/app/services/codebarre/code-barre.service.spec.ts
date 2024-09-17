import { TestBed } from '@angular/core/testing';

import { CodeBarreService } from './code-barre.service';

describe('CodeBarreService', () => {
  let service: CodeBarreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodeBarreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

 
});
