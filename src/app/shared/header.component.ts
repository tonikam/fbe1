import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";

import { AuthService } from "./auth.service";

@Component({
    selector: 'my-header',
    template: `

        <header>
            <nav class="navbar navbar-default">
                <div class="container-fluid">

                    <ul class="nav navbar-nav">
                        <li><a [routerLink]="['signin']">Login</a></li>
                        <li><a [routerLink]="['signup']">Register</a></li>
                        <li><a [routerLink]="['secured']">Disease Diary</a></li>

                    </ul>

                    <ul class="nav navbar-nav navbar-right" *ngIf="isAuth()">

                        <li><a (click)="onLogout()" style="cursor: pointer;">Logout</a></li>
                    </ul>

                </div><!-- /.container-fluid -->

            </nav>

        </header>
    `,
  directives: [ROUTER_DIRECTIVES]
})
export class HeaderComponent {
  constructor(private authService: AuthService) {}

  isAuth() {
    return this.authService.isAuthenticated();
  }

  onLogout() {
    this.authService.logout();
  }
}
