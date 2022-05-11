import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { validatePassword } from './validate-password';

@Component({
    selector: 'app-reactive-forms',
    templateUrl: './reactive-forms.component.html',
    styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
    // class attributes
    userForm = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(5)]),
        password: new FormControl('', [Validators.required, validatePassword])
    })

    constructor() { }

    ngOnInit(): void {
    }

    get name() {
        return this.userForm.get('name');
    }

    get password() {
        return this.userForm.get('password');
    }

}
