import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebMemoriesPageComponent } from './web-memories-page.component';

describe('WebMemoriesPageComponent', () => {
  let component: WebMemoriesPageComponent;
  let fixture: ComponentFixture<WebMemoriesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebMemoriesPageComponent]
    });
    fixture = TestBed.createComponent(WebMemoriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
