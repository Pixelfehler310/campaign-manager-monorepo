// src/app/components/filter-bar/filter-bar.component.ts
import { Component, Output, EventEmitter } from '@angular/core';
import { CardType } from '../wiki-overview.component';
import { MultiSelectChangeEvent } from 'primeng/multiselect';

@Component({
  selector: 'wiki-filter-bar',
  templateUrl: './wiki-filter-bar.component.html',
  styleUrls: ['./wiki-filter-bar.component.scss'],
})
export class WikiFilterBarComponent {
  filterOptions = [
    { label: 'Characters', value: CardType.Character },
    { label: 'Classes', value: CardType.Class },
    { label: 'Species', value: CardType.Species },
    { label: 'Items', value: CardType.Item },
    { label: 'Spells', value: CardType.Spell },
    { label: 'Regions', value: CardType.Region },
    { label: 'Monsters', value: CardType.Monster },
  ];

  selectedFilters: CardType[] = [];

  @Output() filter = new EventEmitter<string[]>();

  onFilter(event: MultiSelectChangeEvent) {
    console.warn(event);
    // const selectedType = (event.target as HTMLSelectElement).value;
    // this.filter.emit(selectedType ? [selectedType] : []);
  }
}
