import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketdashListComponent } from './ticketdash-list/ticketdash-list.component';
import { TicketdashGridComponent } from './ticketdash-grid/ticketdash-grid.component';
import { HomeComponent } from './home/home.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import {DashboardLayoutComponent} from './_layout/dashboard-layout/dashboard-layout.component';
import {TicketsLayoutComponent} from './_layout/tickets-layout/tickets-layout.component';

const routes: Routes = [

    // Dashboard-Layout
    {
        path: '',
        component: DashboardLayoutComponent,
        children: [
            { path: '', redirectTo: '/home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent, data: {animation: 'HomePage'} },
        ]
    },

    // Tickets-Layout
    {
        path: '',
        component: TicketsLayoutComponent,
        children: [
            { path: 'overview', component: TicketdashListComponent, data: {animation: 'ListPage'} },
            { path: 'users', component: TicketdashGridComponent, data: {animation: 'UserPage'} },
            { path: 'users/:user_ad', component: EmployeeDetailComponent, data: {animation: 'DetailPage'} }
        ]
    },
];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule {}
