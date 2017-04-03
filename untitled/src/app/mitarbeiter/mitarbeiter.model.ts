/**
 * Created by lekhili on 06.03.2017.
 */

import {Department} from "../unternehmenseinheiten-liste/unternehmenseinheiten.model";
export class Employee {
  constructor(public staffNumber: number,
              public firstname: string,
              public lastname: string,
              public department: Department,
              public phone: string,
              public email: string,
              public photo: string,
              public birthday: Date,
              public fulltime: boolean) {

  }
}
