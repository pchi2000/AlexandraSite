import { Component } from '@angular/core';

@Component({
  selector: 'app-web-home-page',
  templateUrl: './web-home-page.component.html',
  styleUrls: ['./web-home-page.component.css']
})

export class WebHomePageComponent {
  imageUrl = 'assets/home-background.jpg'; 
  textContent = 'Your dynamic text goes here.';
}
