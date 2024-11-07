import { Component, Input } from '@angular/core';
import { Species } from './../../../types/characters';
import { Ability } from './../../../types/entities';
import { species, abilities } from 'src/assets/species/dragonkin';
@Component({
  selector: 'app-species-detail-view',
  templateUrl: './species-detail-view.component.html',
  styleUrls: ['./species-detail-view.component.scss'],
})
export class SpeciesDetailViewComponent {
  @Input() id: number = 0;
  species?: Species;
  abilities?: Ability[] = [];
  selectedAbility: Ability | null = null;

  constructor() {
    if (this.id == 0) {
      this.species = species[0];
      this.abilities = abilities;
    }
  }

  ngOnInit(): void {
    this.abilities = this.getAbilities();
  }

  getAbilities(): Ability[] {
    const abilityList: any[] = [];
    if (this.species?.abilities) {
      this.species.abilities.forEach((abilitiesRef) => {
        const ability = abilities.find((abi) => abi.id === abilitiesRef.id);
        if (ability) {
          abilityList.push({ ...ability });
        }
      });
    }
    console.log(abilityList);
    return abilityList;
  }

  showAbilityOverlay(event: Event, ability: any, overlayPanel: any) {
    this.selectedAbility = ability;
    overlayPanel.toggle(event);
  }
}
