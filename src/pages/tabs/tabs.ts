import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Authentication } from 'ngkit';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;

  loggedIn = false;
  constructor(
    public nav: NavController,
    public auth: Authentication
  ) { }

  ngOnInit() {

  }

}
