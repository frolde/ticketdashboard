import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class MessageService {
    messages: string[] = [];

    add(message: string) {
        this.messages.push(message);
    }

    log(message: string) {
        console.log(message);
    }

    clear() {
        this.messages = [];
    }
}
