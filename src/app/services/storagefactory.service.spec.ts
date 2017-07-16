
import { StorageFactoryService } from './storage-factory.service';

describe('StorageFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StorageFactoryService]
    });
  });

  it('should be created', inject([StorageFactoryService], (service: StorageFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
