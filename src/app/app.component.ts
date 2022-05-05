import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'training-app';

    currencyData: number = 10000;
    regularDate: Date = new Date();
    shortDate: Date = new Date();
    strSlice: string = 'Angular Slice';

    strToUpperCase!: string;

    changeInHour = false;
    changeInMin = false;

    hour = new Observable <string>((observer: Observer<string>) => {
        setInterval(() => {
            observer.next(new Date().getHours().toString());
        },1000)
    })

    minutes = new Observable <string>((observer: Observer<string>) => {
        setInterval(() => {
            observer.next(new Date().getMinutes().toString());
        },1000)
    })

    seconds = new Observable <string>((observer: Observer<string>) => {
        setInterval(() => {
            observer.next(new Date().getSeconds().toString());
        },1000)
    })

    constructor() {
    }

}
