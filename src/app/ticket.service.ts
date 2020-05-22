import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Ticket } from './ticket';
import { TICKETS } from './mock-tickets';
import { MessageService } from './message.service';

@Injectable({
    providedIn: 'root',
})
export class TicketService {

    constructor(private messageService: MessageService) { }

    getTickets(): Observable<Ticket[]> {
        this.messageService.log('TicketService: fetched Tickets');
        this.messageService.add('Hallo! Sie haben tickets!');
        this.messageService.clear();
        return of(TICKETS);
    }
}
