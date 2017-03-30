import { Component } from '@angular/core';
import { Authentication, Event } from 'ngkit';
import { NavController, NavParams } from 'ionic-angular';
import { ProfileEditPage } from './profile-edit.page';
import { UserService } from '../../services/user.service';

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
    public event: Event,
    public params: NavParams
  ) { }

  /**
   * On page initialization.
   *
   * @return {[type]} [description]
   */
  ngOnInit() {
    if (this.params.data.user) {
      this.user = this.params.data.user;
    } else {
      this.user = this.auth.user();
    }

    this.event.listen('update:user').subscribe(() => {
      this.user = this.auth.authUser;
    })
  }

  /**
   * Goes to the edit profile page.
   *
   * @return {[type]} [description]
   */
  goToEdit() {
    this.nav.push(ProfileEditPage);
  }
}
