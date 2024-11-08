import { Component, Input } from '@angular/core';
import { WikiEntry } from '../wiki-entry-card.component';
import { SpellBase } from '@campaign-manager/shared';

export type WikiSpell = Pick<
  SpellBase,
  | 'name'
  | 'description'
  | 'level'
  | 'school'
  | 'castingTime'
  | 'duration'
  | 'img'
  | 'components'
  | 'concentration'
> &
  WikiEntry;

@Component({
  selector: 'wiki-spell-card',
  templateUrl: './wiki-spell-card.component.html',
  styleUrl: './wiki-spell-card.component.scss',
})
export class WikiSpellCardComponent {
  @Input() spell!: WikiSpell;
}
