import { Component, OnInit } from '@angular/core';

import { styleInput } from '../ng-styles-input/ng-styles-input.component';

@Component({
    selector: 'app-ng-styles-dropdown',
    templateUrl: './ng-styles-dropdown.component.html',
    styleUrls: ['./ng-styles-dropdown.component.css']
})
export class NgStylesDropdownComponent implements OnInit, styleInput {
    flexDirection: string;
    alignItems: string;
    justifyContent: string;
    flexWrap: string;
    border: string;
    borderRadius: string;

    constructor() {
        this.flexDirection = 'row';
        this.alignItems = 'start';
        this.justifyContent = 'flex-start';
        this.flexWrap = 'wrap';
        this.border = '2px solid gray';
        this.borderRadius = '0.5rem';
    }

    ngOnInit(): void {
    }

}
