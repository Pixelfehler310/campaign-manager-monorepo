import { Action, DamageType } from './actions';
import { Attributes } from './attributes';
import { Ability, SizeCategory } from './entities';
import { Skills } from './skills';

export interface DamageResponse {
  damageType: DamageType;
  effect: DamageEffect;
}

export interface DamageEffect {
  effect: 'immune' | 'vulnerable' | 'resistant';
}

export interface Language {
  name: string;
  note?: string;
}

export enum ChallengeRating { // Coool, aber warum nicht einfach ne Zahl? xD
  CR_0 = '0',
  CR_1_8 = '1/8',
  CR_1_4 = '1/4',
  CR_1_2 = '1/2',
  CR_1 = '1',
  CR_2 = '2',
  CR_3 = '3',
  CR_4 = '4',
  CR_5 = '5',
  CR_6 = '6',
  CR_7 = '7',
  CR_8 = '8',
  CR_9 = '9',
  CR_10 = '10',
  CR_11 = '11',
  CR_12 = '12',
  CR_13 = '13',
  CR_14 = '14',
  CR_15 = '15',
  CR_16 = '16',
  CR_17 = '17',
  CR_18 = '18',
  CR_19 = '19',
  CR_20 = '20',
  CR_21 = '21',
  CR_22 = '22',
  CR_23 = '23',
  CR_24 = '24',
  CR_25 = '25',
  CR_26 = '26',
  CR_27 = '27',
  CR_28 = '28',
  CR_29 = '29',
  CR_30 = '30',
}

export interface Monster {
  id: number;
  // TODO Parent class Entity for Player & Others 3
  name: string;
  type: string;
  description?: string;
  attributes?: Attributes;
  actions?: Action[];
  skills?: Skills;
  abilities?: Ability[];
  traits?: string[];
  challengeRating?: ChallengeRating;
  img?: string;
  damageResponses?: DamageResponse[]; // TODO auf wiki card updaten 2
  sizeCategory: SizeCategory;
  languages?: Language[]; // TODO müsste eigener Typ, da feste Werte // SIS: keine festen werte, wegen homebrew content, aber eigener typ ist trd gut, glaube nur dass die beschreibung sehr selten relevant ist und standardmäßig ausgeblendet werden soll, also lieber bei language p autocomplete mit diesen chips da drin, in den items beim autocomplete vorschlag kann man dann ggf die beschreibung mit anzeigen
  languageNoteOverride?: string;
}
