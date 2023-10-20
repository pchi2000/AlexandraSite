import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BooksPageComponent } from './books-page/books-page.component';
import { NavigationTabComponent } from './navigation-tab/navigation-tab.component';
import { PicturesPageComponent } from './pictures-page/pictures-page.component';
import { MemoriesPageComponent } from './memories-page/memories-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BooksPageComponent,
    NavigationTabComponent,
    PicturesPageComponent,
    MemoriesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
