import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebHomePageComponent } from './web-app/web-home-page/web-home-page.component';
import { WebBooksPageComponent } from './web-app/web-books-page/web-books-page.component';
import { WebPicturesPageComponent } from './web-app/web-pictures-page/web-pictures-page.component';
import { WebMemoriesPageComponent } from './web-app/web-memories-page/web-memories-page.component';
import { MobileHomePageComponent } from './mobile-app/mobile-home-page/mobile-home-page.component';
import { MobileBooksPageComponent } from './mobile-app/mobile-books-page/mobile-books-page.component';
import { MobilePicturesPageComponent } from './mobile-app/mobile-pictures-page/mobile-pictures-page.component';
import { MobileMemoriesPageComponent } from './mobile-app/mobile-memories-page/mobile-memories-page.component';

const routes: Routes = [
  { path: '', component: WebHomePageComponent }, // Default route
  { path: 'home', component: WebHomePageComponent },
  { path: 'books', component: WebBooksPageComponent },
  { path: 'pictures', component: WebPicturesPageComponent },
  { path: 'memories', component: WebMemoriesPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
