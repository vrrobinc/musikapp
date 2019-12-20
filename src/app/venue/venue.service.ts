import { Injectable } from '@angular/core';
import { Venue } from './venue.model';

@Injectable({
  providedIn: 'root'
})
export class VenueService {

  private _venue : Venue[]= [
    new Venue(
      'v1',
      'Guitar',
      'https://www.libertyparkmusic.com/wp-content/uploads/Powerful-Reasons-Learning-Guitar.jpg',
      'Learn how to play Guitar'
    ),
  ];

  get venue(){
    return[...this._venue];
  }
  constructor() { }
}
