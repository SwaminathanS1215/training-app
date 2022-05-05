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
    designation: string;
    location: string;
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
    filterByOptions: string = '';

    // searchData
    searchInput: string;
    filterByLocation!: string;
    filterByDesignation!: string;

    users: Array<userDetails> = [
        { userName: 'WT1215', password: 'Swami7798', email: 'swami7798@gmail.com', name: 'Swaminathan', designation: 'Associate Software Engineer', location: 'Bengaluru' },
        { userName: 'WT1216', password: 'Rahul7798', email: 'rahul7798@gmail.com', name: 'Rahul', designation: 'Associate Software Engineer', location: 'Bengaluru' },
        { userName: 'WT1217', password: 'Prasanth7798', email: 'prasanth798@gmail.com', name: 'Prasanth', designation: 'Senior Software Engineer', location: 'Mumbai' },
        { userName: 'WT1218', password: 'Mukesh7798', email: 'mukesh7798@gmail.com', name: 'Mukesh', designation: 'Senior Software Engineer', location: 'Mumbai' },
        { userName: 'WT1219', password: 'Ravi7798', email: 'ravi7798@gmail.com', name: 'Ravi', designation: 'Technical Lead', location: 'Bengaluru' },
        { userName: 'WT1220', password: 'Ramesh7798', email: 'ramesh7798@gmail.com', name: 'Ramesh', designation: 'Manager', location: 'Bengaluru' },
        { userName: 'WT1221', password: 'Dinesh7798', email: 'dinesh7798@gmail.com', name: 'Dinesh', designation: 'Technical Lead', location: 'Mumbai' }
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
            { userName: 'WT1215', password: 'Swami7798', email: 'swami7798@gmail.com', name: 'Swaminathan', designation: 'Associate Software Engineer', location: 'Bengaluru' },
            { userName: 'WT1216', password: 'Rahul7798', email: 'rahul7798@gmail.com', name: 'Rahul', designation: 'Associate Software Engineer', location: 'Bengaluru' },
            { userName: 'WT1217', password: 'Prasanth7798', email: 'prasanth798@gmail.com', name: 'Prasanth', designation: 'Senior Software Engineer', location: 'Mumbai' },
            { userName: 'WT1218', password: 'Mukesh7798', email: 'mukesh7798@gmail.com', name: 'Mukesh', designation: 'Senior Software Engineer', location: 'Mumbai' },
            { userName: 'WT1219', password: 'Ravi7798', email: 'ravi7798@gmail.com', name: 'Ravi', designation: 'Technical Lead', location: 'Bengaluru' },
            { userName: 'WT1220', password: 'Ramesh7798', email: 'ramesh7798@gmail.com', name: 'Ramesh', designation: 'Manager', location: 'Bengaluru' },
            { userName: 'WT1221', password: 'Dinesh7798', email: 'dinesh7798@gmail.com', name: 'Dinesh', designation: 'Technical Lead', location: 'Mumbai' }
        ]

        this.modalData = {
            email: '',
            name: '',
            userName: '',
            password: '',
            designation: '',
            location: ''
        }
    }

    ngOnInit(): void {
    }

    resetModalData() {
        this.modalData = {
            email: '',
            name: '',
            userName: '',
            password: '',
            designation: '',
            location: ''
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
        this.modalData.designation = user.designation;
        this.modalData.location = user.location
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
