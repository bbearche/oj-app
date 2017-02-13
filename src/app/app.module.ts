import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage } from '../pages/auth/welcome.page';
import { AppServices } from '../services';
import { ngKitModule } from 'ngkit';
import { ngkitConfig } from '../config';
import { SignUpPage } from '../pages/auth/sign-up.page';
import { LoginPage } from '../pages/auth/login.page';

import { AppComponentsModule } from '../components/index';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WelcomePage,
    SignUpPage,
    LoginPage
  ],
  imports: [
    AppComponentsModule,
    IonicModule.forRoot(MyApp),
    ngKitModule.forRoot(ngkitConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WelcomePage,
    SignUpPage,
    LoginPage
  ],
  providers: [...AppServices, { provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
