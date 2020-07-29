import { TestBed, inject } from '@angular/core/testing';

import { EntitiesService } from './entities.service';
import { entitiesResults } from './entities-results';

describe('EntitiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EntitiesService],
    });
  });

  it('should be created', inject([EntitiesService], (service: EntitiesService) => {
    expect(service).toBeTruthy();
  }));

  it('should return entities', inject([EntitiesService], (service: EntitiesService) => {
    const entities = service.get();

    expect(entities.length).toEqual(entitiesResults.length);
    expect(entities).toEqual(entitiesResults);
  }));
});
