import { Component, OnInit } from '@angular/core';
import {Employee} from "./mitarbeiter.model";
import {EmployeeService} from "./mitarbeiter.service";
@Component({
  selector: 'app-mitarbeiter',
  templateUrl: './mitarbeiter.component.html',
  styleUrls: ['./mitarbeiter.component.css'],
  providers: [EmployeeService]
})
export class MitarbeiterComponent implements OnInit {

  //selectedEmployee: Employee;

  constructor() { }

  ngOnInit() {
  }

}
