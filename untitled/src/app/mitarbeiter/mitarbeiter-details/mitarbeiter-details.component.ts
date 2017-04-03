import { Component, OnInit, Input } from '@angular/core';
import {Employee} from "../mitarbeiter.model";
import {EmployeeService} from "../mitarbeiter.service";
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-mitarbeiter-details',
  templateUrl: 'mitarbeiter-details.component.html',
  styleUrls: ['mitarbeiter-details.component.css']
})
export class MitarbeiterDetailsComponent implements OnInit {

 // @Input() selectedEmployee: Employee;
  selectedEmployee: Employee;

  //constructor() { }
  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.employeeService.selectedEmployee.subscribe(
      (employee: Employee) => this.selectedEmployee = employee
    );
  }

}
