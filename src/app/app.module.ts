import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AboutPage } from '../pages/about/about';
import { BrowserModule } from '@angular/platform-browser';
import { ContactPage } from '../pages/contact/contact';
import { GroceriesServiceProvider } from '../providers/groceries-service/groceries-service';
import { HomePage } from '../pages/home/home';
import { InputDialogServiceProvider } from '../providers/input-dialog-service/input-dialog-service';
import { MyApp } from './app.component';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GroceriesServiceProvider,
    InputDialogServiceProvider
  ]
})
export class AppModule {}
