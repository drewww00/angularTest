import { TestBed } from '@angular/core/testing';

import { ModifyDivServiceService } from './modify-div-service.service';

describe('ModifyDivServiceService', () => {
  let service: ModifyDivServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModifyDivServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
