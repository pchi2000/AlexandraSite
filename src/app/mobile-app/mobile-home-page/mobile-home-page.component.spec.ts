import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileHomePageComponent } from './mobile-home-page.component';

describe('MobileHomePageComponent', () => {
  let component: MobileHomePageComponent;
  let fixture: ComponentFixture<MobileHomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileHomePageComponent]
    });
    fixture = TestBed.createComponent(MobileHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
