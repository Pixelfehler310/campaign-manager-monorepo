import { DiceData } from './dice';
import { Attribute } from './attributes';
import { Class } from './characters';
import { PrimaryKeyOf, ReferenceTo } from './general';
import { Action } from './actions';

export function toAction(params: Spell): Action | undefined {
  return undefined;
}

export type SpellType = 'Attack' | 'Heal' | 'Utility'; // ...

//TODO Struktur wurde versucht zu überarbeiten, aber die Auswirkung auf das Backend ist nicht klar. Deshalb habe ich die meisten
//TODO Strukturen erstmal so belassen.
export interface SpellBase {
  id: number;
  img?: string;
  name: string;
  level: number;
  school?: string;
  castingTime?: number; // in Sekunden
  duration?: number; // in Sekunden
  description?: string;
  range?: string;
  components?: SpellComponent[];
  effects?: SpellEffect[];
  // Erstmal raus, todo für später: spell upcasten scalingEffects?: SpellLevelEffect[]; // Fester Wert, meist dicedata / number (beides möglich) in die spezifische spell klasse
  attributeModifier?: Attribute;
  concentration?: boolean; // Anzeigen auf der Karte
  diceData?: DiceData;
}

export interface SpellEffect {
  // todo hier merkst du selber, dass verschiedene typen verschiedene daten benötigen, deswegen würde ich hier auch aufteilen und die nirgends zusammenführen
  // aber dass ein spell mehrere verschiedene effecte hat ist ein sehr guter und sinnvoller gedanke. Es gibt ja z.b auch necromancer spells die dmg austeilen und gleichzeitig healen
  type: 'damage' | 'healing' | 'buff' | 'debuff' | 'utility';
  description: string;
  // duration?: number; // Für Buffs/Debuffs/Utilities in Runden oder Sekunden nur // TODO  in den typen einbauen wo es auch gebracuht wird // btw wir nehmen alles in sekunden / minuten / tagen, 6s ^= einer runde
  // diceData?: DiceData; // Optionaler Würfelwurf für diesen Effekt // TODO s.o
  level: number;
}

// Also:
export interface DamageSpellEffect extends SpellEffect {
  // todo das ergibt irgendwie noch nicht so viel sinn was ich hier mache, müssen wier mal zusammen drüber reden
  type: 'damage';
  attackBonus: number;
  dmgDiceData: number;
}

export interface BuffSpellEffect extends SpellEffect {
  // TODO
}

// export interface SpellLevelEffect {
//   level: number; // Stufe, auf der der Zauber gewirkt wird
//   effects: SpellEffect[]; // z.B. erhöhter Schaden bei höheren Stufen
// }

//TODO sollte man die Zauber am besten so aufteilen? Oder kann man das irgendwie entspannter für die Datenbank machen?
// Datenbank juckt nicht, das krieg ich da alles schon igwie hin :P wir machen da ne richtig hübsche multitable struktur draus, ist schon gut die so aufzuteilen :3
// Alle Spells sollten in ihrer spezifischen form auch eine korrelierende Action speichern, oder zumindest alle infos für eine action bereitstellen (zum beispiel durch extends Action)
// Dann kann man vllt auch attack spells von attackaction extenden lassen usw.
// Kurze info zu dnd spells:
// Es gibt attackspells die wie angriffe sind, wo anfangs ein angriffswurf erforderlich ist (d20), darauf wird ein angriffsbonus gerechnet (im spell definiert)
// Es gibt andere die keinen angriffswurf sondern einen rettungswurf erfordern. da wird über eine formel (aus dem character sheet oder dem phb zu entnehmen) angewendet um zu gucken welchen wert das ANGEGRIFFENE Entity erreichen muss. Oft wird dann immer mit einer festen Anzahl an dmg würfeln geworfen, besteht das angegriffene objekt den rettungswurf, wird der schaden oft halbiert und es werden keine debuffsauferlegt, besteht es den rettungswurf nicht, dann gibt es oft noch nen debuff dazu
// Es gibt bestimmt auch andere Angriffe die keine spells sind die sowas erfordern, also sollte das schon in der action berücksichtigt werden
// bsp: dissonantes flüstern

// Die
// Angriff-Zauber
// export interface AttackSpell extends SpellBase {
//   effects: SpellEffect[]; // Zum Beispiel Schadenseffekte und Debuffs kombiniert
//   damageType: string; // Schadensart, z.B. Feuer, Eis, etc.
//   attackBonus?: number;
//   // Weitere spezifische Felder für Angriff-Zauber
// }

// // Verteidigungs-Zauber
// export interface DefenseSpell extends SpellBase {
//   effects: SpellEffect[]; // Zum Beispiel Schadenseffekte und Debuffs kombiniert
//   shieldValue: number; // Wert des Schilds oder Schutzes
//   duration: number; // Dauer in Sekunden
//   // Weitere spezifische Felder für Verteidigungs-Zauber
// }

// // Heil-Zauber
// export interface HealSpell extends SpellBase {
//   effects: SpellEffect[]; // Zum Beispiel Schadenseffekte und Debuffs kombiniert
//   healingBonus: number; // formel ist manchmal zahl + dice, manchmal nur dice, und manchmal nur zahl
//   healingDice?: DiceData;
//   // Weitere spezifische Felder für Heil-Zauber
// }

// export interface UtilitySpell extends SpellBase {
//   utilityType: string; // z.B. Teleportation, Unsichtbarkeit, etc.
// }

export interface SpellComponent {
  // hübsch :D // item id / type zuordnen
  type: 'verbal' | 'somatic' | 'material';
  description: string; // Beschreibung oder Details
  consumed?: boolean; // Gibt an, ob die Komponente aufgebraucht wird
}

export interface SpellLevel {
  level: number; // Zauberstufe
  spells: ReferenceTo<'Spell'>[]; // Referenzen zu Zaubern dieser Stufe
  currentSlots: number; // Verfügbare Slots auf dieser Stufe
  maxSlots: number; // Maximale Anzahl an Slots auf dieser Stufe
}

export interface SpellCasterInfo {
  entity_id: number;
  spellLevel: SpellLevel[];
  spellClass?: ReferenceTo<'Class'>;
  spellAttribute?: Attribute;
  spellAttackbonus?: number;
  spellSavingThrow?: string; // number / implizit errechenbar, festgelegte Formel
}

export interface Spell {
  // TODO aufteilen in superklasse, atkspell, defspell, healspell, ... 3
  id: number;
  img?: string; // Show on Card
  name: string;
  level: number;
  school?: string;
  castingTime?: number; // in seconds
  duration?: number; // in seconds
  description?: string;
  range?: string;
  components?: string[];
  concentration?: boolean; // Show on Card
  diceData?: DiceData;
}

/*export interface SpellLevel {
//  spells: ReferenceTo<'Spell'>[];
//  currentSlots: number;
//  maxSlots: number;
//}

export interface Spell {
  // TODO aufteilen in superklasse, atkspell, defspell, healspell, ... 3
  id: number;
  img?: string; // Show on Card
  name: string;
  level: number;
  school?: string;
  castingTime?: number; // in seconds
  duration?: number; // in seconds
  description?: string;
  range?: string;
  components?: string[];
  concentration?: boolean; // Show on Card
  diceData?: DiceData;
}

//export interface SpellCasterInfo {
  entity_id: number;
  spellLevel: SpellLevel[];
  spellClass?: ReferenceTo<'Class'>;
  spellAttribute?: Attribute;
  spellAttackbonus?: number;
  spellSavingThrow?: string; // number / implizit errechenbar, festgelegte Formel
}*/
