import { Component } from '@angular/core';
import { ProfileInfoPage } from './profile-info.page';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'profile-page',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(
    public nav: NavController
  ) { }

  goToInfo() {
    this.nav.push(ProfileInfoPage);
  }
}
