import { Component, Input } from '@angular/core';

@Component({
  selector: 'tag-input-sample',
  template: `
  <div >
    <tag-input
        [(ngModel)]="items" 
        [placeholder]="hint"
        [secondaryPlaceholder]="placeholder"
        [onlyFromAutocomplete]="true"
        [autocompleteItems]="allowedItems"
        [autocomplete]="true"
    >
    </tag-input>
    </div>
  `,
  styles: [`
    :host /deep/ .ng2-tag__name {
        font-size: 14px;
        letter-spacing: 0;
        line-height: 28px;
    }

    :host /deep/ .ng2-tag  {
        height: 28px;
    }
  `]
})
export class TagInputSampleComponent {
    @Input() allowedItems : string[];
    @Input() placeholder : string;
    @Input() hint : string;

    items = [];
}
