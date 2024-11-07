import { Component, Input } from '@angular/core';
import { WikiEntry } from '../wiki-entry-card.component';
import { Region } from 'src/app/types/regions';

export type WikiRegion = Pick<
  Region,
  'name' | 'description' | 'locations' | 'factions' | 'img'
> &
  WikiEntry;

@Component({
  selector: 'wiki-region-card',
  templateUrl: './wiki-region-card.component.html',
  styleUrl: './wiki-region-card.component.scss',
})
export class WikiRegionCardComponent {
  @Input() region!: WikiRegion; // todo: Type this properly
}
