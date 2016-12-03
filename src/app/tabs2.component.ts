import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { Tab2 } from './tab2.component';

@Component({
  selector: 'tabs2',
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
export class Tabs2 implements AfterContentInit {

  @ContentChildren(Tab2) tabs: QueryList<Tab2>;
  
  // contentChildren are set
  ngAfterContentInit() {
    // get all active tabs
    let activeTabs = this.tabs.filter((tab)=>tab.active);
    // if there is no active tab set, activate the first
    if(activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }
  
  selectTab(tab:Tab2) {
    this.tabs.toArray().forEach((tab) => {
      tab.active = false;
    });
    tab.active = true;
  }
}
