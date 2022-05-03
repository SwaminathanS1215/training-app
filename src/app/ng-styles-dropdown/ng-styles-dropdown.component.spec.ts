import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStylesDropdownComponent } from './ng-styles-dropdown.component';

describe('NgStylesDropdownComponent', () => {
  let component: NgStylesDropdownComponent;
  let fixture: ComponentFixture<NgStylesDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgStylesDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgStylesDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
