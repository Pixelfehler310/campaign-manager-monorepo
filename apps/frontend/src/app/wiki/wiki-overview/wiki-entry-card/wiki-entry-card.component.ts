// src/app/components/entry-card/entry-card.component.ts
import { Component, Input } from '@angular/core';
import { WikiCharacter } from './wiki-character-card/wiki-character-card.component';
import { CardType } from '../wiki-overview.component';
import { WikiClass } from './wiki-class-card/wiki-class-card.component';
import { WikiSpecies } from './wiki-species-card/wiki-species-card.component';
import { WikiItem } from './wiki-item-card/wiki-item-card.component';
import { WikiSpell } from './wiki-spell-card/wiki-spell-card.component';
import { WikiRegion } from './wiki-region-card/wiki-region-card.component';
import { WikiMonster } from './wiki-monster-card/wiki-monster-card.component';

export interface WikiEntry {
  cardType: CardType;
}

@Component({
  selector: 'wiki-entry-card',
  templateUrl: './wiki-entry-card.component.html',
  styleUrls: ['./wiki-entry-card.component.scss'],
})
export class WikiEntryCardComponent {
  @Input() entry!: WikiEntry; // Typ anpassen

  get cardType(): CardType {
    if (!this.entry?.cardType) {
      console.error('Card type not set for entry', this.entry);
      return CardType.Character;
    }
    return this.entry?.cardType;
  }

  isMonster(entry: WikiEntry): entry is WikiMonster {
    return this.cardType === 'monster';
  }

  isRegion(entry: WikiEntry): entry is WikiRegion {
    return this.cardType === 'region';
  }

  isSpell(entry: WikiEntry): entry is WikiSpell {
    return this.cardType === 'spell';
  }

  isItem(entry: WikiEntry): entry is WikiItem {
    return this.cardType === 'item';
  }

  isSpecies(entry: WikiEntry): entry is WikiSpecies {
    return this.cardType === 'species';
  }
  isCharacter(entry: WikiEntry): entry is WikiCharacter {
    return this.cardType === 'character';
  }

  isClass(entry: WikiEntry): entry is WikiClass {
    return this.cardType === 'class';
  }
}
