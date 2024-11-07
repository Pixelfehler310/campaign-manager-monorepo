"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  ActionType: () => ActionType,
  ArmorType: () => ArmorType,
  AttackType: () => AttackType,
  Attribute: () => Attribute,
  ChallengeRating: () => ChallengeRating,
  Condition: () => Condition,
  DamageType: () => DamageType,
  DiceType: () => DiceType,
  ItemType: () => ItemType,
  Lifestyle: () => Lifestyle,
  MoneyUnit: () => MoneyUnit,
  SizeCategory: () => SizeCategory,
  Skill: () => Skill,
  ToolType: () => ToolType,
  formatDamage: () => formatDamage,
  getArmorTypeOptions: () => getArmorTypeOptions,
  getDiceEntries: () => getDiceEntries,
  getDiceKeys: () => getDiceKeys,
  getDiceTypes: () => getDiceTypes,
  getItemTypeOptions: () => getItemTypeOptions,
  getMoneyUnitOptions: () => getMoneyUnitOptions,
  getSizeCategory: () => getSizeCategory,
  getSizeCategoryEntries: () => getSizeCategoryEntries,
  getToolTypeOptions: () => getToolTypeOptions,
  isFullEntity: () => isFullEntity,
  isFullEntityOrPrimaryKey: () => isFullEntityOrPrimaryKey,
  shared: () => shared,
  skillAttributes: () => skillAttributes,
  toAction: () => toAction
});
module.exports = __toCommonJS(src_exports);

// src/lib/shared.ts
function shared() {
  return "shared";
}

// src/lib/types.ts
var ActionType = /* @__PURE__ */ ((ActionType2) => {
  ActionType2["Attack"] = "Attack";
  ActionType2["Melee"] = "Melee";
  ActionType2["Defense"] = "Defense";
  ActionType2["Heal"] = "Heal";
  ActionType2["Utility"] = "Utility";
  return ActionType2;
})(ActionType || {});
var AttackType = /* @__PURE__ */ ((AttackType2) => {
  AttackType2["Melee"] = "Melee";
  AttackType2["Ranged"] = "Ranged";
  AttackType2["Spell"] = "Spell";
  return AttackType2;
})(AttackType || {});
var DamageType = /* @__PURE__ */ ((DamageType2) => {
  DamageType2["Slashing"] = "Slashing";
  DamageType2["Lightning"] = "Lightning";
  DamageType2["Bludgeoning"] = "Bludgeoning";
  DamageType2["Piercing"] = "Piercing";
  DamageType2["Fire"] = "Fire";
  DamageType2["Cold"] = "Cold";
  DamageType2["Poison"] = "Poison";
  DamageType2["Acid"] = "Acid";
  DamageType2["Psychic"] = "Psychic";
  DamageType2["Necrotic"] = "Necrotic";
  DamageType2["Radiant"] = "Radiant";
  DamageType2["Thunder"] = "Thunder";
  DamageType2["Force"] = "Force";
  return DamageType2;
})(DamageType || {});
var Attribute = /* @__PURE__ */ ((Attribute2) => {
  Attribute2["STR"] = "Strength";
  Attribute2["DEX"] = "Dexterity";
  Attribute2["CON"] = "Constitution";
  Attribute2["INT"] = "Intelligence";
  Attribute2["WIS"] = "Wisdom";
  Attribute2["CHA"] = "Charisma";
  return Attribute2;
})(Attribute || {});
var Lifestyle = /* @__PURE__ */ ((Lifestyle2) => {
  Lifestyle2["Wretched"] = "Wretched";
  Lifestyle2["Squalid"] = "Squalid";
  Lifestyle2["Poor"] = "Poor";
  Lifestyle2["Modest"] = "Modest";
  Lifestyle2["Comfortable"] = "Comfortable";
  Lifestyle2["Wealthy"] = "Wealthy";
  Lifestyle2["Aristocratic"] = "Aristocratic";
  return Lifestyle2;
})(Lifestyle || {});
var DiceType = /* @__PURE__ */ ((DiceType2) => {
  DiceType2[DiceType2["D2"] = 2] = "D2";
  DiceType2[DiceType2["D4"] = 4] = "D4";
  DiceType2[DiceType2["D6"] = 6] = "D6";
  DiceType2[DiceType2["D8"] = 8] = "D8";
  DiceType2[DiceType2["D10"] = 10] = "D10";
  DiceType2[DiceType2["D12"] = 12] = "D12";
  DiceType2[DiceType2["D20"] = 20] = "D20";
  DiceType2[DiceType2["D100"] = 100] = "D100";
  return DiceType2;
})(DiceType || {});
function getDiceTypes(diceData) {
  const diceTypes = [];
  for (const [key, value] of Object.entries(diceData)) {
    if (value) {
      diceTypes.push({ dice: Number(key), count: value });
    }
  }
  return diceTypes;
}
function formatDamage(damage) {
  return Object.entries(damage).map(([diceType, count]) => `${count}x D${diceType}`).join(", ");
}
function getDiceKeys() {
  return Object.keys(DiceType).filter((key) => isNaN(Number(key)));
}
function getDiceEntries() {
  return getDiceKeys().map((key) => ({
    label: key,
    value: DiceType[key]
  }));
}
var SizeCategory = /* @__PURE__ */ ((SizeCategory2) => {
  SizeCategory2["Tiny"] = "Tiny";
  SizeCategory2["Small"] = "Small";
  SizeCategory2["Medium"] = "Medium";
  SizeCategory2["Large"] = "Large";
  SizeCategory2["Huge"] = "Huge";
  SizeCategory2["Gargantuan"] = "Gargantuan";
  return SizeCategory2;
})(SizeCategory || {});
function getSizeCategory(size) {
  if (size == 1)
    return "Tiny" /* Tiny */;
  if (size == 2)
    return "Small" /* Small */;
  if (size == 3)
    return "Medium" /* Medium */;
  if (size == 4)
    return "Large" /* Large */;
  if (size == 5)
    return "Huge" /* Huge */;
  if (size == 6)
    return "Gargantuan" /* Gargantuan */;
  return void 0;
}
function getSizeCategoryEntries() {
  return Object.entries(SizeCategory).map(([key, value]) => ({
    label: key,
    value
  }));
}
var Condition = /* @__PURE__ */ ((Condition2) => {
  Condition2["Blinded"] = "Blinded";
  Condition2["Charmed"] = "Charmed";
  Condition2["Deafened"] = "Deafened";
  Condition2["Frightened"] = "Frightened";
  Condition2["Paralyzed"] = "Paralyzed";
  Condition2["Petrified"] = "Petrified";
  Condition2["Poisoned"] = "Poisoned";
  Condition2["Prone"] = "Prone";
  Condition2["Restrained"] = "Restrained";
  Condition2["Stunned"] = "Stunned";
  Condition2["Unconscious"] = "Unconscious";
  return Condition2;
})(Condition || {});
function isFullEntity(entity) {
  console.warn(
    "full Obj",
    entity,
    Object.keys(entity).length
  );
  console.warn(
    "reference Obj",
    entity,
    Object.keys(entity).length
  );
  return Object.keys(entity).length > Object.keys(entity).length;
}
function isFullEntityOrPrimaryKey(entity) {
  console.warn(
    "full Obj",
    entity,
    Object.keys(entity).length
  );
  console.warn(
    "reference Obj",
    entity,
    Object.keys(entity).length
  );
  return Object.keys(entity).length > Object.keys(entity).length;
}
var MoneyUnit = /* @__PURE__ */ ((MoneyUnit2) => {
  MoneyUnit2[MoneyUnit2["PLATIN"] = 1] = "PLATIN";
  MoneyUnit2[MoneyUnit2["GOLD"] = 2] = "GOLD";
  MoneyUnit2[MoneyUnit2["SILVER"] = 3] = "SILVER";
  MoneyUnit2[MoneyUnit2["COPPER"] = 4] = "COPPER";
  return MoneyUnit2;
})(MoneyUnit || {});
function getMoneyUnitOptions() {
  return Object.keys(MoneyUnit).filter((key) => isNaN(Number(key))).map((key) => ({ label: key, value: MoneyUnit[key] }));
}
var ItemType = /* @__PURE__ */ ((ItemType2) => {
  ItemType2["Weapon"] = "Weapon";
  ItemType2["Armor"] = "Armor";
  ItemType2["Potion"] = "Potion";
  ItemType2["Gear"] = "Gear";
  ItemType2["Food"] = "Food";
  ItemType2["Tool"] = "Tool";
  ItemType2["Scroll"] = "Scroll";
  ItemType2["Artifact"] = "Artifact";
  return ItemType2;
})(ItemType || {});
function getItemTypeOptions() {
  return Object.keys(ItemType).filter((key) => isNaN(Number(key))).map((key) => ({ label: key, value: ItemType[key] }));
}
var ArmorType = /* @__PURE__ */ ((ArmorType2) => {
  ArmorType2["Light"] = "Light";
  ArmorType2["Medium"] = "Medium";
  ArmorType2["Heavy"] = "Heavy";
  ArmorType2["Shield"] = "Shield";
  return ArmorType2;
})(ArmorType || {});
function getArmorTypeOptions() {
  return Object.keys(ArmorType).filter((key) => isNaN(Number(key))).map((key) => ({ label: key, value: ArmorType[key] }));
}
var ToolType = /* @__PURE__ */ ((ToolType2) => {
  ToolType2["Artisan"] = "Artisan";
  ToolType2["Disguise"] = "Disguise";
  ToolType2["Forgery"] = "Forgery";
  ToolType2["Gaming"] = "Gaming";
  ToolType2["Herbalism"] = "Herbalism";
  ToolType2["Musical"] = "Musical";
  ToolType2["Navigator"] = "Navigator";
  ToolType2["Poisoner"] = "Poisoner";
  ToolType2["Thieves"] = "Thieves";
  return ToolType2;
})(ToolType || {});
function getToolTypeOptions() {
  return Object.keys(ToolType).filter((key) => isNaN(Number(key))).map((key) => ({ label: key, value: ToolType[key] }));
}
var ChallengeRating = /* @__PURE__ */ ((ChallengeRating2) => {
  ChallengeRating2["CR_0"] = "0";
  ChallengeRating2["CR_1_8"] = "1/8";
  ChallengeRating2["CR_1_4"] = "1/4";
  ChallengeRating2["CR_1_2"] = "1/2";
  ChallengeRating2["CR_1"] = "1";
  ChallengeRating2["CR_2"] = "2";
  ChallengeRating2["CR_3"] = "3";
  ChallengeRating2["CR_4"] = "4";
  ChallengeRating2["CR_5"] = "5";
  ChallengeRating2["CR_6"] = "6";
  ChallengeRating2["CR_7"] = "7";
  ChallengeRating2["CR_8"] = "8";
  ChallengeRating2["CR_9"] = "9";
  ChallengeRating2["CR_10"] = "10";
  ChallengeRating2["CR_11"] = "11";
  ChallengeRating2["CR_12"] = "12";
  ChallengeRating2["CR_13"] = "13";
  ChallengeRating2["CR_14"] = "14";
  ChallengeRating2["CR_15"] = "15";
  ChallengeRating2["CR_16"] = "16";
  ChallengeRating2["CR_17"] = "17";
  ChallengeRating2["CR_18"] = "18";
  ChallengeRating2["CR_19"] = "19";
  ChallengeRating2["CR_20"] = "20";
  ChallengeRating2["CR_21"] = "21";
  ChallengeRating2["CR_22"] = "22";
  ChallengeRating2["CR_23"] = "23";
  ChallengeRating2["CR_24"] = "24";
  ChallengeRating2["CR_25"] = "25";
  ChallengeRating2["CR_26"] = "26";
  ChallengeRating2["CR_27"] = "27";
  ChallengeRating2["CR_28"] = "28";
  ChallengeRating2["CR_29"] = "29";
  ChallengeRating2["CR_30"] = "30";
  return ChallengeRating2;
})(ChallengeRating || {});
var Skill = /* @__PURE__ */ ((Skill2) => {
  Skill2["Acrobatics"] = "acrobatics";
  Skill2["Arcana"] = "arcana";
  Skill2["Athletics"] = "athletics";
  Skill2["Deception"] = "deception";
  Skill2["History"] = "history";
  Skill2["Insight"] = "insight";
  Skill2["Intimidation"] = "intimidation";
  Skill2["Investigation"] = "investigation";
  Skill2["Medicine"] = "medicine";
  Skill2["Nature"] = "nature";
  Skill2["Perception"] = "perception";
  Skill2["Performance"] = "performance";
  Skill2["Persuasion"] = "persuasion";
  Skill2["Religion"] = "religion";
  Skill2["SleightOfHand"] = "sleightOfHand";
  Skill2["Stealth"] = "stealth";
  Skill2["Survival"] = "survival";
  Skill2["AnimalHandling"] = "animalHandling";
  return Skill2;
})(Skill || {});
var skillAttributes = {
  ["acrobatics" /* Acrobatics */]: { label: "Acrobatics", modifierAttribute: "Dexterity" /* DEX */ },
  ["animalHandling" /* AnimalHandling */]: {
    label: "Animal Handling",
    modifierAttribute: "Wisdom" /* WIS */
  },
  ["arcana" /* Arcana */]: { label: "Arcana", modifierAttribute: "Intelligence" /* INT */ },
  ["athletics" /* Athletics */]: { label: "Athletics", modifierAttribute: "Strength" /* STR */ },
  ["deception" /* Deception */]: { label: "Deception", modifierAttribute: "Charisma" /* CHA */ },
  ["history" /* History */]: { label: "History", modifierAttribute: "Intelligence" /* INT */ },
  ["insight" /* Insight */]: { label: "Insight", modifierAttribute: "Wisdom" /* WIS */ },
  ["intimidation" /* Intimidation */]: {
    label: "Intimidation",
    modifierAttribute: "Charisma" /* CHA */
  },
  ["investigation" /* Investigation */]: {
    label: "Investigation",
    modifierAttribute: "Intelligence" /* INT */
  },
  ["medicine" /* Medicine */]: { label: "Medicine", modifierAttribute: "Wisdom" /* WIS */ },
  ["nature" /* Nature */]: { label: "Nature", modifierAttribute: "Intelligence" /* INT */ },
  ["perception" /* Perception */]: { label: "Perception", modifierAttribute: "Wisdom" /* WIS */ },
  ["performance" /* Performance */]: {
    label: "Performance",
    modifierAttribute: "Charisma" /* CHA */
  },
  ["persuasion" /* Persuasion */]: { label: "Persuasion", modifierAttribute: "Charisma" /* CHA */ },
  ["religion" /* Religion */]: { label: "Religion", modifierAttribute: "Intelligence" /* INT */ },
  ["sleightOfHand" /* SleightOfHand */]: {
    label: "Sleight of Hand",
    modifierAttribute: "Dexterity" /* DEX */
  },
  ["stealth" /* Stealth */]: { label: "Stealth", modifierAttribute: "Dexterity" /* DEX */ },
  ["survival" /* Survival */]: { label: "Survival", modifierAttribute: "Wisdom" /* WIS */ }
};
function toAction(params) {
  return void 0;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ActionType,
  ArmorType,
  AttackType,
  Attribute,
  ChallengeRating,
  Condition,
  DamageType,
  DiceType,
  ItemType,
  Lifestyle,
  MoneyUnit,
  SizeCategory,
  Skill,
  ToolType,
  formatDamage,
  getArmorTypeOptions,
  getDiceEntries,
  getDiceKeys,
  getDiceTypes,
  getItemTypeOptions,
  getMoneyUnitOptions,
  getSizeCategory,
  getSizeCategoryEntries,
  getToolTypeOptions,
  isFullEntity,
  isFullEntityOrPrimaryKey,
  shared,
  skillAttributes,
  toAction
});
