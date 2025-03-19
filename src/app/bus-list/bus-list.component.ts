import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BusService } from '../sevices/bus.service';
import { BusDetails } from '../Model/BusDetails';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent {

  busList: BusDetails[] = [
    {
      busName: 'Express Line',
      type: 'AC Sleeper',
      departure: '10:00 AM',
      duration: '5h 30m',
      fare: '$30',
      availableSeats: 12
    },
    {
      busName: 'City Connect',
      type: 'Non-AC Seater',
      departure: '11:30 AM',
      duration: '4h 45m',
      fare: '$20',
      availableSeats: 8
    }
  ];

  constructor(private router: Router, private busService: BusService) { }

  onSelectBus(bus: BusDetails) {
    this.busService.setBusDetails(bus);
    this.router.navigate(['/seat_selection']);
  }

}
