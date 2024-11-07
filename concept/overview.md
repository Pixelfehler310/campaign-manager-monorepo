## OverviewComponent

Kann alle relevanten Elemente in Cards anzeigen, dazu gehören:

- (Spieler-) Charaktere
- Gegenstände
- Zauber
- Monster
- Regionen
- Spezies
- Klassen

Übersicht soll ein Array aus beliebigen Objekten dieser Arten als Input bekommen. Über templating bzw ng-switches soll dann das anzeigen der cards passieren.

### Daten

#### Charaktere

```javascript
interface Character {
  img?: string // Show on Card else default
  name: string; // Show on Card
  player?: string; // Show on Card else NPC
  classes?: Class[]; // Show on Card else None
  species: Species; // Show on Card
  level: number; // Show on Card if > 0
  description: string // Show on Card if NPC (ellipsis)
  background: string;
  stats: CharacterStats;
  abilities: Ability[];
  inventory: Item[];
  spells: Spell[];
  appearance: string;
  relationships: Relationship[];
}
```

#### Gegenstände

```javascript
interface Item {
  img?: string; // Show on Card else default
  name: string; // Show on Card
  description: string;
  type: string; // Show on Card
  properties: string[];
}
```

#### Zauber

```javascript
interface Spell {
  img?: string; // Show on Card
  name: string; // Show on Card
  level: number; // Show on Card, 'Cantrip' if === 0
  school?: string;
  description: string;
  components: string[]; // Show on Card
  castingTime: string; // Show on Card
  range: string; // Show on Card
  duration: string; // Show on Card
  concentration: boolean; // Show on Card
  // learnableBy: Class[] ? // TODO Besser aus Classes Laden
}
```

#### Monster

```javascript
interface Monster {
  name: string; // Show on Card
  type: string; // Show on Card
  description: string;
  stats: MonsterStats;
  abilities: Ability[];
  traits: Trait[];
}
```

#### Regionen

```javascript
interface Region {
  url?: string; // Show on Card
  name: string; // Show on Card
  description: string;
  notableFeatures: string[];
  locations: Location[];
}
```

#### Spezies

```javascript
interface Species {
  url?: string; // Show on Card
  name: string; // Show on Card
  description: string;
  traits: Trait[];
  abilities: Ability[];
}
```

#### Klassen

```javascript
interface Class {
  url?: string; // Show on Card
  name: string; // Show on Card
  description: string;
  abilities: Ability[];
  subclasses: Subclass[];
  // TODO Learnable Spells
}

interface Subclass extends Class {
  url?: string; // Show on Card
  subclass_name: string; // Show on Card
  subclass_description: string;
  parentclass: string; // Show on Card
}
```
