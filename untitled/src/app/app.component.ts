import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:'<div class="container"><app-header-menue></app-header-menue></div>' +
           '<div class="container"><app-mitarbeiter></app-mitarbeiter></div>' +
           '<div class="container"><app-unternehmenseinheiten-liste></app-unternehmenseinheiten-liste></div>',

  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hallo test!';
}
