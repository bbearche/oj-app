import { Component } from '@angular/core';
import { Authentication, Event } from 'ngkit';
import { NavController, NavParams, App } from 'ionic-angular';
import { ProfileEditPage } from './profile-edit.page';
import { WelcomePage } from '../auth/welcome.page';
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

  /**
   * The loading state of the component.
   *
   * @type {boolean}
   */
  loading: boolean = false;

  constructor(
    private app: App,
    public nav: NavController,
    public auth: Authentication,
    public event: Event,
    public params: NavParams,
    public userService: UserService
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

  /**
   * Logs out the User
   */
  logout() {
    this.loading = true;

    this.userService.logout().then((res) => {
      this.loading = false;
      this.app.getRootNav().setRoot(WelcomePage, {}, {
        animate: true
      });
    }, (errors) => {
      this.loading = false;
    });
  }
}
