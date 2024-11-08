import { Component, Input } from '@angular/core';
import { WikiEntry } from '../wiki-entry-card.component';
import { Monster } from '@campaign-manager/shared';

// export interface WikiMonster extends WikiEntry {
//   name: string;
//   description?: string;
//   type?: string;
//   img?: string;
//   // attacks?: Attack[];
//   // inventory?: Item[];
//   // properties: string[];
//   size_category?: number;
//   // speed?: number;
//   // attributes: Attributes;
//   // hp_max?: number;
//   // hp_current?: number;
//   // hp_temp?: number;
//   challenge_rating?: number;
//   immunities?: string[];
//   resistances?: string[];
//   vulnerabilities?: string[];
//   // languages: string[];
// }

export type WikiMonster = Pick<
  Monster, // Verwende den Typ selbst, um die Eigenschaften auszuwählen
  | 'name'
  | 'description'
  | 'type'
  | 'img'
  | 'sizeCategory'
  | 'challengeRating'
  | 'damageResponses'
> &
  WikiEntry;

@Component({
  selector: 'wiki-monster-card',
  templateUrl: './wiki-monster-card.component.html',
  styleUrl: './wiki-monster-card.component.scss',
})
export class WikiMonsterCardComponent {
  @Input() monster!: WikiMonster;
}
