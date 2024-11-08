import { Component, Input } from '@angular/core';
import { WikiEntry } from '../wiki-entry-card.component';
import { Character } from '@campaign-manager/shared';

export type WikiCharacter = Pick<
  Character,
  'name' | 'level' | 'species' | 'img' | 'player' | 'class' | 'gender'
> &
  WikiEntry;

@Component({
  selector: 'wiki-character-card',
  templateUrl: './wiki-character-card.component.html',
  styleUrl: './wiki-character-card.component.scss',
})
export class WikiCharacterCardComponent {
  @Input() character!: WikiCharacter;
}
