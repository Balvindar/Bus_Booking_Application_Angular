import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BusService } from '../bus.service';
import { BusDetails } from '../Model/BusDetails';
import { PassengerInfo } from '../Model/PassengerInfo';
import { RouteDetails } from '../Model/RouteDetails';
import { SelectedSeats } from '../Model/SelectedSeats';

@Component({
  selector: 'app-review-bus-ticket',
  templateUrl: './review-bus-ticket.component.html',
  styleUrls: ['./review-bus-ticket.component.css']
})
export class ReviewBusTicketComponent {
  booking = {
    source: '',
    destination: '',
    date: '',
    bus: {
      name: '',
      type: '',
      departureTime: '',
      duration: '',
      fare: 0
    },
    selectedSeats: [],
    totalPrice: 0,
    passengers: [
      {
        name: '',
        age: '',
        gender: ''
      }
    ],
    contact: ''
  };
  routeDetails!: RouteDetails
  busDetails!: BusDetails;
  selectedSeats!: SelectedSeats;
  passengerInfo!: PassengerInfo
  seatNumbers: number[] = [];


  constructor(private router: Router, private busService: BusService) { }
  ngOnInit() {
    this.routeDetails = this.busService.getRouteDetails();
    this.busDetails = this.busService.getBusDetails();
    this.selectedSeats = this.busService.getSelectedSeats();
    this.passengerInfo = this.busService.getPassengerInfo();
    this.getSeatNumber();

  }


  getSeatNumber() {
    this.seatNumbers = [];
    this.selectedSeats.seatDetails?.forEach(eachSeat => {
      if (eachSeat.seatNumber)
        this.seatNumbers?.push(eachSeat.seatNumber);
    })
    return this.seatNumbers;
  }

  confirmBooking() {
    this.router.navigate(['/view_bus_ticket']);
  }
}
