import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';
import { TripDataService } from '../services/trip-data.service';

@Component({
  selector: 'app-delete-trip',
  templateUrl: './delete-trip.component.html',
  styleUrls: ['./delete-trip.component.css']
})
  
export class DeleteTripComponent implements OnInit {
  
  constructor(
    private router: Router,
    private tripService: TripDataService
  ) { }

  trip: Trip;
  message: string;
  submitted = false;
  
  ngOnInit() {
    let tripCode = localStorage.getItem("tripCode");
    console.log(tripCode);
    console.log('Inside TripListingComponent#getTrip');
    
    this.tripService.getTrip(tripCode)
      .then(data => {
        console.log(data);
        // don't use editForm.setValue as it will throw console error
        this.trip = data;
      })
    console.log("You have arriaved at the delete-tip page")
    
  }

  private deleteTrip(trip: Trip)
  {
    console.log(trip.code);
    this.tripService.deleteTrip(trip.code)
    this.router.navigate([''])
  }
}
