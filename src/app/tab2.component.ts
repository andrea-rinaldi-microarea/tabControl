import { Component, Input } from '@angular/core';
import { Tabs2 } from './tabs2.component';

@Component({
  selector: 'tab2',
  template: `
    <div [hidden]="!active">
      <ng-content></ng-content>
    </div>
  `,
  styles: []
})
export class Tab2 {
  @Input() tabTitle;
  active : boolean = false;
  
}
