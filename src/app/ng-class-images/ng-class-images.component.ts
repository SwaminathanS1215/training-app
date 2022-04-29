import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ng-class-images',
    templateUrl: './ng-class-images.component.html',
    styleUrls: ['./ng-class-images.component.css']
})
export class NgClassImagesComponent implements OnInit {
    imageStyle: string = '';

    constructor() { 
        this.imageStyle = 'img-regular'
    }

    ngOnInit(): void {
    }

}
