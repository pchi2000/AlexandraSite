import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebNavigationTabComponent } from './web-navigation-tab.component';

describe('WebNavigationTabComponent', () => {
  let component: WebNavigationTabComponent;
  let fixture: ComponentFixture<WebNavigationTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebNavigationTabComponent]
    });
    fixture = TestBed.createComponent(WebNavigationTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
