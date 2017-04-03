import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
//import {Department} from "../../unternehmenseinheiten-liste/unternehmenseinheiten.model";
import {Employee} from "../mitarbeiter.model";
@Component({
  selector: 'app-mitarbeiter-item',
  templateUrl: './mitarbeiter-item.component.html',
  styleUrls: ['./mitarbeiter-item.component.css']
})
export class MitarbeiterItemComponent implements OnInit {

 /** employee = new Employee(1,
    'Erika',
    'Mustermann',
    new Department('IT', null),
    '0049 151 1234',
    'max.mustermann@virtual7.de',
    '',
    new Date('1980-01-01'),
    true);*/
 @Input() employee: Employee;
  constructor() { }

  ngOnInit() {
  }
}
