import { Component, OnInit } from '@angular/core';

import { 
    faPen,
    faTrash
} from '@fortawesome/free-solid-svg-icons'

export interface userDetails {
    userName: string;
    password: string;
    email: string;
    name: string;
}

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

    userData: Array<userDetails>;

    // font awesome icons
    icons = {
        edit: faPen,
        delete: faTrash
    };

    constructor() {
        // existing users
        this.userData = [
            { userName: 'swaminathan', password: 'Swami7798', email: 'swami7798@gmail.com', name: 'Swaminathan' },
            { userName: 'rahul', password: 'Rahul7798', email: 'rahul7798@gmail.com', name: 'Rahul' },
            { userName: 'prasanth', password: 'Prasanth7798', email: 'prasanth798@gmail.com', name: 'Prasanth' },
            { userName: 'mukesh', password: 'Mukesh7798', email: 'mukesh7798@gmail.com', name: 'Mukesh' },
            { userName: 'ravi', password: 'Ravi7798', email: 'ravi7798@gmail.com', name: 'Ravi' },
            { userName: 'dinesh', password: 'Dinesh7798', email: 'dinesh7798@gmail.com', name: 'Dinesh' },
            { userName: 'barath', password: 'Barath7798', email: 'barath7798@gmail.com', name: 'Barath' },
        ]
    }

    ngOnInit(): void {
    }

}
