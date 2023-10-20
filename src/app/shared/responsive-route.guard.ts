import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root',
})
export class responsiveRouteGuard implements CanActivate {
  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.breakpointObserver.isMatched(Breakpoints.Web) || this.breakpointObserver.isMatched(Breakpoints.Tablet)) {
      this.router.navigate(['home-web']);
    } else {
      this.router.navigate(['home-mobile']);
    }
    return true;
  }
}
