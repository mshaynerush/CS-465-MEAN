import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import  { HttpClient, HttpHeaders } from '@angular/common/http'
import { Trip } from '../models/trip'
import { User } from '../models/user'
import { AuthResponse } from '../models/authresponse';
import { BROWSER_STORAGE } from '../storage';

@Injectable({
  providedIn: 'root'
})
  


export class TripDataService {

  constructor(
    private http1: Http,
    private http: HttpClient,
    @Inject ( BROWSER_STORAGE ) private storage: Storage
  ) { }

  private apiBaseUrl = 'http://localhost:3000/api/';
  private tripUrl = `${this.apiBaseUrl}trips/`;

  

  public addTrip(formData: Trip): Promise<Trip> {
    console.log('Inside TripDataService#AddTrip');
  
    const httpOptions = { 
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.storage.getItem('travlr-token')}`})
    };
    
    return this.http
      .post(this.tripUrl, formData, httpOptions)    // pass form data in request body
      .toPromise()
      .then(response => response as Trip[])
      .catch(this.handleError);
  }

  public getTrip(tripCode: string): Promise<Trip> {
    console.log('Inside TripDataService#getTrip(tripCode)');
    return this.http
      .get(this.tripUrl + tripCode)
      .toPromise()
      .then(response => response as Trip)
      .catch(this.handleError);
  }


  public updateTrip(formData: Trip): Promise<Trip> {
    console.log('Inside TripDataService#UdpateTrip');
    console.log(formData);

    const httpOptions = { 
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.storage.getItem('travlr-token')}`})
    };

    return this.http
      .put(this.tripUrl + formData.code, formData, httpOptions)
      .toPromise()
      .then(response => response as Trip[])
      .catch(this.handleError);
  }

  public deleteTrip(tripCode: string): Promise<Trip>{
    console.log('Inside TripDataService#deleteTrip(tripCode)');

    const httpOptions = { 
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.storage.getItem('travlr-token')}`})
    };

    return this.http
      .delete(this.tripUrl + tripCode, httpOptions)
      .toPromise()
      .then(response => response as Trip)
      .catch(this.handleError);
  }

  public getTrips(): Promise<Trip[]> {
    console.log('Inside TripDataService@getTrips');
    return this.http
      .get(this.tripUrl)
      .toPromise()
      .then(response => response as Trip[])
      .catch(this.handleError);
  }

  public login(user: User): Promise<AuthResponse> {
      return this.makeAuthApiCall('login', user);
  }
  
  public register(user: User): Promise<AuthResponse> {
      return this.makeAuthApiCall('register', user);
  }
  
  private makeAuthApiCall(urlPath: string, user: User):
    Promise<AuthResponse> {
    const url: string = `${this.apiBaseUrl}/${urlPath}`;
    return this.http
      .post(url, user)
      .toPromise()
      .then(response => response as AuthResponse)
      .catch(this.handleError);
    }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong, but I dont know what', error);
    return Promise.reject(error.message || error);
  }
}
