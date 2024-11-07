import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  FormControl,
} from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import {
  DiceType,
  DiceData,
  getDiceKeys,
  getDiceEntries,
} from 'src/app/types/dice';
import { Attribute } from 'src/app/types/attributes';

@Component({
  selector: 'app-class-form-view',
  templateUrl: './class-form-view.component.html',
  styleUrl: './class-form-view.component.scss',
})
export class ClassFormViewComponent {
  classForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.classForm = this.createClassForm();
  }

  private createClassForm(): FormGroup {
    return this.fb.group({
      classImage: [null],
      name: [''],
      description: [''],
      hitDice: [null],
      primaryAbilities: [''],
      armorProficiencies: [''],
      weaponProficiencies: [''],
      skillProficiencies: [''],
      subclasses: [''],
      learnableSpells: [[]],
    });
  }

  onSubmit() {
    console.log(this.classForm.value);
  }

  uploadedImage: any;

  onImageUpload(event: any) {
    const file = event.files[0];
    console.warn(typeof file, 'preread', file);

    this.classForm.patchValue({
      classImage: file,
    });
    this.classForm.get('classImage')?.updateValueAndValidity();

    // Optional: Vorschau anzeigen
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.uploadedImage = reader.result;
      console.warn(typeof this.uploadedImage, 'afterread', this.uploadedImage);
    };
  }

  deleting: boolean = false;

  deleteImage() {
    this.deleting = true;

    this.uploadedImage = null;

    this.deleting = false;
  }

  getDiceItems(): SelectItem[] {
    return getDiceEntries();
  }

  descriptionMaxLength = 255;
  get descriptionLength(): number {
    return this.classForm.get('description')?.value.length || 0;
  }

  getAbilityItems(): SelectItem[] {
    return Object.keys(Attribute).map((key) => ({
      label: key,
      value: Attribute[key as keyof typeof Attribute],
    }));
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
