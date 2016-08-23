import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";

import { LoginService } from "./login.service";

@Component({
    selector: 'my-header',
    template: `

        <header>
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <ul class="nav navbar-nav">
                        <li><a [routerLink]="['login']">Login</a></li>
                        <li><a [routerLink]="['register']">Register</a></li>
                        <li><a [routerLink]="['secured']">Disease Diary</a></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right" *ngIf="isLoggedIn()">
                        <li><a (click)="onLogout()" style="cursor: pointer;">Logout</a></li>
                    </ul>
                </div><!-- /.container-fluid -->
            </nav>
        </header>
    `,
  directives: [ROUTER_DIRECTIVES]
})
export class HeaderComponent {
  constructor(private loginService: LoginService) {}

  isLoggedIn() {
    return this.loginService.isLoggedIn();
  }

  onLogout() {
    this.loginService.logout();
  }
}
