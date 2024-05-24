import { TestBed } from '@angular/core/testing';

import { NasaService } from './nasa.service';
import { HttpClientModule } from '@angular/common/http';

describe('NasaService', () => {
  let service: NasaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientModule]
    });
    service = TestBed.inject(NasaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
