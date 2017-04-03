/**
 * Created by lekhili on 06.03.2017.
 */
import {Employee} from "../mitarbeiter/mitarbeiter.model";

export class Department {
  constructor(public name: string,
              public head: Employee) {

  }
}
