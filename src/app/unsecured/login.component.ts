import {Component, OnInit} from "@angular/core";
import { FormBuilder, FormGroup, Validators, REACTIVE_FORM_DIRECTIVES } from "@angular/forms";

import { LoginService } from "../shared/login.service";

@Component({
    template: `
        <h3>Disease Diary Login</h3>
        <form [formGroup]="myForm" (ngSubmit)="onLogin()">
            <div class="form-group">
                <label for="email">E-Mail</label>
                <input formControlName="email" type="email" id="email" class="form-control">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input formControlName="password" type="password" id="password" class="form-control">
            </div>
            <button type="submit" [disabled]="!myForm.valid" class="btn btn-primary">Login</button>
        </form>
    `,
    directives: [REACTIVE_FORM_DIRECTIVES]
})
export class LoginComponent implements OnInit {
    myForm: FormGroup;
    error = false;
    errorMessage = '';

    constructor(private formbuilder: FormBuilder, private loginService: LoginService) {}

    onLogin() {
      this.loginService.loginUser(this.myForm.value);
    }

    ngOnInit():any {
        this.myForm = this.formbuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    }
}
