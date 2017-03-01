import { Component } from '@angular/core';
import { Authentication } from 'ngkit';
import { NavController } from 'ionic-angular';
import { ProfileEditPage } from './profile-edit.page';
@Component({
  selector: 'profile-info',
  templateUrl: 'profile-info.page.html'
})
export class ProfileInfoPage{

  /**
   * The user for the page.
   *
   * @type {any}
   */
  user: any;

  constructor(
    public nav: NavController,
    public auth: Authentication
  ) { }

  /**
   * On page initialization.
   *
   * @return {[type]} [description]
   */
  ngOnInit() {
    this.user = this.auth.user();
  }

  goToEdit() {
    this.nav.push(ProfileEditPage);
  }
}
