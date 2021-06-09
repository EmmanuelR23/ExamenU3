import { TestBed } from '@angular/core/testing';

import { ContactossService } from './contactoss.service';

describe('ContactossService', () => {
  let service: ContactossService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactossService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
