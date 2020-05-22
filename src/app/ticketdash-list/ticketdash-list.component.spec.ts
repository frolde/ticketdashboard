import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketdashListComponent } from './ticketdash-list.component';

describe('TicketdashListComponent', () => {
  let component: TicketdashListComponent;
  let fixture: ComponentFixture<TicketdashListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketdashListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketdashListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
