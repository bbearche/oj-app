import { Component } from '@angular/core';
import { Authentication } from 'ngkit';
import { NavController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../services/user.service';

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

/**
 * The form for the component
 *
 * @type {FormGroup}
 */
  form: FormGroup;

  constructor(
    public userService: UserService,
    public nav: NavController,
    public auth: Authentication
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
      'username' : new FormControl(this.user.username),
      'first_name' : new FormControl(this.user.first_name),
      'last_name' : new FormControl(this.user.last_name),
      'email' : new FormControl(this.user.email),
      'city' : new FormControl(this.user.city),
      'state' : new FormControl(this.user.state)
    });
  }

update(){
  let data = Object.assign(this.user, this.form.value);

  this.userService.update(data, this.user.id).then(user => {
    console.log(user);

  })
}
}
