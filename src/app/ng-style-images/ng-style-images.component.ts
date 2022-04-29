import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ng-style-images',
    templateUrl: './ng-style-images.component.html',
    styleUrls: ['./ng-style-images.component.css']
})
export class NgStyleImagesComponent implements OnInit {
    imageStyle: string = '';

    constructor() { 
        this.imageStyle = 'img-regular'
    }

    ngOnInit(): void {
    }

}
