---
title: PF2e Rule Element Recipes
description: A list of useful rule element combinations for obscure situations.
---

## Target has X only for you
Example: You have an effect that causes an enemy to be Off-Guard **specifically** to you, the effect origin.

```json
{
  "key": "GrantItem",
  "uuid": "Compendium.pf2e.conditionitems.Item.AJh5ex99aV6VTggg",
  "inMemoryOnly": true,
  "predicate": [
    "origin:signature:{item|origin.signature}"
  ]
}
```

The main parts here are 1. The effect has to be on the enemy and 2. The rule elements that grant them a given debuff have `"origin:signature:{item|origin.signature}"` predicate on them.

Note: You may think of using Ephemeral Effects for this, [but right now you cannot chain them.](https://github.com/foundryvtt/pf2e/issues/17965)

## Bonus based on enemy condition

[At the time of writing](https://github.com/foundryvtt/pf2e/issues/14774) there is no logical way of deriving bonuses from your attackers sheet. As such, the only remaining options for effects like *"You gain a status bonus to AC equal to the enemies Clumsy condition value."* is the following:

```json
{ "key": "FlatModifier", "selector": "ac", "type": "status", "value": 1, "predicate": ["origin:condition:clumsy:1"] },
{ "key": "FlatModifier", "selector": "ac", "type": "status", "value": 2, "predicate": ["origin:condition:clumsy:2"] },
{ "key": "FlatModifier", "selector": "ac", "type": "status", "value": 3, "predicate": ["origin:condition:clumsy:3"] },
{ "key": "FlatModifier", "selector": "ac", "type": "status", "value": 4, "predicate": ["origin:condition:clumsy:4"] }
```

## The Spellshape
Typical spellshape rule elements. Straight up copy paste if your feat name and descriptions are exactly what the spellshape should say. Otherwise edit.

```json
{
  "itemType": "spell",
  "key": "ItemAlteration",
  "mode": "add",
  "predicate": [
    "spellshape:{item|slug}"
  ],
  "property": "description",
  "value": [
    {
      "text": "{item|description}"
    }
  ]
}
```

```json
{
  "key": "RollOption",
  "label": "PF2E.TraitSpellshape",
  "mergeable": true,
  "option": "spellshape",
  "placement": "spellcasting",
  "suboptions": [
    {
      "label": "{item|name}",
      "value": "{item|slug}"
    }
  ],
  "toggleable": true
}
```