import { Component } from '@angular/core';
import { BusService } from '../bus.service';
import { BusDetails } from '../Model/BusDetails';
import { PassengerInfo } from '../Model/PassengerInfo';
import { RouteDetails } from '../Model/RouteDetails';
import { SelectedSeats } from '../Model/SelectedSeats';

@Component({
  selector: 'app-view-bus-ticket',
  templateUrl: './view-bus-ticket.component.html',
  styleUrls: ['./view-bus-ticket.component.css']
})
export class ViewBusTicketComponent {
  ticketId: string = '';
  ticketGenerated: boolean = false;
  routeDetails!: RouteDetails
  busDetails!: BusDetails;
  selectedSeats!: SelectedSeats;
  passengerInfo!: PassengerInfo
  seatNumbers: number[] = [];

  constructor(private busService: BusService) { }

  ngOnInit() {
    this.routeDetails = this.busService.getRouteDetails();
    this.busDetails = this.busService.getBusDetails();
    this.selectedSeats = this.busService.getSelectedSeats();
    this.passengerInfo = this.busService.getPassengerInfo();
    this.generateTicket();
    this.getSeatNumber();
  }

  generateTicket() {
    this.ticketId = this.generateTicketId();
    this.ticketGenerated = true;
  }

  generateTicketId(): string {
    return 'TCKT-' + Math.random().toString(36).substr(2, 9).toUpperCase();
  }

  downloadTicket() {
    const selectedSeats = this.selectedSeats?.seatDetails ? this.selectedSeats.seatDetails.join(', ') : 'N/A';
    const passengerDetails = this.passengerInfo?.passengerDetails ? this.passengerInfo.passengerDetails.map(p => `${p.name}, ${p.age} yrs, ${p.gender}`).join(' | ') : 'N/A';
    const contact = this.passengerInfo?.contact || 'N/A';

    const ticketContent = `Ticket ID: ${this.ticketId}
    \nFrom: ${this.routeDetails.source} → To: ${this.routeDetails.destination}
    \nDate: ${this.routeDetails.date}
    \nBus Name: ${this.busDetails.busName}
    \nType: ${this.busDetails.type}
    \nDeparture: ${this.busDetails.departure}
    \nDuration: ${this.busDetails.duration}
    \nFare per seat: $${this.busDetails.fare}
    \nSelected Seats: ${selectedSeats}
    \nTotal Fare: $${this.selectedSeats?.fare || 0}
    \nPassenger Details: ${passengerDetails}\nContact: ${contact}`;

    const blob = new Blob([ticketContent], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `Bus_Ticket_${this.ticketId}.txt`;
    link.click();
  }

  getSeatNumber() {
    this.seatNumbers = [];
    this.selectedSeats.seatDetails?.forEach(eachSeat => {
      if (eachSeat.seatNumber)
        this.seatNumbers?.push(eachSeat.seatNumber);
    })
    return this.seatNumbers;
  }

  printTicket() {
    window.print();
  }
}
