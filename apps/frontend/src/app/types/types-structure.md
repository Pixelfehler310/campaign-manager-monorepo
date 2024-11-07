// todo reihenfolge anpassen

#### actions.ts

- Action (interface)
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
