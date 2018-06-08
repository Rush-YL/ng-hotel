import { TestBed, inject } from '@angular/core/testing';

import { ReservelistService } from './reservelist.service';

describe('ReservelistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReservelistService]
    });
  });

  it('should be created', inject([ReservelistService], (service: ReservelistService) => {
    expect(service).toBeTruthy();
  }));
});
