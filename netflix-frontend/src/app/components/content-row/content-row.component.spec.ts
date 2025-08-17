import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentRowComponent } from './content-row.component';

describe('ContentRowComponent', () => {
  let component: ContentRowComponent;
  let fixture: ComponentFixture<ContentRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentRowComponent]
    });
    fixture = TestBed.createComponent(ContentRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
