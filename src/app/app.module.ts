import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneWayDataBindingComponent } from './one-way-data-binding/one-way-data-binding.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { LoginValidationComponent } from './login-validation/login-validation.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { RegisterValidationComponent } from './register-validation/register-validation.component';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { NgClassImagesComponent } from './ng-class-images/ng-class-images.component';
import { NgStylesInputComponent } from './ng-styles-input/ng-styles-input.component';
import { NgStylesDropdownComponent } from './ng-styles-dropdown/ng-styles-dropdown.component';
import { TableComponent } from './table/table.component';
import { LoginRegisterSwitchComponent } from './login-register-switch/login-register-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    OneWayDataBindingComponent,
    TwoWayDataBindingComponent,
    LoginValidationComponent,
    NgClassComponent,
    RegisterValidationComponent,
    ParentChildComponent,
    NgClassImagesComponent,
    NgStylesInputComponent,
    NgStylesDropdownComponent,
    TableComponent,
    LoginRegisterSwitchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
