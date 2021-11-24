/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SongService } from './Song.service';

describe('Service: Song', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SongService]
    });
  });

  it('should ...', inject([SongService], (service: SongService) => {
    expect(service).toBeTruthy();
  }));
});
