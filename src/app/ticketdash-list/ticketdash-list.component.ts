import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Employee} from '../employee';
import {Ticket} from '../ticket';
import {EmployeeService} from '../employee.service';
import {TicketService} from '../ticket.service';
import {fadeInAnimation} from '../animations';

import {MatTableDataSource} from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import {AddTicketDialogComponent} from '../employee-detail/ticket-name-dialog.component';


@Component({
    selector: 'app-ticketdash-list',
    animations: [
        fadeInAnimation
    ],
    templateUrl: './ticketdash-list.component.html',
    styleUrls: ['./ticketdash-list.component.scss']
})

export class TicketdashListComponent implements OnInit {

    sort_selected = 'firstname_alphabetical-asc';
    filtered_employees;

    @Input() employee: Employee;
    employees: Employee[];
    tickets: Ticket[];

    displayedColumns: string[] = ['link', 'delete'];
    dataSource = new MatTableDataSource();

    ticketDialogRef: MatDialogRef<AddTicketDialogComponent>;

    constructor(
        private employeeService: EmployeeService,
        private ticketService: TicketService,
        private dialog: MatDialog
    ) {
    }

    ngOnInit() {
        this.getEmployees();
        this.getTickets();
        this.sortEmployees('firstname_alphabetical-asc');
        this.dataSource.data = this.tickets;
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

    updateDataSourceByID(idToSort: number) {
        this.dataSource.filterPredicate = (data: Ticket) => {
            return data.user_id === idToSort;
        };
        this.dataSource.filter = String(idToSort);
    }

    openTicketDialog() {
        this.ticketDialogRef = this.dialog.open(AddTicketDialogComponent, {
            width: '400px',
        });
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
