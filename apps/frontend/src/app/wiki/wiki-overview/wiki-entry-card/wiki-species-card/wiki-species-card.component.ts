import { Component, Input } from '@angular/core';
import { WikiEntry } from '../wiki-entry-card.component';
import { Species } from '@campaign-manager/shared';

export type WikiSpecies = Pick<
  Species,
  'name' | 'description' | 'img' // Wähle die gewünschten Eigenschaften aus Species
> &
  WikiEntry;

@Component({
  selector: 'wiki-species-card',
  templateUrl: './wiki-species-card.component.html',
  styleUrl: './wiki-species-card.component.scss',
})
export class WikiSpeciesCardComponent {
  @Input() species!: WikiSpecies;
}
