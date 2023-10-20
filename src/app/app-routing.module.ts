import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { WebHomePageComponent } from './web-app/web-home-page/web-home-page.component';
import { WebBooksPageComponent } from './web-app/web-books-page/web-books-page.component';
import { WebPicturesPageComponent } from './web-app/web-pictures-page/web-pictures-page.component';
import { WebMemoriesPageComponent } from './web-app/web-memories-page/web-memories-page.component';
import { MobileHomePageComponent } from './mobile-app/mobile-home-page/mobile-home-page.component';
import { MobileBooksPageComponent } from './mobile-app/mobile-books-page/mobile-books-page.component';
import { MobilePicturesPageComponent } from './mobile-app/mobile-pictures-page/mobile-pictures-page.component';
import { MobileMemoriesPageComponent } from './mobile-app/mobile-memories-page/mobile-memories-page.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

const webRoutes: Routes = [
  { path: '', component: WebHomePageComponent }, // Default route
  { path: 'home', component: WebHomePageComponent },
  { path: 'books', component: WebBooksPageComponent },
  { path: 'pictures', component: WebPicturesPageComponent },
  { path: 'memories', component: WebMemoriesPageComponent },
];

const mobileRoutes: Routes = [
  { path: '', component: MobileHomePageComponent }, // Default route
  { path: 'home', component: MobileHomePageComponent },
  { path: 'books', component: MobileBooksPageComponent },
  { path: 'pictures', component: MobilePicturesPageComponent },
  { path: 'memories', component: MobileMemoriesPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot([])],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(
    private responsive: BreakpointObserver, 
    private router: Router) {
    this.configureRoutesBasedOnBreakpoint();
  }

  private configureRoutesBasedOnBreakpoint() {
    this.responsive.observe([
      Breakpoints.Handset, // You can add more breakpoints as needed
    ]).subscribe(result => {
      if (result.matches) {
        console.log('Using Mobile Routes')
        this.updateRoutes(mobileRoutes);
      } else {
        console.log('Using Web Routes')
        this.updateRoutes(webRoutes);
      }
    });
  }

  private updateRoutes(routes: Routes) {
    this.router.resetConfig(routes);
  }
}
