import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from "@angular/http";
import { provideForms, disableDeprecatedForms } from "@angular/forms";

import { APP_ROUTES } from "./app/app.routes";

import { AppComponent, environment } from './app/';
import { LoginService } from "./app/shared/login.service";
import { LoginGuard } from "./app/shared/login.guard";

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  disableDeprecatedForms(),
  provideForms(),
  APP_ROUTES,
  LoginService,
  LoginGuard
]);

