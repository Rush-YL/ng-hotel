import { TestBed, inject } from '@angular/core/testing';

import { SideToggleService } from './side-toggle.service';

describe('SideToggleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SideToggleService]
    });
  });

  it('should be created', inject([SideToggleService], (service: SideToggleService) => {
    expect(service).toBeTruthy();
  }));
});
