import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketdashGridComponent } from './ticketdash-grid.component';

describe('TicketdashGridComponent', () => {
  let component: TicketdashGridComponent;
  let fixture: ComponentFixture<TicketdashGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketdashGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketdashGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
