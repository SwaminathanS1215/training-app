import { RESTService } from './../services/rest.service';
import { Component, OnInit } from '@angular/core';

import {
    faPen,
    faTrash
} from '@fortawesome/free-solid-svg-icons'
import { ActivatedRoute, Router } from '@angular/router';

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
    employeeUserName: any = '';

    // searchData
    searchInput: string;
    filterByLocation!: string;
    filterByDesignation!: string;

    users: Array<userDetails> = []

    // font awesome icons
    icons = {
        edit: faPen,
        delete: faTrash
    };

    constructor(private router: Router, private restService: RESTService, private activatedRoute: ActivatedRoute) {
        this.searchInput = '';

        // existing users
        this.userData = []

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
        this.restService.getAllUsers().subscribe({
            next: (data: userDetails[]) => {
                this.userData = data;
                this.users = data;
                this.filterProductsById();
            },
            error: (err) => {
                alert(err);
            }
        })
        
        this.activatedRoute.paramMap.subscribe(param => {
            this.employeeUserName = param.get('userName');
        })
    }

    filterProductsById() {
        this.userData = this.userData.filter(user => {
            return user.userName === this.employeeUserName;
        })
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
