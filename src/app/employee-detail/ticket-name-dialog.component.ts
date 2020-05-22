import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
    template: `
        <form class="add-ticket-overlay-form" [formGroup]="form">
            <h1 mat-dialog-title>Ticket hinzufügen</h1>
            <mat-dialog-content>
                <mat-form-field>
                    <input matInput formControlName="ticketurl" placeholder="URL zum Ticket">
                </mat-form-field>
            </mat-dialog-content>
            <mat-dialog-actions>
                <button mat-flat-button color="primary" type="submit" (click)="dialogRef.close()">Hinzufügen</button>
                <button mat-button type="button" (click)="dialogRef.close()">Abbrechen</button>
            </mat-dialog-actions>
        </form>
  `
})
export class AddTicketDialogComponent implements OnInit {

    form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private dialogRef: MatDialogRef<AddTicketDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private data
    ) {}

    ngOnInit() {
        this.form = new FormGroup({
            ticketurl: new FormControl()
        });
    }
}
