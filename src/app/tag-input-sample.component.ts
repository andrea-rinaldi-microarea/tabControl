import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tag-input-sample',
  template: `
  <tag-input [(ngModel)]='items'
            [placeholder]="options.placeholder"
            [secondaryPlaceholder]="options.secondaryPlaceholder"
            [maxItems]="options.maxItems"
            [separatorKeys]="options.separatorKeys"
            [onlyFromAutocomplete]="true"
            [autocompleteItems]="options.autocompleteItems"
            [autocomplete]="true">
  </tag-input>
  `,
  styles: []
})
export class TagInputSampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    items = [];
    options = {
        placeholder: "+ document",
        secondaryPlaceholder: "Enter a new document",
        separatorKeys: [4, 5],
        autocompleteItems : ['Invoice', 'Delivery Note', 'Sales Order', 'Purchase Order']
    }
    onItemAdded(item) {
        console.log("${item} has been added");
    }
    onItemRemoved(item) {
        console.log("${item} has been removed");
    }

}
