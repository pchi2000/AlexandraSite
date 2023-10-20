import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMemoriesPageComponent } from './mobile-memories-page.component';

describe('MobileMemoriesPageComponent', () => {
  let component: MobileMemoriesPageComponent;
  let fixture: ComponentFixture<MobileMemoriesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileMemoriesPageComponent]
    });
    fixture = TestBed.createComponent(MobileMemoriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
