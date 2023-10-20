import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebHomePageComponent } from './web-home-page.component';

describe('WebHomePageComponent', () => {
  let component: WebHomePageComponent;
  let fixture: ComponentFixture<WebHomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebHomePageComponent]
    });
    fixture = TestBed.createComponent(WebHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
