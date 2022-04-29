import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ng-class',
    templateUrl: './ng-class.component.html',
    styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {
    userName: string;
    password: string;
    loginType: string;

    constructor() {
        this.userName = '';
        this.password = '';
        this.loginType = '';
    }

    ngOnInit(): void {
    }

    changeLoginType(type: string) {
        this.loginType = type;
    }

}
