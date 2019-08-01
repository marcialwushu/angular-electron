import { TestBed, inject } from '@angular/core/testing';

import { QuestionnairService } from './questionnair.service';

describe('QuestionnairService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionnairService]
    });
  });

  it('should be created', inject([QuestionnairService], (service: QuestionnairService) => {
    expect(service).toBeTruthy();
  }));
});
