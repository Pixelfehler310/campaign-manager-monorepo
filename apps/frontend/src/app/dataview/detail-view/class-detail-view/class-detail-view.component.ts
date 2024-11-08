import { Component } from '@angular/core';
import { Attribute, getDiceEntries } from '@campaign-manager/shared';
import { SelectItem } from 'primeng/api';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';

@Component({
  selector: 'app-class-detail-view',
  templateUrl: './class-detail-view.component.html',
  styleUrls: ['./class-detail-view.component.scss'],
})
export class ClassDetailViewComponent {
  primaryAbilities: string[] = [];
  armorProficiencies: string[] = [];
  weaponProficiencies: string[] = [];
  skillProficiencies: string[] = [];
  subclasses: string[] = [];
  learnableSpells: string[] = [];

  ngOnInit(): void {
    this.primaryAbilities = this.getAbilities();
    this.armorProficiencies = this.getArmorProficiencies();
    this.weaponProficiencies = this.getWeaponProficiencies();
    this.skillProficiencies = this.getSkillProficiencies();
    this.subclasses = this.getSubclasses();
    this.learnableSpells = this.getLearnableSpells();
  }

  getName(): string {
    return 'Pinguin';
  }

  getImage(): any {
    return 'assets/characters/img/pinguin.jpg';
  }

  getDiceItems(): SelectItem[] {
    return getDiceEntries();
  }

  getDiceItem(): number {
    return 2;
  }

  getAbilityItems(): SelectItem[] {
    return Object.keys(Attribute).map((key) => ({
      label: key.toString(),
      value: Attribute[key as keyof typeof Attribute].toString(),
    }));
  }

  getAbilities(): string[] {
    return [Attribute.STR, Attribute.DEX];
  }

  getArmorProficiencies(): string[] {
    return ['Leather', 'Chain Shirt'];
  }

  getWeaponProficiencies(): string[] {
    return ['Simple Weapons', 'Longsword'];
  }

  getSkillProficiencies(): string[] {
    return ['Acrobatics', 'Insight'];
  }

  getSubclasses(): string[] {
    return ['SubClass1', 'SubClass2'];
  }

  getLearnableSpells(): any[] {
    return [
      { label: 'Fireball', value: 'fireball' },
      { label: 'Magic Missile', value: 'magicMissile' },
    ];
  }

  getDescription(): string {
    return 'Pinguine sind die besten!';
  }

  descriptionMaxLength = 255;
  get descriptionLength(): number {
    return this.getDescription().length || 0;
  }

  armorOptions = [
    { label: 'Leder', value: 'Leather' },
    { label: 'Studierte Leder', value: 'Studded Leather' },
    { label: 'Kettenhemd', value: 'Chain Shirt' },
    { label: 'Kettenhemd', value: 'Chainmail' },
    { label: 'Splint', value: 'Splint' },
    { label: 'Platten', value: 'Plate' },
    { label: 'Schuppenpanzer', value: 'Scale Mail' },
    { label: 'Brigandine', value: 'Brigandine' },
    { label: 'Ringpanzer', value: 'Ring Mail' },
    { label: 'Vollplatte', value: 'Half Plate' },
  ];

  weaponOptions = [
    { label: 'Einfachen Waffen', value: 'Simple Weapons' },
    { label: 'Martial Waffen', value: 'Martial Weapons' },
    { label: 'Langbogen', value: 'Longbow' },
    { label: 'Kurzbogen', value: 'Shortbow' },
    { label: 'Schwert (Lang)', value: 'Longsword' },
    { label: 'Schwert (Kurz)', value: 'Shortsword' },
    { label: 'Degen', value: 'Rapier' },
    { label: 'Hacke', value: 'Warhammer' },
    { label: 'Streitaxt', value: 'Battleaxe' },
    { label: 'Wurfmesser', value: 'Throwing Knife' },
  ];

  skillOptions = [
    { label: 'Acrobatics', value: 'Acrobatics' },
    { label: 'Animal Handling', value: 'Animal Handling' },
    { label: 'Arcana', value: 'Arcana' },
    { label: 'Athletics', value: 'Athletics' },
    { label: 'Deception', value: 'Deception' },
    { label: 'History', value: 'History' },
    { label: 'Insight', value: 'Insight' },
    { label: 'Intimidation', value: 'Intimidation' },
    { label: 'Investigation', value: 'Investigation' },
    { label: 'Medicine', value: 'Medicine' },
    { label: 'Nature', value: 'Nature' },
    { label: 'Perception', value: 'Perception' },
    { label: 'Performance', value: 'Performance' },
    { label: 'Persuasion', value: 'Persuasion' },
    { label: 'Religion', value: 'Religion' },
    { label: 'Sleight of Hand', value: 'Sleight of Hand' },
    { label: 'Stealth', value: 'Stealth' },
    { label: 'Survival', value: 'Survival' },
  ];

  subClasses = [
    { label: 'SubClass1', value: 'SubClass1' },
    { label: 'SubClass2', value: 'SubClass2' },
    { label: 'SubClass2', value: 'SubClass2' },
  ];

  learnableSpellOptions: { label: string; value: string }[] = [
    { label: 'Fireball', value: 'fireball' },
    { label: 'Magic Missile', value: 'magicMissile' },
    { label: 'Shield', value: 'shield' },
    { label: 'Cure Wounds', value: 'cureWounds' },
    { label: 'Lightning Bolt', value: 'lightningBolt' },
    { label: 'Invisibility', value: 'invisibility' },
  ];

  filteredSpells: { label: string; value: string }[] = [];

  filterSpells(event: AutoCompleteCompleteEvent) {
    const query = event.query.toLowerCase();
    this.filteredSpells = this.learnableSpellOptions.filter((spell) =>
      spell.label.toLowerCase().includes(query)
    );
  }
}
