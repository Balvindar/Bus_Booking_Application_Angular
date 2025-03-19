import { Injectable } from '@angular/core';
import { BusDetails } from '../Model/BusDetails';
import { PassengerInfo } from '../Model/PassengerInfo';
import { RouteDetails } from '../Model/RouteDetails';
import { SelectedSeats } from '../Model/SelectedSeats';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  constructor() { }
  routeDetails!: RouteDetails;
  busDetails!: BusDetails;
  selectedSeats!: SelectedSeats;
  passengerInfo!: PassengerInfo

  // store route details
  setRouteDetails(routeDetails: RouteDetails) {
    this.routeDetails = routeDetails
  }

  // get route details
  getRouteDetails(): RouteDetails {
    return this.routeDetails
  }

  // set bus details
  setBusDetails(busDetails: BusDetails) {
    this.busDetails = busDetails;
  }
  // get bus details
  getBusDetails(): BusDetails {
    return this.busDetails;
  }

  // set selected seats
  setSelectedSeats(selectedSeats: SelectedSeats) {
    this.selectedSeats = selectedSeats;
  }

  // get selected seats
  getSelectedSeats(): SelectedSeats {
    return this.selectedSeats;
  }

  // set passenger info
  setPassengerInfo(passengerInfo: PassengerInfo) {
    this.passengerInfo = passengerInfo
  }

  // get passenger info
  getPassengerInfo(): PassengerInfo {
    return this.passengerInfo;
  }
}
