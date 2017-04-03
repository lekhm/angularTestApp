import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MitarbeiterListeComponent } from './mitarbeiter/mitarbeiter-liste/mitarbeiter-liste.component';
import { MitarbeiterDetailsComponent } from './mitarbeiter/mitarbeiter-details/mitarbeiter-details.component';
import { UnternehmenseinheitenListeComponent } from './unternehmenseinheiten-liste/unternehmenseinheiten-liste.component';
import { HeaderMenueComponent } from './header-menue/header-menue.component';
import { MitarbeiterComponent } from './mitarbeiter/mitarbeiter.component';
import { MitarbeiterSucheComponent } from './mitarbeiter/mitarbeiter-suche/mitarbeiter-suche.component';
import { MitarbeiterItemComponent } from './mitarbeiter/mitarbeiter-item/mitarbeiter-item.component';
import {HeadDirective} from "./mitarbeiter/head.directive";
import { MitarbeiterEditComponent } from './mitarbeiter/mitarbeiter-edit/mitarbeiter-edit.component';
import { MitarbeiterDetailsEmptyComponent } from './mitarbeiter/mitarbeiter-details/mitarbeiter-details-empty.component';

import {routing} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    MitarbeiterListeComponent,
    MitarbeiterDetailsComponent,
    UnternehmenseinheitenListeComponent,
    HeaderMenueComponent,
    MitarbeiterComponent,
    MitarbeiterSucheComponent,
    MitarbeiterItemComponent,
    HeadDirective,
    MitarbeiterEditComponent,
    MitarbeiterDetailsEmptyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //HttpModule
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
