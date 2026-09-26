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