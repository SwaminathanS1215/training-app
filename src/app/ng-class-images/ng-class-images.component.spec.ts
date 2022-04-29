import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassImagesComponent } from './ng-class-images.component';

describe('NgClassImagesComponent', () => {
  let component: NgClassImagesComponent;
  let fixture: ComponentFixture<NgClassImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgClassImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgClassImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
