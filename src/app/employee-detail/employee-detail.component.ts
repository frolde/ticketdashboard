import {Component, OnInit, OnChanges, Input, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Employee} from '../employee';
import {Ticket} from '../ticket';
import {EmployeeService} from '../employee.service';
import {TicketService} from '../ticket.service';

import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import {AddTicketDialogComponent} from './ticket-name-dialog.component';


import {fadeInAnimation} from '../animations';

@Component({
    selector: 'app-employee-detail',
    animations: [
        fadeInAnimation
    ],
    templateUrl: './employee-detail.component.html',
    styleUrls: ['./employee-detail.component.scss']
})


export class EmployeeDetailComponent implements OnInit {

    @Input() employee: Employee;
    employees: Employee[];
    tickets: Ticket[];

    displayedColumns: string[] = ['link', 'delete'];
    dataSource = new MatTableDataSource();

    ticketDialogRef: MatDialogRef<AddTicketDialogComponent>;

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngOnInit() {
        this.dataSource = new MatTableDataSource(this.tickets);
        this.dataSource.filterPredicate = (data: Ticket) => {
            return data.user_id === this.employee.id;
        };
        this.dataSource.filter = String(this.employee.id);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }

    constructor(
        private employeeService: EmployeeService,
        private ticketService: TicketService,
        private route: ActivatedRoute,
        private location: Location,
        private dialog: MatDialog
    ) {
        route.params.subscribe(val => {
            this.getEmployees();
            this.getTickets();
            this.getEmployee();

            this.dataSource.filter = String(this.employee.id);
        });
    }

    openTicketDialog() {
        this.ticketDialogRef = this.dialog.open(AddTicketDialogComponent, {
            width: '400px',
        });
    }

    backClicked() {
        this.location.back();
    }

    getEmployee(): void {
        const user_ad = this.route.snapshot.paramMap.get('user_ad');
        this.employeeService.getEmployee(user_ad)
            .subscribe(employee => this.employee = employee);
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
