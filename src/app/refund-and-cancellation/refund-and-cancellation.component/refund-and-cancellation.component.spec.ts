import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundAndCancellationComponent } from './refund-and-cancellation.component';

describe('RefundAndCancellationComponent', () => {
  let component: RefundAndCancellationComponent;
  let fixture: ComponentFixture<RefundAndCancellationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RefundAndCancellationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RefundAndCancellationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
