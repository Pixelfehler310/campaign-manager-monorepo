## MenubarComponent

Oben angeordnete Menubar mit Links zu den wichtigsten Komonponenten:
_`Links`_

- **Players** (Einträge gelesen aus Kampagne)
  - Player 1
  - Player 2
  - Player 3
  - Player 4
  - ...
- **Worldmap**
- **Story** (Einträge gelesen aus Kampagne)
  - Stage 1
  - Stage 2
  - Stage 3
  - ...
- **Wiki**

**`CampaignDropdown`**

_`Rechts`_

Die Spielercharaktere der Kampagne sollen erscheinen wenn ich über "Players" hovere. Players selbst soll aber auch anklickbar sein. Analog soll es bei Story sein. Das kann aber erstmal leer gelassen werden.

### Routen:

- `/campaigns`: Kampagnenübersicht
- `/characters`: Übersicht der Charaktere
- `/characters/:id`: Detailansicht eines Charakters
- `/world`: Weltansicht mit Karte oder Übersicht
- `/world/map`: Weltansicht mit Karte oder Übersicht
- `/world/regions`: Regionsübersicht
- `/world/regions/:id`: Detailansicht einer Region
- `/wiki`: Wiki-Übersicht (Alle)
- `/wiki/spells` : Wiki-Übersicht (Zauber)
- `/wiki/spells/:id` – Einzelansicht (Zauber)
- `/wiki/characters` : Wiki-Übersicht (NPCs)
- `/wiki/characters/:id` – Einzelansicht (NPC)
- `/wiki/classes` : Wiki-Übersicht (Klassen)
- `/wiki/classes/:id` – Einzelansicht (Klasse)
- `/wiki/species` : Wiki-Übersicht (Spezies)
- `/wiki/species/:id` – Einzelansicht (Spezies)
- `/wiki/monsters` : Wiki-Übersicht (Monster)
- `/wiki/monsters/:id` – Einzelansicht (Monster)
- `/wiki/items` : Wiki-Übersicht (Gegenstände)
- `/wiki/items/:id` – Einzelansicht (Gegenstand)
- `/wiki/misc` : Wiki-Übersicht (Andere)
- `/wiki/misc/:id` – Einzelansicht (Andere)

### Daten:

Kampagne:

```ts
interface Campaign {
  name: string;
  description: string;
  world: {
    name: string;
    regions: Region[];
    factions: Faction[];
    keyNPCs: NPC[];
    encounters: Encounter[]; // TODO TYPE INTERFACE
    quests: Quest[];
    magicItems: MagicItem[];
  };
  story: {
    title: string;
    overview: string;
    majorEvents: Event[];
    // ...
  };
  playerCharacters: Character[];
}

interface Character {
  name: string;
  player: string;
  class: string;
  level: number;
  background: string;
  currentQuest: string;
}
```
