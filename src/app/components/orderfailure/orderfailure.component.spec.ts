import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderfailureComponent } from './orderfailure.component';

describe('OrderfailureComponent', () => {
  let component: OrderfailureComponent;
  let fixture: ComponentFixture<OrderfailureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderfailureComponent]
    });
    fixture = TestBed.createComponent(OrderfailureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
