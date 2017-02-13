import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { SignUpPage } from './sign-up.page';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'welcome.page.html'
})
export class WelcomePage {
  constructor(
    public authService: AuthService,
    public nav: NavController
  ) { }

  ngOnInit() {

  }

  goToSignUp() {
    this.nav.push(SignUpPage);
  }
}
