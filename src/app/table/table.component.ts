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
    styleUrls: ['./table.component.css'],
    styles: [
        `.modal{background: rgba(0,0,0, .5);}`
    ]
})
export class TableComponent implements OnInit {

    userData: Array<userDetails>;
    modalDisplay = "none";
    modalData: userDetails;
    updateIndex = 0;

    // searchData
    searchInput: string;

    users: Array<userDetails> = [
        { userName: 'swaminathan', password: 'Swami7798', email: 'swami7798@gmail.com', name: 'Swaminathan' },
        { userName: 'rahul', password: 'Rahul7798', email: 'rahul7798@gmail.com', name: 'Rahul' },
        { userName: 'prasanth', password: 'Prasanth7798', email: 'prasanth798@gmail.com', name: 'Prasanth' },
        { userName: 'mukesh', password: 'Mukesh7798', email: 'mukesh7798@gmail.com', name: 'Mukesh' },
        { userName: 'ravi', password: 'Ravi7798', email: 'ravi7798@gmail.com', name: 'Ravi' },
        { userName: 'ramesh', password: 'Ramesh7798', email: 'ramesh7798@gmail.com', name: 'Ramesh' },
        { userName: 'dinesh', password: 'Dinesh7798', email: 'dinesh7798@gmail.com', name: 'Dinesh' }
    ]

    // font awesome icons
    icons = {
        edit: faPen,
        delete: faTrash
    };

    constructor() {
        this.searchInput = '';

        // existing users
        this.userData = [
            { userName: 'swaminathan', password: 'Swami7798', email: 'swami7798@gmail.com', name: 'Swaminathan' },
            { userName: 'rahul', password: 'Rahul7798', email: 'rahul7798@gmail.com', name: 'Rahul' },
            { userName: 'prasanth', password: 'Prasanth7798', email: 'prasanth798@gmail.com', name: 'Prasanth' },
            { userName: 'mukesh', password: 'Mukesh7798', email: 'mukesh7798@gmail.com', name: 'Mukesh' },
            { userName: 'ravi', password: 'Ravi7798', email: 'ravi7798@gmail.com', name: 'Ravi' },
            { userName: 'ramesh', password: 'Ramesh7798', email: 'ramesh7798@gmail.com', name: 'Ramesh' },
            { userName: 'dinesh', password: 'Dinesh7798', email: 'dinesh7798@gmail.com', name: 'Dinesh' }
        ]

        this.modalData = {
            email: '',
            name: '',
            userName: '',
            password: ''
        }
    }

    ngOnInit(): void {
    }

    resetModalData() {
        this.modalData = {
            email: '',
            name: '',
            userName: '',
            password: ''
        }
    }

    openModal(user: userDetails, index: number) {
        this.modalDisplay = "block";
        this.updateIndex = index;

        // set modal data for updation
        this.modalData.userName = user.userName;
        this.modalData.password = user.password;
        this.modalData.email = user.email;
        this.modalData.name = user.name;
    }

    onCloseHandled() {
        this.modalDisplay = "none";
        this.userData.splice(this.updateIndex, 1, this.modalData);
        // Reset Modal Data once updated
        this.resetModalData();
    }

    deleteUser(index: number) {
        this.userData.splice(index, 1);
        this.users.splice(index, 1);
    }

}
