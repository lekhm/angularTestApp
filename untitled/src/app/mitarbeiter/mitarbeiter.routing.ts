import {Routes} from "@angular/router";
import {MitarbeiterDetailsComponent} from "./mitarbeiter-details/mitarbeiter-details.component";
import {MitarbeiterEditComponent} from "./mitarbeiter-edit/mitarbeiter-edit.component";
/**
 * Created by lekhili on 09.03.2017.
 */
export const EMPLOYEE_ROUTES: Routes = [
  {path: '', component: MitarbeiterDetailsComponent},
  {path: 'neu', component: MitarbeiterEditComponent},
  {path: ':staffNumber', component: MitarbeiterDetailsComponent},
  {path: ':stuffNumber/bearbeiten', component: MitarbeiterEditComponent},
];
