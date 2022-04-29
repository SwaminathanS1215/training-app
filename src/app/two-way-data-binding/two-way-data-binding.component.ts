import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-two-way-data-binding',
    templateUrl: './two-way-data-binding.component.html',
    styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {

    userName: string;
    password: string;
    isLoggedIn: boolean = false;

    constructor() {
        this.userName = '';
        this.password = '';
    }

    ngOnInit(): void {
    }

    doLogin() {
        this.isLoggedIn = true;
    }

}
