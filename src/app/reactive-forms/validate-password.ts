import { AbstractControl } from "@angular/forms";

export function validatePassword(control: AbstractControl) {
    if(control.value.includes('password')) {
        return {
            invalidPassword: true
        };
    }

    return null;
}