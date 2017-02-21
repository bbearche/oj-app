import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { ngKit } from 'ngkit';
import { TabsPage } from '../pages/tabs/tabs';
import { Authentication } from 'ngkit';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../pages/auth/login.page'
import { WelcomePage } from '../pages/auth/welcome.page'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  /**
   * Root page for app.
   */
  rootPage: any = null;

  constructor(
    public platform: Platform,
    public ngkit: ngKit,
    private storage: Storage,
    public auth: Authentication
  ) {
    this.getRootPage().then(rootPage => this.rootPage = rootPage);

    platform.ready().then(() => StatusBar.styleLightContent());
  }

  /**
     * Get the root page on app init.
     *
     * @return object
     */
  getRootPage() {
    return new Promise((resolve, reject) => {
      this.auth.check().then(logged_in => {
        let rootPage = TabsPage

        resolve(rootPage);
      }, error => {
        this.storage.get('login_details').then(login_details => {
          if (login_details) {
            resolve(LoginPage);
          }

          resolve(WelcomePage);
        });
      });
    });
  }
}
