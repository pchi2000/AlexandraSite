import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebHomePageComponent } from './web-app/web-home-page/web-home-page.component';
import { WebBooksPageComponent } from './web-app/web-books-page/web-books-page.component';
import { WebPicturesPageComponent } from './web-app/web-pictures-page/web-pictures-page.component';
import { WebMemoriesPageComponent } from './web-app/web-memories-page/web-memories-page.component';
import { WebNavigationTabComponent } from './web-app/web-navigation-tab/web-navigation-tab.component';
import { MobileHomePageComponent } from './mobile-app/mobile-home-page/mobile-home-page.component';
import { MobileBooksPageComponent } from './mobile-app/mobile-books-page/mobile-books-page.component';
import { MobilePicturesPageComponent } from './mobile-app/mobile-pictures-page/mobile-pictures-page.component';
import { MobileMemoriesPageComponent } from './mobile-app/mobile-memories-page/mobile-memories-page.component';
import { MobileNavigationTabComponent } from './mobile-app/mobile-navigation-tab/mobile-navigation-tab.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    WebHomePageComponent,
    WebBooksPageComponent,
    WebPicturesPageComponent,
    WebMemoriesPageComponent,
    WebNavigationTabComponent,
    MobileHomePageComponent,
    MobileBooksPageComponent,
    MobilePicturesPageComponent,
    MobileMemoriesPageComponent,
    MobileNavigationTabComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule, 
    MatIconModule, 
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
