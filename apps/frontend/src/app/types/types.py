# todo alles hier nur von gpt generiert, nicht perfekt, sollte beim umsetzen kritisch betrachtet werden

from typing import List, Optional, Dict, Any
from enum import Enum
from typing import Dict, Optional
from typing import Optional, Dict
from typing import List, Optional


class Action:
    def __init__(self, name: str, action_type: str, description: Optional[str] = None):
        self.name = name
        self.description = description
        self.type = action_type  # Einfach als String statt Enum


class Attack(Action):
    def __init__(self, name: str, action_type: str, range: int, attack_bonus: int, proficiency: bool,
                 damage: None, damage_type: str, attack_type: str, description: Optional[str] = None):
        super().__init__(name, action_type, description)
        self.range = range
        self.attack_bonus = attack_bonus
        self.proficiency = proficiency
        self.damage = damage
        self.damage_type = damage_type  # Als String statt Enum
        self.attack_type = attack_type  # Als String statt Enum


class AttributeValue:
    def __init__(self, value: int, prof: bool):
        self.value = value
        self.prof = prof


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


# Implementierung der Hauptklassen
class Campaign:
    def __init__(self, name: str, description: str, world: 'World', story: 'Story', player_characters: list[int]):
        self.name = name
        self.description = description
        self.world = world
        self.story = story
        self.player_characters = player_characters  # Referenzen auf Charakter-IDs


class World:
    def __init__(self, name: str, regions: list[int], factions: list[int], key_npcs: list[int], encounters: list[int], quests: list[int]):
        self.name = name
        self.regions = regions  # Referenzen auf Region-IDs
        self.factions = factions  # Referenzen auf Faction-IDs
        self.key_npcs = key_npcs  # Referenzen auf Charakter-IDs
        self.encounters = encounters  # Referenzen auf Encounter-IDs
        self.quests = quests  # Referenzen auf Quest-IDs


class Story:
    def __init__(self, title: str, overview: str, acts: list[int]):
        self.title = title
        self.overview = overview
        self.acts = acts  # Referenzen auf Act-IDs


class Act:
    def __init__(self, name: str, description: str, chapters: list[int]):
        self.name = name
        self.description = description
        self.chapters = chapters  # Referenzen auf Chapter-IDs


class Chapter:
    def __init__(self, name: str, description: str, timeline: list[int]):
        self.name = name
        self.description = description
        self.timeline = timeline  # Referenzen auf Event- oder Quest-IDs


class Faction:
    def __init__(self, name: str, description: str, leaders: list[int], allies: list[int], enemies: list[int]):
        self.name = name
        self.description = description
        self.leaders = leaders  # Referenzen auf Charakter-IDs
        self.allies = allies  # Referenzen auf Charakter-IDs
        self.enemies = enemies  # Referenzen auf Charakter-IDs


class Event:
    def __init__(self, name: str, description: str, outcome: str, location: int):
        self.name = name
        self.description = description
        self.outcome = outcome
        self.location = location  # Referenz auf Location-ID


class Encounter(Event):
    def __init__(self, name: str, description: str, outcome: str, location: int, monsters: list[int]):
        super().__init__(name, description, outcome, location)
        self.monsters = monsters  # Referenzen auf Monster-IDs


class Quest:
    def __init__(self, name: str, description: str, objectives: list[str], rewards: list[int], starting_point: int, npcs_involved: list[int]):
        self.name = name
        self.description = description
        self.objectives = objectives
        self.rewards = rewards  # Referenzen auf Item-IDs
        self.starting_point = starting_point  # Referenz auf Location-ID
        self.npcs_involved = npcs_involved  # Referenzen auf Charakter-IDs


class Appearance:
    def __init__(self, size_category: str, height: Optional[float] = None, weight: Optional[float] = None,
                 visuals: Optional[str] = None, eye_color: Optional[str] = None,
                 hair_color: Optional[str] = None, skin_color: Optional[str] = None,
                 img: Optional[str] = None):
        self.height = height
        self.weight = weight
        self.visuals = visuals
        self.eye_color = eye_color
        self.hair_color = hair_color
        self.skin_color = skin_color
        self.img = img
        self.size_category = size_category


class Character:
    def __init__(self, name: str, species: str,
                 img: Optional[str] = None, level: Optional[int] = None,
                 gender: Optional[str] = None, background: Optional[str] = None,
                 player: Optional[str] = None, abilities: Optional[List[str]] = None,
                 inspiration: Optional[bool] = None, death_saves: List[bool] = None,
                 attributes: Optional[dict] = None, skills: Optional[dict] = None,
                 speed: Optional[int] = None, ac: Optional[int] = None,
                 hp: Optional[dict] = None, actions: Optional[List[dict]] = None,
                 conditions: Optional[List[dict]] = None, age: Optional[int] = None,
                 personality: Optional[str] = None, ideals: Optional[str] = None,
                 bonds: Optional[str] = None, flaws: Optional[str] = None,
                 alignment: Optional[str] = None, appearance: Optional[Appearance] = None,
                 description: Optional[str] = None, relationships: Optional[List] = None,
                 languages: Optional[List[str]] = None, friendly_factions: Optional[List[str]] = None,
                 enemy_factions: Optional[List[str]] = None, faith: Optional[str] = None,
                 lifestyle: Optional[str] = None, inventory: Optional[dict] = None,
                 spell_caster_info: Optional[dict] = None):

        self.img = img
        self.name = name
        self.level = level
        self.gender = gender
        self.background = background
        self.species = species
        self.player = player
        self.abilities = abilities or []

        self.inspiration = inspiration
        self.death_saves = death_saves or []
        self.attributes = attributes
        self.skills = skills
        self.speed = speed
        self.ac = ac
        self.hp = hp
        self.actions = actions or []
        self.conditions = conditions or []

        self.age = age
        self.personality = personality
        self.ideals = ideals
        self.bonds = bonds
        self.flaws = flaws
        self.alignment = alignment
        self.appearance = appearance
        self.description = description
        self.relationships = relationships or []
        self.languages = languages or []
        self.friendly_factions = friendly_factions or []
        self.enemy_factions = enemy_factions or []
        self.faith = faith
        self.lifestyle = lifestyle
        self.inventory = inventory
        self.spell_caster_info = spell_caster_info


class Species:
    def __init__(self, name: str, traits: Optional[List[str]] = None,
                 img: Optional[str] = None, description: Optional[str] = None,
                 abilities: Optional[List[dict]] = None):
        self.img = img
        self.name = name
        self.description = description
        self.traits = traits or []
        self.abilities = abilities or []


class Class:
    def __init__(self, name: str, img: Optional[str] = None,
                 description: Optional[str] = None, abilities: Optional[List[dict]] = None,
                 subclasses: Optional[List['Subclass']] = None,
                 learnable_spells: Optional[List[str]] = None):
        self.img = img
        self.name = name
        self.description = description
        self.abilities = abilities or []
        self.subclasses = subclasses or []
        self.learnable_spells = learnable_spells or []


class Subclass(Class):
    def __init__(self, subclass_name: str, subclass_description: str,
                 parent_class: str, img: Optional[str] = None,
                 abilities: Optional[List[dict]] = None):
        super().__init__(name=subclass_name, img=img, abilities=abilities)
        self.subclass_description = subclass_description
        self.parent_class = parent_class


class DiceType(Enum):
    D2 = 2
    D4 = 4
    D6 = 6
    D8 = 8
    D10 = 10
    D12 = 12
    D20 = 20
    D100 = 100


DiceData = Dict[DiceType, Optional[int]]


class HpInfo:
    def __init__(self, max: int, current: int, dice: 'DiceType',
                 temp: Optional[int] = None, regeneration_dice_count: Optional[int] = None):
        self.max = max
        self.current = current
        self.temp = temp
        self.dice = dice
        self.regeneration_dice_count = regeneration_dice_count


class Ability:
    def __init__(self, name: str, description: str):
        self.name = name
        self.description = description


class PRIMARY_KEY_OF(Enum):
    Character = 'name'
    Class = 'name'
    Species = 'name'
    Item = 'name'
    Spell = 'name'
    Region = 'name'
    Monster = 'name'
    Encounter = 'name'
    Location = 'name'
    Faction = 'name'
    Event = 'name'
    Quest = 'name'
    Rumor = 'name'
    Story = 'name'
    Act = 'name'
    Chapter = 'name'


class Attribute(Enum):
    STR = 'Strength'
    DEX = 'Dexterity'
    CON = 'Constitution'
    INT = 'Intelligence'
    WIS = 'Wisdom'
    CHA = 'Charisma'


class MoneyUnit(Enum):
    PLATIN = 1
    GOLD = 2
    SILVER = 3
    COPPER = 4


class ItemType(Enum):
    Weapon = 'Weapon'
    Armor = 'Armor'
    Potion = 'Potion'
    Gear = 'Gear'
    Food = 'Food'
    Tool = 'Tool'
    Scroll = 'Scroll'
    Artifact = 'Artifact'


class Cost:
    def __init__(self, amount: int, unit: MoneyUnit):
        self.amount = amount
        self.unit = unit


class Item:
    def __init__(self, name: str, description: Optional[str] = None,
                 img: Optional[str] = None, type: Optional[ItemType] = None,
                 cost: Optional[Cost] = None):
        self.name = name
        self.description = description
        self.img = img
        self.type = type
        self.cost = cost


class Weapon(Item):
    def __init__(self, name: str, attacks: List['Attack'],
                 description: Optional[str] = None, img: Optional[str] = None,
                 type: Optional[ItemType] = ItemType.Weapon,
                 cost: Optional[Cost] = None):
        super().__init__(name, description, img, type, cost)
        self.attacks = attacks


class Inventory:
    def __init__(self, money: Optional[Dict[MoneyUnit, int]] = None,
                 items: List[Item] = None):
        self.money = money if money else {
            MoneyUnit.PLATIN: 0,
            MoneyUnit.GOLD: 0,
            MoneyUnit.SILVER: 0,
            MoneyUnit.COPPER: 0,
        }
        self.items = items if items else []

    def calculate_item_quantity(self):
        # Implementiere die Logik zur Berechnung der Menge hier
        pass


class Skill(Enum):
    Acrobatics = 'acrobatics'
    Arcana = 'arcana'
    Athletics = 'athletics'
    Deception = 'deception'
    History = 'history'
    Insight = 'insight'
    Intimidation = 'intimidation'
    Investigation = 'investigation'
    Medicine = 'medicine'
    Nature = 'nature'
    Perception = 'perception'
    Performance = 'performance'
    Persuasion = 'persuasion'
    Religion = 'religion'
    SleightOfHand = 'sleightOfHand'
    Stealth = 'stealth'
    Survival = 'survival'
    AnimalHandling = 'animalHandling'


# Mapping für Skills und ihre Modifier-Attribute
skill_attributes: Dict[Skill, Attribute] = {
    Skill.Acrobatics: Attribute.DEX,
    Skill.AnimalHandling: Attribute.WIS,
    Skill.Arcana: Attribute.INT,
    Skill.Athletics: Attribute.STR,
    Skill.Deception: Attribute.CHA,
    Skill.History: Attribute.INT,
    Skill.Insight: Attribute.WIS,
    Skill.Intimidation: Attribute.CHA,
    Skill.Investigation: Attribute.INT,
    Skill.Medicine: Attribute.WIS,
    Skill.Nature: Attribute.INT,
    Skill.Perception: Attribute.WIS,
    Skill.Performance: Attribute.CHA,
    Skill.Persuasion: Attribute.CHA,
    Skill.Religion: Attribute.INT,
    Skill.SleightOfHand: Attribute.DEX,
    Skill.Stealth: Attribute.DEX,
    Skill.Survival: Attribute.WIS,
}

# Typ für Skill-Proficiencies


class SkillProficiency(Enum):
    Untrained = 'untrained'
    Proficient = 'proficient'
    Expert = 'expert'

# Typ für Skills mit Proficiencies


class Skills:
    def __init__(self):
        self.skills: Dict[Skill, Optional[SkillProficiency]] = {}
        self.jack_of_all_trades: Optional[bool] = None
        self.weapon_skills: Optional['WeaponSkills'] = None

# Klasse für Waffenfähigkeiten


class WeaponSkills:
    def __init__(self):
        self.armor: Dict[str, Optional[bool]] = {
            'light': None,
            'medium': None,
            'heavy': None,
            'shields': None,
        }
        self.weapons: Dict[str, Optional[bool]] = {
            'easy': None,
            'war': None,
            'other': None,
        }


class Monster:
    def __init__(self, name: str, type: str,
                 size_category: 'Small',
                 description: Optional[str] = None,
                 attributes: Optional[Attributes] = None,
                 actions: Optional[List[Action]] = None,
                 skills: Optional[Skills] = None,
                 abilities: Optional[List[Ability]] = None,
                 traits: Optional[List[str]] = None,
                 challenge_rating: Optional[float] = None,
                 img: Optional[str] = None,
                 immunities: Optional[List['DamageType']] = None,
                 resistances: Optional[List['DamageType']] = None,
                 # Default to Medium size category
                 vulnerabilities: Optional[List['DamageType']] = None,):
        self.name = name
        self.type = type
        self.description = description
        self.attributes = attributes
        self.actions = actions if actions else []
        self.skills = skills
        self.abilities = abilities if abilities else []
        self.traits = traits if traits else []
        self.challenge_rating = challenge_rating
        self.img = img
        self.immunities = immunities if immunities else []
        self.resistances = resistances if resistances else []
        self.vulnerabilities = vulnerabilities if vulnerabilities else []
        self.size_category = size_category


class Region:
    def __init__(self,
                 name: str,
                 img: Optional[str] = None,
                 description: Optional[str] = None,
                 notable_features: Optional[List[str]] = None,
                 locations: Optional[List[Location]
                                     ] = None,  # Mapped to Location
                 # Mapped to Faction
                 factions: Optional[List[Faction]] = None,
                 quests: Optional[List[Quest]] = None,        # Mapped to Quest
                 rumors: Optional[List['Rumor']] = None):      # Mapped to Rumor
        self.img = img
        self.name = name
        self.description = description
        self.notable_features = notable_features if notable_features else []
        self.locations = locations if locations else []
        self.factions = factions if factions else []
        self.quests = quests if quests else []
        self.rumors = rumors if rumors else []


class Rumor:
    def __init__(self,
                 name: str,
                 from_characters: List[Character],  # Mapped to Character
                 content: str):
        self.name = name
        self.from_characters = from_characters
        self.content = content


class Location:
    def __init__(self,
                 name: str,
                 type: str,
                 description: str,
                 notable_features: List[str],
                 encounters: List[Encounter]):  # Mapped to Encounter
        self.name = name
        self.type = type
        self.description = description
        self.notable_features = notable_features
        self.encounters = encounters


class Spell:
    def __init__(self,
                 name: str,
                 level: int,
                 img: Optional[str] = None,  # Show on Card
                 school: Optional[str] = None,
                 casting_time: Optional[int] = None,  # in seconds
                 duration: Optional[int] = None,       # in seconds
                 description: Optional[str] = None,
                 range: Optional[str] = None,
                 components: Optional[List[str]] = None,
                 concentration: Optional[bool] = None,  # Show on Card
                 dice_data: Optional[DiceData] = None):
        self.img = img
        self.name = name
        self.level = level
        self.school = school
        self.casting_time = casting_time
        self.duration = duration
        self.description = description
        self.range = range
        self.components = components if components else []
        self.concentration = concentration
        self.dice_data = dice_data


class SpellLevel:
    def __init__(self,
                 spells: List[Spell],  # Mapped to Spell
                 current_slots: int,
                 max_slots: int):
        self.spells = spells
        self.current_slots = current_slots
        self.max_slots = max_slots


class SpellCasterInfo:
    def __init__(self,
                 spell_level: List[SpellLevel],  # List of SpellLevel
                 spell_class: Optional[str] = None,  # TODO: Class
                 spell_attribute: Optional[Attribute] = None,
                 spell_attack_bonus: Optional[int] = None,
                 # number / implizit errechenbar
                 spell_saving_throw: Optional[str] = None):
        self.spell_level = spell_level
        self.spell_class = spell_class
        self.spell_attribute = spell_attribute
        self.spell_attack_bonus = spell_attack_bonus
        self.spell_saving_throw = spell_saving_throw
