import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayFormComponent } from './pay-form.component';

describe('PayFormComponent', () => {
  let component: PayFormComponent;
  let fixture: ComponentFixture<PayFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
