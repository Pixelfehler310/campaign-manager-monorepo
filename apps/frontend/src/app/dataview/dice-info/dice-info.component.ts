import { Component, Input, OnInit } from '@angular/core';
import { DiceData, DiceType, getDiceTypes } from '@campaign-manager/shared';

@Component({
  selector: 'app-dice-info',
  templateUrl: './dice-info.component.html',
  styleUrls: ['./dice-info.component.scss'],
})
export class DiceInfoComponent implements OnInit {
  @Input() diceData?: DiceData;

  constructor() {}

  ngOnInit() {
    if (!this.diceData) {
      this.diceData = {
        [DiceType.D2]: 1,
        [DiceType.D4]: 2,
        [DiceType.D6]: 3,
        [DiceType.D8]: 4,
        [DiceType.D10]: 5,
        [DiceType.D12]: 6,
        [DiceType.D20]: 7,
        [DiceType.D100]: 8,
      };
    }
  }

  getDiceTypes() {
    if (!this.diceData) return [];
    return getDiceTypes(this.diceData);
  }

  getBorderForDiceType(dice: DiceType) {
    switch (dice) {
      case DiceType.D2:
        return 'red';
      case DiceType.D4:
        return 'blue';
      case DiceType.D6:
        return 'yellow';
      case DiceType.D8:
        return 'green';
      case DiceType.D10:
        return 'orange';
      case DiceType.D12:
        return 'purple';
      case DiceType.D20:
        return 'cyan';
      case DiceType.D100:
        return 'slate';
      default:
        return '';
    }
  }
}
