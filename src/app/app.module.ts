import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ProfilePage } from '../pages/profile/profile';
import { ReviewPage } from '../pages/profile/review.page';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage } from '../pages/auth/welcome.page';
import { AppServices } from '../services';
import { ngKitModule } from 'ngkit';
import { ngkitConfig } from '../config';
import { SignUpPage } from '../pages/auth/sign-up.page';
import { LoginPage } from '../pages/auth/login.page';
import { ProfileInfoPage} from '../pages/profile/profile-info.page';
import { ProfileEditPage} from '../pages/profile/profile-edit.page';
import { Storage } from '@ionic/storage';

import { AppComponentsModule } from '../components/index';

@NgModule({
  declarations: [
    MyApp,
    ProfilePage,
    ContactPage,
    HomePage,
    TabsPage,
    WelcomePage,
    SignUpPage,
    LoginPage,
    ProfileInfoPage,
    ProfileEditPage,
    ReviewPage
  ],
  imports: [
    AppComponentsModule,
    IonicModule.forRoot(MyApp),
    ngKitModule.forRoot(ngkitConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProfilePage,
    ContactPage,
    HomePage,
    TabsPage,
    WelcomePage,
    SignUpPage,
    LoginPage,
    ProfileInfoPage,
    ProfileEditPage,
    ReviewPage
  ],
  providers: [
    ...AppServices,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Storage
  ]
})
export class AppModule { }
