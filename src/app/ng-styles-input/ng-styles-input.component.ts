import { Component, OnInit } from '@angular/core';

export interface styleInput {
    flexDirection: string;
    alignItems: string;
    justifyContent: string;
    flexWrap: string;
    border: string;
    borderRadius: string;
}

@Component({
    selector: 'app-ng-styles-input',
    templateUrl: './ng-styles-input.component.html',
    styleUrls: ['./ng-styles-input.component.css']
})

export class NgStylesInputComponent implements OnInit, styleInput {
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
