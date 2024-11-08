import { Component, Input } from '@angular/core';
import { WikiEntry } from '../wiki-entry-card.component';
import { Item, MoneyUnit } from '@campaign-manager/shared';

export type WikiItem = Pick<
  Item,
  'name' | 'description' | 'type' | 'img' | 'cost'
> &
  WikiEntry;

@Component({
  selector: 'wiki-item-card',
  templateUrl: './wiki-item-card.component.html',
  styleUrl: './wiki-item-card.component.scss',
})
export class WikiItemCardComponent {
  @Input() item!: WikiItem;
  MoneyUnit = MoneyUnit;
}
