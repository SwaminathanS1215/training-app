import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStylesInputComponent } from './ng-styles-input.component';

describe('NgStylesInputComponent', () => {
  let component: NgStylesInputComponent;
  let fixture: ComponentFixture<NgStylesInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgStylesInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgStylesInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
