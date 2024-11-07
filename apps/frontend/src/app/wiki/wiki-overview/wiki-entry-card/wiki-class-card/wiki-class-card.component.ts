import { Component, Input } from '@angular/core';
import { WikiEntry } from '../wiki-entry-card.component';

export interface WikiSubclass extends WikiEntry {
  subclass_name: string;
  subclass_description: string;
  parentclass: string;
  img?: string;
}
export interface WikiClass extends WikiEntry {
  name: string;
  description?: string;
  // abilities?: Ability[];
  subclasses?: WikiSubclass[];
  img?: string;
}
@Component({
  selector: 'wiki-class-card',
  templateUrl: './wiki-class-card.component.html',
  styleUrl: './wiki-class-card.component.scss',
})
export class WikiClassCardComponent {
  @Input() klass!: WikiClass;
}
