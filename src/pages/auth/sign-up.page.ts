import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Authentication } from 'ngkit';
import { TabsPage } from '../../pages/tabs/tabs';

@Component({
  templateUrl: 'sign-up.page.html'
})
export class SignUpPage {

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
    'username': new FormControl(''),
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

  register() {
    this.loading = true;

    this.auth.register(this.form.value).then((res: any) => {
      this.auth.storeToken(res).then(() => {
        this.nav.setRoot(TabsPage, {}, {
          direction: 'forward',
          animate: true
        });

        this.loading = false;
      });
    }, errors => {
      this.errors = Object.keys(errors).map(function(key) { return errors[key]; });

      this.loading = false;
    });
  }


}
