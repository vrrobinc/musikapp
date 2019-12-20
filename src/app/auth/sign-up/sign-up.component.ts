import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AuthService, Profile } from '../auth.service';
import { ProfileService } from 'src/app/profile/profile.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  user:Profile ={
    email : '',
    name : ''
  };

  constructor(
    private modalCtrl: ModalController, 
    private authSvc: AuthService,
    private profileService: ProfileService) { }

  ngOnInit() { }

  // onSignUp(f: NgForm){
  //   console.log(f.value);
  //   this.authSvc.signup(f.value.email, f.value.pwd).subscribe(resp =>  {
  //     console.log(resp);

  //     this.modalCtrl.dismiss();
  //   });
  // }

  onSignUp(f: NgForm) {
    console.log(f.value);
    this.authSvc.signup(f.value.email, f.value.pwd).subscribe(resp => {
    console.log(resp);
    this.user.email = f.value.email;
    this.user.name = f.value.name;
    this.profileService.addUser(this.user, this.user.email);
    this.modalCtrl.dismiss();
    });
    // this.successToast();
    }
  onCancel() {
    this.modalCtrl.dismiss();
  }
}
