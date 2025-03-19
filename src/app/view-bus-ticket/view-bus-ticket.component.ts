import { Component } from '@angular/core';
import { BusService } from '../sevices/bus.service';
import { BusDetails } from '../Model/BusDetails';
import { PassengerInfo } from '../Model/PassengerInfo';
import { RouteDetails } from '../Model/RouteDetails';
import { SelectedSeats } from '../Model/SelectedSeats';
import { jsPDF } from "jspdf";

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

  // If you want to download ticket in text file format
  // downloadTicket() {
  //   const selectedSeats = this.selectedSeats?.seatDetails ? this.selectedSeats.seatDetails.join(', ') : 'N/A';
  //   const passengerDetails = this.passengerInfo?.passengerDetails ? this.passengerInfo.passengerDetails.map(p => `${p.name}, ${p.age} yrs, ${p.gender}`).join(' | ') : 'N/A';
  //   const contact = this.passengerInfo?.contact || 'N/A';

  //   const ticketContent = `Ticket ID: ${this.ticketId}
  //   \nFrom: ${this.routeDetails.source} → To: ${this.routeDetails.destination}
  //   \nDate: ${this.routeDetails.date}
  //   \nBus Name: ${this.busDetails.busName}
  //   \nType: ${this.busDetails.type}
  //   \nDeparture: ${this.busDetails.departure}
  //   \nDuration: ${this.busDetails.duration}
  //   \nFare per seat: $${this.busDetails.fare}
  //   \nSelected Seats: ${selectedSeats}
  //   \nTotal Fare: $${this.selectedSeats?.fare || 0}
  //   \nPassenger Details: ${passengerDetails}
  //   \nContact: ${contact}`;

  //   const blob = new Blob([ticketContent], { type: 'text/plain' });
  //   const link = document.createElement('a');
  //   link.href = URL.createObjectURL(blob);
  //   link.download = `Bus_Ticket_${this.ticketId}.txt`;
  //   link.click();
  // }

  // if you want to download ticket in pdf format
  downloadTicket() {
    // Create a new PDF document
    const doc = new jsPDF();
    let yPosition = 20;

    // Title header
    doc.setFontSize(18);
    doc.text("Bus Ticket", 105, yPosition, { align: 'center' });
    yPosition += 10;

    // Ticket ID
    doc.setFontSize(12);
    doc.text(`Ticket ID: ${this.ticketId}`, 10, yPosition);
    yPosition += 10;

    // Route details (source and destination)
    doc.text(`From: ${this.routeDetails.source}`, 10, yPosition);
    doc.text(`To: ${this.routeDetails.destination}`, 110, yPosition);
    yPosition += 10;

    // Date and Bus Name
    doc.text(`Date: ${this.routeDetails.date}`, 10, yPosition);
    yPosition += 10;
    doc.text(`Bus Name: ${this.busDetails.busName}`, 10, yPosition);
    yPosition += 10;

    // Bus Type, Departure, Duration
    doc.text(`Type: ${this.busDetails.type}`, 10, yPosition);
    yPosition += 10;
    doc.text(`Departure: ${this.busDetails.departure}`, 10, yPosition);
    yPosition += 10;
    doc.text(`Duration: ${this.busDetails.duration}`, 10, yPosition);
    yPosition += 10;

    // Fare and selected seats
    doc.text(`Fare per seat: ${this.busDetails.fare}`, 10, yPosition);
    yPosition += 10;
    const selectedSeats = this.seatNumbers && this.seatNumbers.length > 0 ? this.seatNumbers.join(', ') : 'N/A';
    doc.text(`Selected Seats: ${selectedSeats}`, 10, yPosition);
    yPosition += 10;
    doc.text(`Total Fare: $${this.selectedSeats?.fare || 0}`, 10, yPosition);
    yPosition += 10;

    // Passenger Details
    const passengerDetails = this.passengerInfo?.passengerDetails ?
      this.passengerInfo.passengerDetails.map(p => `${p.name}, ${p.age} yrs, ${p.gender}`).join(' | ') : 'N/A';
    doc.text(`Passenger Details: ${passengerDetails}`, 10, yPosition);
    yPosition += 10;

    // Contact Information
    const contact = this.passengerInfo?.contact || 'N/A';
    doc.text(`Contact: ${contact}`, 10, yPosition);

    // Save the PDF
    doc.save(`Bus_Ticket_${this.ticketId}.pdf`);
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
