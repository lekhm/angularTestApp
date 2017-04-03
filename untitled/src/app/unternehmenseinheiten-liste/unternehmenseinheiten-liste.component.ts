import { Component, OnInit } from '@angular/core';
import {Department} from "./unternehmenseinheiten.model";

@Component({
  selector: 'app-unternehmenseinheiten-liste',
  templateUrl: './unternehmenseinheiten-liste.component.html',
  styleUrls: ['./unternehmenseinheiten-liste.component.css']
})
export class UnternehmenseinheitenListeComponent implements OnInit {

  departments = [
    new Department('IT', null),
    new Department('HR', null),
    new Department('Sales', null),
    new Department('Support', null),
    new Department('CEO', null),
    new Department('Marketing', null)
  ];


  selectedDepartment: Department;
  formDepartment: Department;

  constructor() { }

  ngOnInit() {
    this.formDepartment = new Department(null, null);
  }

  onSelect(department: Department) {
    this.selectedDepartment = department;
    this.formDepartment = department;
  }

  onSave() {
    var index = this.departments.indexOf(this.selectedDepartment);

    if (index == -1) {
      this.departments.push(this.formDepartment);
    }
    else {
      this.departments[index] = this.formDepartment;
    }

    this.onCancel();
  }

  onDelete() {
    var index = this.departments.indexOf(this.selectedDepartment);

    if (index > -1) {
      this.departments.splice(index, 1);
      this.onCancel();
    }
  }

  onCancel() {
    this.selectedDepartment = null;
    this.formDepartment = new Department(null, null);
  }

}
