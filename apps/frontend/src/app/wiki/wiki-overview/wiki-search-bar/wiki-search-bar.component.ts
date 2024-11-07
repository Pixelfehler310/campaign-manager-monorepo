// src/app/components/search-bar/search-bar.component.ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wiki-search-bar',
  template: `<input
    type="text"
    pInputText
    class="w-full text-2xl rounded-xl pl-2 indent-2"
    (input)="onSearch($event)"
    placeholder="Suche..."
  />`,
})
export class WikiSearchBarComponent {
  @Output() search = new EventEmitter<string>();

  onSearch(event: Event) {
    const input = (event.target as HTMLInputElement).value;
    this.search.emit(input);
  }
}
