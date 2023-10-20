import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebBooksPageComponent } from './web-books-page.component';

describe('WebBooksPageComponent', () => {
  let component: WebBooksPageComponent;
  let fixture: ComponentFixture<WebBooksPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebBooksPageComponent]
    });
    fixture = TestBed.createComponent(WebBooksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
