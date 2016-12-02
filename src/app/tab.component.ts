import { Component, Input } from '@angular/core';
import { Tabs } from './tabs.component';

@Component({
  selector: 'tab',
  template: `
    <div [hidden]="!active">
      <ng-content></ng-content>
    </div>
  `,
  styles: []
})
export class Tab {
  @Input() tabTitle;
  active : boolean = false;
  
  constructor(tabs: Tabs) {
    tabs.addTab(this)
  }
}
