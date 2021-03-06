import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { HighlightDirective } from './highlight.directive';
import { RainbowDirectiveDirective } from './rainbow-directive.directive';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { CustomStructuralDirectiveDirective } from './custom-structural-directive.directive';
import { StringUpperCasePipe } from './pipes/string-upper-case.pipe';
import { TableFilterPipe } from './pipes/table-filter.pipe';
import { TablePipe } from './pipes/table.pipe';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieComponent } from './movie/movie.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { MoviePipe } from './pipes/movie.pipe';
import { RoutingComponent } from './routing/routing.component';

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
    HighlightDirective,
    RainbowDirectiveDirective,
    NgSwitchComponent,
    CustomStructuralDirectiveDirective,
    StringUpperCasePipe,
    TableFilterPipe,
    TablePipe,
    ProductsComponent,
    MovieComponent,
    ReactiveFormsComponent,
    MoviePipe,
    RoutingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule ,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
