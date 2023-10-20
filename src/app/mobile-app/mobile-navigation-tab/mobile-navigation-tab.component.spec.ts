import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileNavigationTabComponent } from './mobile-navigation-tab.component';

describe('MobileNavigationTabComponent', () => {
  let component: MobileNavigationTabComponent;
  let fixture: ComponentFixture<MobileNavigationTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileNavigationTabComponent]
    });
    fixture = TestBed.createComponent(MobileNavigationTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
