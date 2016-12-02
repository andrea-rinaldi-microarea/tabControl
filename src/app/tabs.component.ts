import { Component } from '@angular/core';
import { Tab } from './tab.component';

@Component({
  selector: 'tabs',
  template: `
    <ul>
      <li *ngFor="let tab of tabs" (click)="selectTab(tab)">
        {{ tab.tabTitle }}
      </li>
    </ul>
    <ng-content></ng-content>
  `,
  styles: []
})
export class Tabs {
  // typescript needs to know what properties will exist on class instances
  tabs: Tab[] = [];

  addTab(tab:Tab) {
    if (this.tabs.length === 0) {
      tab.active = true;
    }
    this.tabs.push(tab);
  }

  selectTab(tab:Tab) {
    this.tabs.forEach((tab) => {
      tab.active = false;
    });
    tab.active = true
  }
}
