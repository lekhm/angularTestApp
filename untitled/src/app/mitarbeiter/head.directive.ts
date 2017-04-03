import {Employee} from "./mitarbeiter.model";
import {ViewContainerRef, TemplateRef, Input, Directive} from "@angular/core";
/**
 * Created by lekhili on 07.03.2017.
 */



@Directive({
  selector: '[appHead]'
})
export class HeadDirective {

  private hasView = false;

  @Input('appHead') set head(employee: Employee) {
    let isHead = this.isHead(employee);

    if (isHead && !this.hasView) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      this.hasView = true;
    }

    else if (!isHead && this.hasView) {
      this.viewContainerRef.clear();
      this.hasView = false;
    }
  }

  constructor(private templateRef: TemplateRef<any>,
              private viewContainerRef: ViewContainerRef) {
  }


  private isHead(employee: Employee) {
    return employee && employee.department && employee.department.head == employee;
  }

}
