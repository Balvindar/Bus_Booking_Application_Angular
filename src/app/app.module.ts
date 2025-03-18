import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBusComponent } from './search-bus/search-bus.component';
import { BusListComponent } from './bus-list/bus-list.component';
import { SeatSelectionComponent } from './seat-selection/seat-selection.component';
import { PassengerInfoComponent } from './passenger-info/passenger-info.component';
import { ReviewBusTicketComponent } from './review-bus-ticket/review-bus-ticket.component';
import { ViewBusTicketComponent } from './view-bus-ticket/view-bus-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBusComponent,
    BusListComponent,
    SeatSelectionComponent,
    PassengerInfoComponent,
    ReviewBusTicketComponent,
    ViewBusTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
