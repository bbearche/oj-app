import { Component } from '@angular/core';
import { ProfileInfoPage } from './profile-info.page';
import { NavController } from 'ionic-angular';
import { Authentication } from 'ngkit';

@Component({
  selector: 'profile-page',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  /**
   * The user for the page.
   *
   * @type {any}
   */
  user: any;

  /**
   * The constructor for the class.
   *
   * @param  {NavController}  nav
   * @param  {Authentication} auth
   */
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
    console.log(this.user);
  }

  /**
   * Navigates to the profile info page.
   */
  goToInfo() {
    this.nav.push(ProfileInfoPage);
  }
}
