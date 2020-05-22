import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userspecificTickets',
    pure: false
})
export class UserspecificTicketsPipe implements PipeTransform {

    transform(tickets: any[], filter: any ): any {
        if (!tickets || !filter) {
            return tickets;
        }
        return tickets.filter(ticket => ticket.user_id === filter.id);
    }

}
