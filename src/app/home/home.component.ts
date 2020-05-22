import { Component, OnInit, HostListener } from '@angular/core';
import { TICKETS } from '../mock-tickets';
import { EMPLOYEES } from '../mock-employees';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    tickets = TICKETS;
    employees = EMPLOYEES;

    @HostListener('document:keydown', ['$event'])

    handleShiftKeyboardEvent(event: KeyboardEvent) {
        if(event.key === 'Shift')
        {
            document.getElementById('easteregg').classList.toggle('active');
        }
    }

  constructor() { }

  ngOnInit() {
  }

}
