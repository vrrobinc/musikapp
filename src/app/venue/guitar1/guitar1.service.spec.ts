import { TestBed } from '@angular/core/testing';

import { Guitar1Service } from './guitar1.service';

describe('Guitar1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Guitar1Service = TestBed.get(Guitar1Service);
    expect(service).toBeTruthy();
  });
});
