import {
  encounters,
  factions,
  locations,
  quests,
  regions,
  rumors,
} from './../../../../assets/regions/mystic';
import { Encounter, Quest, Faction } from './../../../types/campaigns';
import { Region, Location, Rumor } from './../../../types/regions';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-region-detail-view',
  templateUrl: './region-detail-view.component.html',
  styleUrls: ['./region-detail-view.component.scss'],
})
export class RegionDetailViewComponent {
  @Input() id: number = 0;
  region?: Region;
  locations?: Location[] = [];
  rumors?: Rumor[] = [];
  encounters?: Encounter[] = [];
  quests?: Quest[] = [];
  factions?: Faction[] = [];

  selectedEncounter: Encounter | null = null;
  selectedNotableFeatures: any[] = [];

  constructor() {
    if (this.id == 0) {
      this.region = regions[0];
      this.encounters = encounters;
      this.quests = quests;
      this.factions = factions;
    }
  }
  ngOnInit(): void {
    this.locations = this.getLocations();
    this.encounters = this.getEncounters();
    this.rumors = this.getRumors();
    this.quests = this.getQuests();
    this.factions = this.getFactions();
    this.selectedNotableFeatures = this.region?.notableFeatures || [];
  }

  getLocations(): Location[] {
    const locationList: Location[] = [];
    if (this.region?.locations) {
      this.region.locations.forEach((locationRef) => {
        const location = locations.find((loc) => loc.id === locationRef.id);
        if (location) {
          // Für jede Encounter-ID im Standort die vollständige Encounter-Daten laden
          const fullEncounters = (location.encounters ?? [])
            .map((encRef: { id: number }) => this.getEncounterById(encRef.id)) // Verwende die `getEncounterById` Methode
            .filter((encounter: any): encounter is Encounter => !!encounter);
          locationList.push({
            ...location,
            encounters: fullEncounters, // Füge die vollständigen Begegnungen hinzu
          });
        }
      });
    }
    return locationList;
  }

  getRumors(): any[] {
    const rumorList: any[] = [];
    if (this.region?.rumors) {
      this.region.rumors.forEach((rumorRef) => {
        const rumor = rumors.find((r) => r.id === rumorRef.id);
        if (rumor) {
          rumorList.push({ ...rumor });
        }
      });
    }
    return rumorList;
  }

  getEncounters(): any[] {
    const encounterList: any[] = [];
    if (this.locations) {
      this.locations.forEach((location) => {
        location.encounters?.forEach((encounter) => {
          encounterList.push(encounter); // Add encounter data to the list
        });
      });
    }
    return encounterList;
  }

  getQuests(): any[] {
    const questList: any[] = [];
    if (this.region?.quests) {
      this.region.quests.forEach((questRef) => {
        const quest = this.quests?.find((q) => q.id === questRef.id);
        if (quest) {
          questList.push({ ...quest });
        }
      });
    }
    console.log(questList);
    return questList;
  }

  GetQuestById(id: number): Quest | undefined {
    return this.getQuestById(id);
  }

  GetFactionById(id: number): Faction | undefined {
    return this.getFactionById(id);
  }

  getFactions(): any[] {
    const factionList: any[] = [];
    if (this.region?.factions) {
      this.region.factions.forEach((factionRef) => {
        const faction = this.factions?.find((f) => f.id === factionRef.id);
        if (faction) {
          factionList.push({ ...faction });
        }
      });
    }
    return factionList;
  }

  GetNotableFeatures(): string[] {
    return this.region?.notableFeatures || [];
  }

  //TODO API CALLS -->
  private getLocationById(id: number): Location | undefined {
    return this.locations?.find((loc) => loc.id === id);
  }

  private getRumorById(id: number): Rumor | undefined {
    return this.rumors?.find((r) => r.id === id);
  }

  private getEncounterById(id: number): Encounter | undefined {
    return this.encounters?.find((enc) => enc.id === id);
  }

  private getQuestById(id: number): Quest | undefined {
    return this.quests?.find((q) => q.id === id);
  }

  private getFactionById(id: number): Faction | undefined {
    return this.factions?.find((f) => f.id === id);
  }

  showEncounterOverlay(event: Event, encounter: any, overlayPanel: any) {
    this.selectedEncounter = encounter;
    overlayPanel.toggle(event);
  }
}
