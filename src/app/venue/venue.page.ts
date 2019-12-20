import { Component, OnInit } from '@angular/core';
import { Venue } from './venue.model';
import { VenueService } from './venue.service';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-venue',
  templateUrl: './venue.page.html',
  styleUrls: ['./venue.page.scss'],
})
export class VenuePage implements OnInit {
  loadedVenue: Venue[];
  nav: any;

  constructor(
    private venueService: VenueService, 
    public alertController: AlertController,
    private loadingController: LoadingController) { }

  ngOnInit() {
    this.loadedVenue = this.venueService.venue;
  }

  async onClick() {
    const loading = await this.loadingController.create({
      message: "we are preparing the best material for you,so please wait for a second",
      duration: 2650
    });

    await loading.present();

    const {role,data} = await loading.onDidDismiss();
    console.log('Loading Done');
  }
}
