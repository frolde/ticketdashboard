import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Employee } from './employee';
import { EMPLOYEES } from './mock-employees';
import { MessageService } from './message.service';

@Injectable({
    providedIn: 'root',
})
export class EmployeeService {

    constructor(private messageService: MessageService) { }

    getEmployees(): Observable<Employee[]> {
        // this.messageService.log('EmployeeService: fetched employees');
        this.messageService.clear();
        return of(EMPLOYEES);
    }

    getEmployee(user_ad: string): Observable<Employee> {
        // this.messageService.log(`EmployeeService: fetched employee AD=${user_ad}`);
        return of(EMPLOYEES.find(employee => employee.user_ad === user_ad));
    }
}
