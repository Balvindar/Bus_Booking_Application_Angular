import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BusService } from '../bus.service';
import { SeatDetails } from '../Model/SeatDetails';
import { SelectedSeats } from '../Model/SelectedSeats';

@Component({
  selector: 'app-seat-selection',
  templateUrl: './seat-selection.component.html',
  styleUrls: ['./seat-selection.component.css']
})
export class SeatSelectionComponent {
  busSeats = [
    [
      {
        seatNumber: 1,
        booked: false,
        selected: false,
        price: 15
      },
      {
        seatNumber: 2,
        booked: true,
        selected: false,
        price: 15
      },
      {
        seatNumber: '',
        aisle: true
      },
      {
        seatNumber: 3,
        booked: false,
        selected: false,
        price: 15
      },
      {
        seatNumber: 4,
        booked: false,
        selected: false,
        price: 15
      }
    ],
    [
      {
        seatNumber: 5,
        booked: false,
        selected: false,
        price: 15
      },
      {
        seatNumber: 6,
        booked: true,
        selected: false,
        price: 15
      },
      {
        seatNumber: '',
        aisle: true
      },
      {
        seatNumber: 7,
        booked: false,
        selected: false,
        price: 15
      },
      {
        seatNumber: 8,
        booked: false,
        selected: false,
        price: 15
      }
    ],
    [{ seatNumber: 9, booked: false, selected: false, price: 15 }, { seatNumber: 10, booked: false, selected: false, price: 15 }, { seatNumber: '', aisle: true }, { seatNumber: 11, booked: false, selected: false, price: 15 }, { seatNumber: 12, booked: true, selected: false, price: 15 }],
    [{ seatNumber: 13, booked: false, selected: false, price: 15 }, { seatNumber: 14, booked: true, selected: false, price: 15 }, { seatNumber: '', aisle: true }, { seatNumber: 15, booked: false, selected: false, price: 15 }, { seatNumber: 16, booked: false, selected: false, price: 15 }],
    [{ seatNumber: 17, booked: false, selected: false, price: 15 }, { seatNumber: 18, booked: false, selected: false, price: 15 }, { seatNumber: '', aisle: true }, { seatNumber: 19, booked: true, selected: false, price: 15 }, { seatNumber: 20, booked: false, selected: false, price: 15 }]
  ];


  selectedSeat: SelectedSeats = {
    seatDetails: [],
    fare: 0
  }
  selectedSeats: SeatDetails[] = [];
  totalPrice: number = 0;

  constructor(private router: Router, private busService: BusService) { }

  selectSeat(seat: any) {
    if (seat.booked || seat.aisle) return;

    seat.selected = !seat.selected;

    if (seat.selected) {
      this.selectedSeats.push(seat);
    } else {
      this.selectedSeats = this.selectedSeats.filter(s => s.seatNumber !== seat.seatNumber);
    }

    this.totalPrice = this.selectedSeats.reduce((sum, s) => sum + (s.price ?? 0), 0);
  }

  proceedToPassengerDetails() {

    this.selectedSeat.seatDetails?.push(...this.selectedSeats);
    this.selectedSeat.fare = this.totalPrice;
    this.busService.setSelectedSeats(this.selectedSeat);
    this.router.navigate(['/passenger_info']);


  }
}
