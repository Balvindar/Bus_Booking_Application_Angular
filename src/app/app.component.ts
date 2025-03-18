import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bus_Booking';
  showBusList = false;
  busSelected = false;
  showPassengerInfo = false;
  enteredPasInfo = false;
  contactNumber = ''
  routeDetails = {
    source: '',
    destination: '',
    date: new Date()
  }

  busDetails = {
    busName: '',
    type: '',
    departure: new Date(),
    duration: '',
    fare: ''
  }

  selectedSeats = {
    seatNumber: [],
    fare: 0
  }

  passengerInfo = [{
    name: '',
    age: '',
    gender: '',
  }]

  getSrcDest(details: any) {
    this.showBusList = true;
    this.routeDetails.source = details.source;
    this.routeDetails.destination = details.destination;
    this.routeDetails.date = details.date;
  }

  getBusDetails(bus: any) {
    this.busSelected = true;
    this.busDetails.busName = bus.name,
      this.busDetails.type = bus.type,
      this.busDetails.departure = bus.departure,
      this.busDetails.duration = bus.duration,
      this.busDetails.fare = bus.duration;
  }

  getSeatDetails(seatDetail: any) {
    this.showPassengerInfo = true;
    this.selectedSeats.seatNumber = seatDetail.seatNumber;
    this.selectedSeats.fare = seatDetail.fare;
  }

  getPassengerInfo(passInfo: any) {
    this.enteredPasInfo = true;
    this.passengerInfo.push(passInfo)
  }

}
