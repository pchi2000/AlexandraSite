import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-home-page',
  templateUrl: './mobile-home-page.component.html',
  styleUrls: ['./mobile-home-page.component.css']
})
export class MobileHomePageComponent {
  imageUrl = 'assets/home-background.jpg'; 
  textContent = 'Your dynamic text goes here.';
}
