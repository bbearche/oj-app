import { Component } from '@angular/core';
import { Authentication } from 'ngkit';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'profile-edit',
  templateUrl: 'profile-edit.page.html'
})
export class ProfileEditPage{

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

}
