import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {TicketdashListComponent} from './ticketdash-list/ticketdash-list.component';
import {HomeComponent} from './home/home.component';
import {TicketdashGridComponent} from './ticketdash-grid/ticketdash-grid.component';
import {EmployeeDetailComponent} from './employee-detail/employee-detail.component';
import {UserspecificTicketsPipe} from './userspecific-tickets.pipe';
import {MessagesComponent} from './messages/messages.component';
import { MatMenuModule } from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatPaginatorIntl } from '@angular/material/paginator';
import {MatExpansionModule} from '@angular/material/expansion';
import { ClickStopPropagationDirective } from './click-stop-propagation.directive';
import { DashboardLayoutComponent } from './_layout/dashboard-layout/dashboard-layout.component';
import { TicketsLayoutComponent } from './_layout/tickets-layout/tickets-layout.component';
import { TicketsHeaderComponent } from './_layout/tickets-header/tickets-header.component';
import {AddTicketDialogComponent} from './employee-detail/ticket-name-dialog.component';
import {getGermanPaginatorIntl} from './_language-providers/german-paginator-intl';

@NgModule({
    declarations: [
        AppComponent,
        TicketdashListComponent,
        HomeComponent,
        TicketdashGridComponent,
        EmployeeDetailComponent,
        UserspecificTicketsPipe,
        MessagesComponent,
        ClickStopPropagationDirective,
        DashboardLayoutComponent,
        TicketsLayoutComponent,
        TicketsHeaderComponent,
        AddTicketDialogComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatMenuModule,
        MatSelectModule,
        MatIconModule,
        MatTableModule,
        MatSortModule,
        MatButtonModule,
        MatDialogModule,
        MatInputModule,
        MatPaginatorModule,
        MatExpansionModule
    ],
    exports: [
        MatMenuModule,
        MatSelectModule
    ],
    providers: [
        {provide: MatPaginatorIntl, useValue: getGermanPaginatorIntl()}
    ],
    bootstrap: [AppComponent],
    entryComponents: [AddTicketDialogComponent]
})
export class AppModule {
}
