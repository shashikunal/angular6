import { Component } from "@angular/core";
import {FormControl , FormGroup, Validators } from "@angular/forms";

@Component({
    selector : 'signup-form',
    templateUrl:'./signup-form.component.html'
})
export class SignupForm {

    form = new FormGroup({
        'username' : new FormControl("" , [
            Validators.required,
            Validators.minLength(3)
        ]),
        'password' : new FormControl("" , Validators.required)
    });

    get username(){
        return this.form.get('username');
    }

}