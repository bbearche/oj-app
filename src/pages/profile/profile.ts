import { Component } from '@angular/core';
import { ProfileInfoPage } from './profile-info.page';
import { NavController, NavParams } from 'ionic-angular';
import { Authentication } from 'ngkit';
import { UserService } from '../../services/user.service';

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
    public auth: Authentication,
    public params: NavParams,
    public userService: UserService
  ) { }

  /**
   * On page initialization.
   *
   * @return {[type]} [description]
   */
  ngOnInit() {
    if (this.params.data.id) {
      this.userService.getUser(this.params.data.id).then((res) => {
        this.user = res.data;
      })
    } else {
      this.user = this.auth.user();
    }
  }

  /**
   * Navigates to the profile info page.
   */
  goToInfo(user: number) {
    this.nav.push(ProfileInfoPage, { user: user });
  }
}
