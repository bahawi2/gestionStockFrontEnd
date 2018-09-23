import { TestBed, inject } from '@angular/core/testing';

import { ProductMockService } from './product-mock.service';

describe('ProductMockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductMockService]
    });
  });

  it('should be created', inject([ProductMockService], (service: ProductMockService) => {
    expect(service).toBeTruthy();
  }));
});
