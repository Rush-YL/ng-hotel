import { TestBed, inject } from '@angular/core/testing';

import { FastTrackService } from './fast-track.service';

describe('FastTrackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FastTrackService]
    });
  });

  it('should be created', inject([FastTrackService], (service: FastTrackService) => {
    expect(service).toBeTruthy();
  }));
});
