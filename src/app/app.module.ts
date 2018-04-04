import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AppointmentPage } from '../pages/appointment/appointment';
import { StylistsPage } from "../pages/stylists/stylists"
import { StylistPage } from "../pages/stylists/stylist/stylist";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AppointmentPage,
    StylistsPage,
    StylistPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AppointmentPage,
    StylistsPage,
    StylistPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
