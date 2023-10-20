import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePicturesPageComponent } from './mobile-pictures-page.component';

describe('MobilePicturesPageComponent', () => {
  let component: MobilePicturesPageComponent;
  let fixture: ComponentFixture<MobilePicturesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobilePicturesPageComponent]
    });
    fixture = TestBed.createComponent(MobilePicturesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
