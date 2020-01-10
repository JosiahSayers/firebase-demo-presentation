import { TestBed } from '@angular/core/testing';

import { MessageDatabaseServiceService } from './message-database-service.service';

describe('MessageDatabaseServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessageDatabaseServiceService = TestBed.get(MessageDatabaseServiceService);
    expect(service).toBeTruthy();
  });
});
