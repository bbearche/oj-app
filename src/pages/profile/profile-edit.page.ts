import { Component } from '@angular/core';
import { Authentication, Event } from 'ngkit';
import { NavController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'profile-edit',
  templateUrl: 'profile-edit.page.html'
})
export class ProfileEditPage {

  /**
   * The user for the page.
   *
   * @type {any}
   */
  user: any;

  /**
   * The form for the component
   *
   * @type {FormGroup}
   */
  form: FormGroup;

  constructor(
    public userService: UserService,
    public nav: NavController,
    public auth: Authentication,
    public event: Event
  ) {

  }

  /**
   * On page initialization.
   *
   * @return {[type]} [description]
   */
  ngOnInit() {
    this.user = this.auth.user();

    this.form = new FormGroup({
      'username': new FormControl(this.user.username),
      'first_name': new FormControl(this.user.first_name),
      'last_name': new FormControl(this.user.last_name),
      'email': new FormControl(this.user.email),
      'city': new FormControl(this.user.city),
      'state': new FormControl(this.user.state)
    });
  }

  /**
   * Updates the user.
   *
   * @return {[type]} [description]
   */
  update() {
    this.userService.update(this.form.value).then(user => {
      this.user = user.data;

      this.auth.authUser = user.data;
      this.event.broadcast('update:user');
      this.nav.pop();
    })
  }
}
