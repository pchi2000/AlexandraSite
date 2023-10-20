import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebPicturesPageComponent } from './web-pictures-page.component';

describe('WebPicturesPageComponent', () => {
  let component: WebPicturesPageComponent;
  let fixture: ComponentFixture<WebPicturesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebPicturesPageComponent]
    });
    fixture = TestBed.createComponent(WebPicturesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
