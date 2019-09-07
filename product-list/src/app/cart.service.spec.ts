import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { CartService } from './cart.service';

describe('CartService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ]
  }));

  it('should be created', () => {
    const service: CartService = TestBed.get(CartService);
    expect(service).toBeTruthy();
  });
});
