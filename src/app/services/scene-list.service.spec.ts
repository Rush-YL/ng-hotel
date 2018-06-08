import { TestBed, inject } from '@angular/core/testing';

import { SceneListService } from './scene-list.service';

describe('SceneListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SceneListService]
    });
  });

  it('should be created', inject([SceneListService], (service: SceneListService) => {
    expect(service).toBeTruthy();
  }));
});
