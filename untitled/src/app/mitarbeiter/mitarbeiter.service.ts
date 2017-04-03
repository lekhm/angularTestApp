import {Employee} from "./mitarbeiter.model";
import {Department} from "../unternehmenseinheiten-liste/unternehmenseinheiten.model";
import {EventEmitter} from "@angular/core";
/**
 * Created by lekhili on 08.03.2017.
 */


export class EmployeeService {

  private employees: Employee[];

 selectedEmployee = new EventEmitter<Employee>();

  constructor() {
    var it = new Department('IT', null);
    var hr = new Department('HR', null);

    var erika = new Employee(1, 'Erika', 'Mustermann', hr, '0049 151 1250', 'erika.mustermann@virtual7.de', '', new Date('1981-03-11'), false);
    var max = new Employee(2, 'Max', 'Mustermann', it, '0049 151 0000', 'max.mustermann@virtual7.de', '', new Date('1980-01-01'), true);
    var klaus = new Employee(3, 'Klaus', 'Mustermann', it, '0049 151 1024', 'klaus.mustermann@virtual7.de', '', new Date('1979-04-03'), false);
    it.head = klaus;

    this.employees = [erika, max, klaus];
  }


  public getEmployees(): Employee[] {
    return this.employees;
  }

  /**public getEmployee(staffNumber: number) {
    return this.employees.find(
      (employee: Employee) => employee.staffNumber == staffNumber
    );
  }*/
}
