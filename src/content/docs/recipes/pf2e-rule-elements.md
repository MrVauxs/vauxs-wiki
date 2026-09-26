---
title: PF2e Rule Element Recipes
description: A list of useful rule element combinations for obscure situations.
---

## Enemy has condition only to you
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