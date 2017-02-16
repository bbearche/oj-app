import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Authentication } from 'ngkit';
import { TabsPage } from '../../pages/tabs/tabs';

@Component({
  templateUrl: 'login.page.html'
})
export class LoginPage {

  /**
   * Loading state of the component.
   * @type {boolean}
   */
  loading: boolean = false;

  /**
   * The error message.
   *
   * @type {string}
   */
  errors: any[] = [];

  /**
     * The form of the component.
     *
     * @type {FormGroup}
     */
  form: FormGroup = new FormGroup({
    'email': new FormControl(''),
    'password': new FormControl('')
  });

  constructor(
    public authService: AuthService,
    public nav: NavController,
    public auth: Authentication
  ) { }

  ngOnInit() {

  }

  /**
   * Registers the User
   * @return {[type]} [description]
   */
  login() {
    this.loading = true;

    this.auth.login(this.form.value).then((res) => {
      this.loading = false;

      this.nav.setRoot(TabsPage, {}, {
        direction: 'forward',
        animate: true
      });
    }, (errors) => {
      this.loading = false;
      this.errors = errors;
    });
  }


}
