import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { HomePage } from '../home/home';

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
    public nav: NavController
  ) { }

  ngOnInit() {

  }

  register() {
    this.loading = true;

    this.authService.register(this.form.value).then((res) => {
      this.loading = false;
      this.nav.push(HomePage);
    }, (errors) => {
      this.loading = false;
      this.errors = Object.keys(errors).map(function(key) { return errors[key]; });
    });
  }


}
