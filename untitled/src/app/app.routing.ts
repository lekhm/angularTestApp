import {Routes, RouterModule} from "@angular/router";
import {EMPLOYEE_ROUTES} from "./mitarbeiter/mitarbeiter.routing";
import {MitarbeiterComponent} from "./mitarbeiter/mitarbeiter.component";
import {UnternehmenseinheitenListeComponent} from "./unternehmenseinheiten-liste/unternehmenseinheiten-liste.component";

const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/mitarbeiter', pathMatch: 'full'},
  {path: 'mitarbeiter', component: MitarbeiterComponent, children: EMPLOYEE_ROUTES},
  {path: 'abteilungen', component: UnternehmenseinheitenListeComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
