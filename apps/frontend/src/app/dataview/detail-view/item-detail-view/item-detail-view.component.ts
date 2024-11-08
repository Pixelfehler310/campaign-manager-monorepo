import { Component, OnInit, Input } from '@angular/core';
import {
  ItemType,
  MoneyUnit,
  ArmorType,
  ToolType,
  Attack,
  Weapon,
  Armor,
  Tool,
  ActionType,
  DiceType,
  DamageType,
  AttackType,
  getItemTypeOptions,
  getMoneyUnitOptions,
  getArmorTypeOptions,
  getToolTypeOptions,
  DiceData,
  formatDamage,
} from '@campaign-manager/shared';

@Component({
  selector: 'app-item-detail-view',
  templateUrl: './item-detail-view.component.html',
  styleUrls: ['./item-detail-view.component.scss'],
})
export class ItemDetailViewComponent implements OnInit {
  @Input() id: number = 0;

  itemTypeOptions: { label: string; value: ItemType }[] = [];
  moneyUnitOptions: { label: string; value: MoneyUnit }[] = [];
  armorTypeOptions: { label: string; value: ArmorType }[] = [];
  toolTypeOptions: { label: string; value: ToolType }[] = [];
  attacks: Attack[] = [];

  items: (Weapon | Armor | Tool)[] = []; // TODO Itemtype Type bitte bspw: export Type Item = Weapon | Armor | Tool | ... dann kann man den typen später besser erweitern und muss nur 1 stelle ändern :D
  currentItem: Weapon | Armor | Tool | undefined | null = null;

  weapons: Weapon[] = [
    {
      id: 1,
      name: 'Longsword',
      description:
        'A longsword is a type of sword characterized by a long blade and a straight, double-edged blade.',
      type: ItemType.Weapon,
      cost: { amount: 10, unit: MoneyUnit.GOLD },
      weight: 3,
      attacks: [
        {
          name: 'Longsword Attack',
          description: 'A basic attack with a longsword.',
          type: ActionType.Melee,
          range: 5,
          attackBonus: 5,
          proficiency: true,
          damage: {
            [DiceType.D8]: 1,
          },
          damageType: DamageType.Slashing,
          attackType: AttackType.Melee,
        },
      ],
    },
    {
      id: 2,
      name: 'Dagger',
      description:
        'A dagger is a knife with a very sharp point and usually two sharp edges, typically designed or capable of being used as a thrusting or stabbing weapon.',
      type: ItemType.Weapon,
      cost: { amount: 2, unit: MoneyUnit.GOLD },
      weight: 1,
      attacks: [
        {
          name: 'Dagger Attack',
          description: 'A basic attack with a dagger.',
          type: ActionType.Melee,
          range: 5,
          attackBonus: 3,
          proficiency: true,
          damage: {
            [DiceType.D4]: 1,
          },
          damageType: DamageType.Piercing,
          attackType: AttackType.Melee,
        },
      ],
    },
  ];

  armors: Armor[] = [
    {
      id: 3,
      name: 'Chain Mail',
      description:
        'Chain mail is a type of armor consisting of small metal rings linked together in a pattern to form a mesh.',
      type: ItemType.Armor,
      cost: { amount: 75, unit: MoneyUnit.GOLD },
      weight: 55,
      armorClass: 16,
      armorType: ArmorType.Heavy,
    },
    {
      id: 4,
      name: 'Leather Armor',
      description:
        'Leather armor is a type of light armor made of tough but flexible leather.',
      type: ItemType.Armor,
      cost: { amount: 10, unit: MoneyUnit.GOLD },
      weight: 10,
      armorClass: 11,
      armorType: ArmorType.Light,
    },
  ];

  tools: Tool[] = [
    {
      id: 5,
      name: "Thieves' Tools",
      description:
        'A set of tools that allow you to pick locks and disarm traps.',
      type: ItemType.Tool,
      cost: { amount: 25, unit: MoneyUnit.GOLD },
      weight: 1,
      toolType: ToolType.Thieves,
    },
    {
      id: 6,
      name: "Smith's Tools",
      description: 'A set of tools that allow you to work with metal.',
      type: ItemType.Tool,
      cost: { amount: 20, unit: MoneyUnit.GOLD },
      weight: 8,
      toolType: ToolType.Artisan,
    },
  ];

  ngOnInit() {
    this.itemTypeOptions = getItemTypeOptions();
    this.moneyUnitOptions = getMoneyUnitOptions();
    this.armorTypeOptions = getArmorTypeOptions();
    this.toolTypeOptions = getToolTypeOptions();

    // Kombiniere die Arrays
    this.items = [...this.weapons, ...this.armors, ...this.tools];

    // Hole das Objekt mit der bestimmten ID
    this.currentItem = this.getItemById(this.id);
    if (this.currentItem) {
      console.log('Gefundenes Objekt:', this.currentItem);
    } else {
      console.log('Objekt nicht gefunden');
    }

    this.attacks = this.getCurrentItemAttacks();
  }

  getItemById(id: number): Weapon | Armor | Tool | undefined {
    return this.items.find((item) => item.id === id);
  }

  getName(): string {
    return this.currentItem?.name || '';
  }

  getType(): ItemType {
    return this.currentItem?.type || ItemType.Weapon;
  }

  isTypeWeapon(): boolean {
    return this.getType() === ItemType.Weapon;
  }

  isTypeArmor(): boolean {
    return this.getType() === ItemType.Armor;
  }

  isTypeTool(): boolean {
    return this.getType() === ItemType.Tool;
  }

  getCostAmount(): number {
    return this.currentItem?.cost?.amount || 0;
  }

  getCostMoneyUnit(): MoneyUnit {
    return this.currentItem?.cost?.unit || MoneyUnit.GOLD;
  }

  getWeight(): number {
    return this.currentItem?.weight || 0;
  }

  descriptionMaxLength = 500;
  getDescription(): string {
    return this.currentItem?.description || '';
  }
  get descriptionLength(): number {
    return this.getDescription().length || 0;
  }

  //* Attacks

  selectedAttack: Attack | null = null;
  getCurrentItemAttacks(): Attack[] {
    if (this.isWeapon(this.currentItem)) {
      return this.currentItem.attacks || [];
    } else {
      return [];
    }
  }

  isWeapon(item: any): item is Weapon {
    return item && 'attacks' in item;
  }

  getDiceTypes(diceData: DiceData | undefined): string {
    if (!diceData) {
      return '';
    }

    return formatDamage(diceData);
  }

  showAttackOverlay(event: Event, attack: Attack, overlayPanel: any) {
    this.selectedAttack = attack;
    overlayPanel.toggle(event);
  }

  hideAttackOverlay(overlayPanel: any) {
    overlayPanel.hide();
  }

  //* Armor

  getArmorClass(): number {
    if (this.isArmor(this.currentItem)) {
      return this.currentItem.armorClass;
    } else {
      return 0;
    }
  }

  getArmorType(): ArmorType {
    if (this.isArmor(this.currentItem)) {
      return this.currentItem.armorType;
    } else {
      return ArmorType.Light;
    }
  }

  isArmor(item: any): item is Armor {
    return item && 'armorClass' in item && 'armorType' in item;
  }

  //* Tools

  getToolType(): ToolType {
    if (this.isTool(this.currentItem)) {
      return this.currentItem.toolType;
    } else {
      return ToolType.Thieves;
    }
  }

  isTool(item: any): item is Tool {
    return item && 'toolType' in item;
  }
}
