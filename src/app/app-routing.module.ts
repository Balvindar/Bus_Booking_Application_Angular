import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusListComponent } from './bus-list/bus-list.component';
import { PassengerInfoComponent } from './passenger-info/passenger-info.component';
import { ReviewBusTicketComponent } from './review-bus-ticket/review-bus-ticket.component';
import { SearchBusComponent } from './search-bus/search-bus.component';
import { SeatSelectionComponent } from './seat-selection/seat-selection.component';
import { ViewBusTicketComponent } from './view-bus-ticket/view-bus-ticket.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: SearchBusComponent },
  { path: 'bus_list', component: BusListComponent },
  { path: 'seat_selection', component: SeatSelectionComponent },
  {
    path: 'passenger_info', component: PassengerInfoComponent
  },
  { path: 'review_bus_ticket', component: ReviewBusTicketComponent },
  { path: 'view_bus_ticket', component: ViewBusTicketComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
