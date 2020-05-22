import {Component, OnInit} from '@angular/core';
import {Employee} from '../../employee';
import {Ticket} from '../../ticket';
import {EmployeeService} from '../../employee.service';
import {TicketService} from '../../ticket.service';
import {Router} from '@angular/router';
import {fadeInAnimation} from '../../animations';

@Component({
    selector: 'app-tickets-header',
    animations: [
    fadeInAnimation
    ],
    templateUrl: './tickets-header.component.html',
    styleUrls: ['./tickets-header.component.scss']
})
export class TicketsHeaderComponent implements OnInit {

    constructor(
        private employeeService: EmployeeService,
        private ticketService: TicketService,
        private router: Router
    ) {
    }

    employees: Employee[];
    tickets: Ticket[];

    ngOnInit() {
        this.getEmployees();
        this.getTickets();
    }

    getEmployees(): void {
        this.employeeService.getEmployees()
            .subscribe(employees => this.employees = employees);
    }

    getTickets(): void {
        this.ticketService.getTickets()
            .subscribe(tickets => this.tickets = tickets);
    }

}
