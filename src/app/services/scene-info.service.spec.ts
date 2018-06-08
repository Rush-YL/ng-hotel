import { TestBed, inject } from '@angular/core/testing';

import { SceneInfoService } from './scene-info.service';

describe('SceneInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SceneInfoService]
    });
  });

  it('should be created', inject([SceneInfoService], (service: SceneInfoService) => {
    expect(service).toBeTruthy();
  }));
});
