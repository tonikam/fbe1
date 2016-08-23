import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";

import { HeaderComponent } from "./shared/header.component";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  directives: [HeaderComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {
}
