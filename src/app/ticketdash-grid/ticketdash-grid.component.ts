import {Component, OnInit} from '@angular/core';
import {Employee} from '../employee';
import {Ticket} from '../ticket';
import {EmployeeService} from '../employee.service';
import {TicketService} from '../ticket.service';
import {fadeInAnimation} from '../animations';

@Component({
    selector: 'app-ticketdash-grid',
    animations: [
        fadeInAnimation
    ],
    templateUrl: './ticketdash-grid.component.html',
    styleUrls: ['./ticketdash-grid.component.scss']
})
export class TicketdashGridComponent implements OnInit {

    sort_selected = 'firstname_alphabetical-asc';
    filtered_employees;

    selectedEmployee: Employee;

    employees: Employee[];
    tickets: Ticket[];

    constructor(
        private employeeService: EmployeeService,
        private ticketService: TicketService
    ) {
    }

    ngOnInit() {
        this.getEmployees();
        this.getTickets();
        this.sortEmployees('firstname_alphabetical-asc');
    }

    sortEmployees(sorting: string) {
        this.employees.sort((a: any, b: any) => {
            switch (sorting) {
                case 'firstname_alphabetical-asc': {
                    if (a['first_name'] < b['first_name']) {
                        return -1;
                    } else if (a['first_name'] > b['first_name']) {
                        return 1;
                    } else {
                        return 0;
                    }
                }
                case 'firstname_alphabetical-desc': {
                    if (a['first_name'] < b['first_name']) {
                        return 1;
                    } else if (a['first_name'] > b['first_name']) {
                        return -1;
                    } else {
                        return 0;
                    }
                    break;
                }
                case 'lastname_alphabetical-asc': {
                    if (a['last_name'] < b['last_name']) {
                        return -1;
                    } else if (a['last_name'] > b['last_name']) {
                        return 1;
                    } else {
                        return 0;
                    }
                }
                case 'lastname_alphabetical-desc': {
                    if (a['last_name'] < b['last_name']) {
                        return 1;
                    } else if (a['last_name'] > b['last_name']) {
                        return -1;
                    } else {
                        return 0;
                    }
                    break;
                }
            }
        });
        this.filtered_employees = this.employees;
    }

    onSelect(employee: Employee): void {
        this.selectedEmployee = employee;
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
