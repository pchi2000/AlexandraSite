import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alexandra-site';
  isPhone = false;

  constructor(private responsive: BreakpointObserver) { 
    this.responsive.observe([
      Breakpoints.Handset, // You can add more breakpoints as needed
    ]).subscribe(result => {
      if (result.matches) {
        this.isPhone = true;
      }
    });
  }
}
