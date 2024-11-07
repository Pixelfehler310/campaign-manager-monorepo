import { Component } from '@angular/core';
import { WikiCharacter } from './wiki-entry-card/wiki-character-card/wiki-character-card.component';
import { WikiClass } from './wiki-entry-card/wiki-class-card/wiki-class-card.component';
import { WikiItem } from './wiki-entry-card/wiki-item-card/wiki-item-card.component';
import { WikiEntry } from './wiki-entry-card/wiki-entry-card.component';
import { WikiMonster } from './wiki-entry-card/wiki-monster-card/wiki-monster-card.component';
import { WikiRegion } from './wiki-entry-card/wiki-region-card/wiki-region-card.component';
import { WikiSpecies } from './wiki-entry-card/wiki-species-card/wiki-species-card.component';
import { WikiSpell } from './wiki-entry-card/wiki-spell-card/wiki-spell-card.component';
import { ItemType } from 'src/app/types/inventory';

export enum CardType {
  Character = 'character',
  Class = 'class',
  Species = 'species',
  Item = 'item',
  Spell = 'spell',
  Region = 'region',
  Monster = 'monster',
}

@Component({
  selector: 'app-wiki-overview',
  templateUrl: './wiki-overview.component.html',
})
export class WikiOverviewComponent {
  entries: WikiEntry[] = [
    // ...characters.map((c) => ({ ...c, cardType: CardType.Character })),
    // ...dndClasses.map((c) => ({ ...c, cardType: CardType.Class })),
    // ...items.map((i) => ({ ...i, cardType: CardType.Item })),
    // ...monsters.map((m) => ({ ...m, cardType: CardType.Monster })),
    // ...regions.map((r) => ({ ...r, cardType: CardType.Region })),
    // ...species.map((s) => ({ ...s, cardType: CardType.Species })),
    // ...spells.map((s) => ({ ...s, cardType: CardType.Spell })),
  ];
  filteredEntries = this.entries;

  constructor() {
    // this.entries = this.shuffle(this.entries)
  }

  onSearch(query: string) {
    // Logik zur Filterung der Einträge
  }

  onFilter(selectedTypes: string[]) {
    // Logik zur Filterung nach Typ
  }

  shuffle(array: WikiEntry[]): WikiEntry[] {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }
}
