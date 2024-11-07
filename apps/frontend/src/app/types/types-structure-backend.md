// todo reihenfolge anpassen

#### actions.ts

- Action (interface)

```python

  class Action:
    def __init__(self, name: str, type: ActionType, description: Optional[str] = None):
        self.name = name
        self.description = description
        self.type = type

class Attack(Action):
    def __init__(self, name: str, type: ActionType, range: int, attack_bonus: int, proficiency: bool,
                 damage: DiceData, damage_type: DamageType, attack_type: AttackType, description: Optional[str] = None):
        super().__init__(name, type, description)
        self.range = range
        self.attack_bonus = attack_bonus
        self.proficiency = proficiency
        self.damage = damage
        self.damage_type = damage_type
        self.attack_type = attack_type

  class Attributes:
    def __init__(self,
                 str_value: AttributeValue,
                 dex_value: AttributeValue,
                 con_value: AttributeValue,
                 int_value: AttributeValue,
                 wis_value: AttributeValue,
                 cha_value: AttributeValue):
        self.STR = str_value
        self.DEX = dex_value
        self.CON = con_value
        self.INT = int_value
        self.WIS = wis_value
        self.CHA = cha_value

```

- ActionType (enum)
- Attack (interface)
- AttackType (enum)
- DamageType (enum)

#### attributes.ts

- Attribute (enum)
- Attributes (type)
- AttributeValue (interface)

#### character.ts

- Lifestyle (enum)
- Appearance (interface)
- Character (interface)
- Species (interface)
- Class (interface)
- Subclass (interface)

#### entities.ts

- SizeCategory (enum)
- getSizeCategory(size:number): SizeCategory | undefined (method)
- HpInfo (interface)
- Ability (interface)
- Condition (enum)

#### monster.ts

- Monster (interface)

#### skills.ts

- Skill (enum)
- skillAttributes (Map für Skill -> {label, modifierAttribute})
- SkillProficiency (type)
- Skills (type)
- WeaponSkills (interface)

#### campaign.ts

- Campaign (interface)
- World (interface)
- Story (interface)
- Event (interface)

#### quests.ts

- Encounter (interface)
- Quest (interface)

#### regions.ts

- Region (interface)
- Location (interface)
- Faction (interface)
- Rumor (interface)

#### dice.ts

- DiceType (enum)
- DiceData (type)

#### inventory.ts

- Inventory (interface)
- Item (interface)
- ItemType (enum)
- Weapon (interface)

#### spells.ts

- Spell (interface)
- SpellLevel (interface)
- SpellCasterInfo (interface)
