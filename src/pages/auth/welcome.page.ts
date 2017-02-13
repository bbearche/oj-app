import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  templateUrl: 'welcome.page.html'
})
export class WelcomePage {
  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
    let data = {
      "username": "bbearchell",
      "email": "brock@spacestud.io",
      "password": "abc123"
    };
    this.authService.register(data).then((res) => {
      console.log(res);
    }, (error) => console.log(error));
  }
}