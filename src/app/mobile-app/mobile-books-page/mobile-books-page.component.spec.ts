import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileBooksPageComponent } from './mobile-books-page.component';

describe('MobileBooksPageComponent', () => {
  let component: MobileBooksPageComponent;
  let fixture: ComponentFixture<MobileBooksPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileBooksPageComponent]
    });
    fixture = TestBed.createComponent(MobileBooksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
