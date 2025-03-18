import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewBusTicketComponent } from './review-bus-ticket.component';

describe('ReviewBusTicketComponent', () => {
  let component: ReviewBusTicketComponent;
  let fixture: ComponentFixture<ReviewBusTicketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewBusTicketComponent]
    });
    fixture = TestBed.createComponent(ReviewBusTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
