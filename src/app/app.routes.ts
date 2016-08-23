import { provideRouter } from "@angular/router";

import { SignupComponent } from "./unsecured/signup.component";
import { SigninComponent } from "./unsecured/signin.component";
import { SecuredComponent } from "./secured/secured.component";
import { AuthGuard } from "./shared/auth.guard";

export const APP_ROUTES = [
  provideRouter([
    { path: '', redirectTo: '/signin', pathMatch: 'full' },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'secured', component: SecuredComponent, canActivate: [AuthGuard] }
  ])
];
