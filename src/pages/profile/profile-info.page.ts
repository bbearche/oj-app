import { Component } from '@angular/core';
import { Authentication, Event } from 'ngkit';
import { NavController } from 'ionic-angular';
import { ProfileEditPage } from './profile-edit.page';
@Component({
  selector: 'profile-info',
  templateUrl: 'profile-info.page.html'
})
export class ProfileInfoPage {

  /**
   * The user for the page.
   *
   * @type {any}
   */
  user: any;

  constructor(
    public nav: NavController,
    public auth: Authentication,
    public event: Event
  ) { }

  /**
   * On page initialization.
   *
   * @return {[type]} [description]
   */
  ngOnInit() {
    this.user = this.auth.user();

    this.event.listen('update:user').subscribe(() => {
      this.user = this.auth.authUser;
    })
  }

  goToEdit() {
    this.nav.push(ProfileEditPage);
  }
}
