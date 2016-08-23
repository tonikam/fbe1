import { provideRouter } from "@angular/router";

import { RegisterComponent } from "./unsecured/register.component";
import { LoginComponent } from "./unsecured/login.component";
import { SecuredComponent } from "./secured/secured.component";
import { LoginGuard } from "./shared/login.guard";

export const APP_ROUTES = [
  provideRouter([
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'secured', component: SecuredComponent, canActivate: [LoginGuard] }
  ])
];
