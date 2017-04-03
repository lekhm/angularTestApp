import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Employee} from "../mitarbeiter.model";
import {Department} from "../../unternehmenseinheiten-liste/unternehmenseinheiten.model";
import {EmployeeService} from "../mitarbeiter.service";

@Component({
  selector: 'app-mitarbeiter-liste',
  templateUrl: 'mitarbeiter-liste.component.html',
  styleUrls: ['mitarbeiter-liste.component.css']
})
export class MitarbeiterListeComponent implements OnInit {

 /** employee = new Employee(1,
    'Erika',
    'Mustermann',
    new Department('IT', null),
    '0049 151 1234',
    'erkia.mustermann@virtual7.de',
    '',
    new Date('1980-01-01'),
    true);*/
/** employees = [
   new Employee(1, 'Erika', 'Mustermann', new Department('HR', null), '0049 151 1250', 'erika.mustermann@virtual7.de', '', new Date('1981-03-11'), false),
   new Employee(2, 'Max', 'Mustermann', new Department('IT', null), '0049 151 0000', 'max.mustermann@virtual7.de', '', new Date('1980-01-01'), true),
   new Employee(2, 'MaxErika', 'Mustermann', new Department('Sales', null), '0049 151 1111', 'maxErika.mustermann@virtual7.de', '', new Date('1980-01-01'), false)
 ];*/

  employees: Employee[];
  selectedEmployee: Employee;

  //@Output() employeeSelected = new EventEmitter<Employee>();

  //constructor() { }
  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
   /** var it = new Department('IT', null);
    var hr = new Department('HR', null);

    var erika = new Employee(1, 'Erika', 'Mustermann', hr, '0049 151 1250', 'erika.mustermann@virtual7.de', '', new Date('1981-03-11'), false);
    var max = new Employee(2, 'Max', 'Mustermann', it, '0049 151 0000', 'max.mustermann@virtual7.de', '', new Date('1980-01-01'), true);
    var klaus = new Employee(3, 'Klaus', 'Mustermann', it, '0049 151 1024', 'klaus.mustermann@virtual7.de', '', new Date('1979-04-03'), false);
    it.head = klaus;

    this.employees = [erika, max, klaus];*/

   this.employees = this.employeeService.getEmployees();

    this.employeeService.selectedEmployee.subscribe(
      (employee: Employee) => this.selectedEmployee = employee);
  }

  onSelect(employee: Employee) {
    this.employeeService.selectedEmployee.emit(employee);
  }

}
