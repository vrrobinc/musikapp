import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { AuthService, Profile } from '../auth/auth.service';
import { ProfileService } from './profile.service';
import { LoadingController, ToastController, NavController, AlertController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  email: string;

  user: Profile = {
    email: this.authSvc.getUserEmail(),
    name: '',

  }



  constructor(
    private authSvc: AuthService,
    private alertController: AlertController,
    private profileService: ProfileService,
    private loadingController: LoadingController,
    private navController: NavController,
    private toastController: ToastController,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.loadUser();
  }

  async loadUser() {
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();

    this.email = this.authSvc.getUserEmail();
    console.log("email : " + this.email);

    this.profileService.getUser(this.email).subscribe(res => {
      loading.dismiss();
      this.user = res;
    });

    console.log(this.user);
  }

  

}
