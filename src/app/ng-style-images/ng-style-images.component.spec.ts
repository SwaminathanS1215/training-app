import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStyleImagesComponent } from './ng-style-images.component';

describe('NgStyleImagesComponent', () => {
  let component: NgStyleImagesComponent;
  let fixture: ComponentFixture<NgStyleImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgStyleImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgStyleImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
