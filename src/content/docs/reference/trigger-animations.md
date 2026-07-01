---
title: Trigger Animations
description: A reference page for the `Trigger Animations` FoundryVTT module.
---

Trigger Animations is a FoundryVTT module that introduces node-based visual programming for your special effect workflows. It is based on top of and in cooperation with [Trigger Engine](https://github.com/reonZ/trigger-engine) to create the UI.

The special effects, also called animations, are built through [Sequencer](https://fantasycomputer.works/FoundryVTT-Sequencer/#/). Effectively, Trigger Animations is a bridge that allows you to make Sequencer's sequences via easily readable nodes.

![Example Bow Trigger](../../../assets/chrome_pE2GIvyhM7.jpg)

## Making Triggers

:::note
Examples on how to create specific animations will be done in the Guides section of the wiki.
Below is just a succinct overview of how it works.
:::

You can open the modules Trigger Registration menu via the Game Settings button and heading down to Trigger Animations category. There, you are presented with all your created triggers as well as those registered by other modules. These triggers may also be separated into folders.
Triggers have an enabled and disabled state, determining if they're being played or not. If you don't like one animation, it can be disabled.

:::important
All users have access to this menu, able to enable, disable, create, modify, and delete each others triggers.
:::

Each animation can be given a name, a folder, priority, tags, and a description. Only [priority changes how the trigger functions](#priority-and-name-resolution), everything else is organizational.

![Trigger Registration Menu](../../../assets/chrome_mkfIn4BVSf.png)

Each trigger starts with a Start Animation node, which has a "**Name**" entry. The comma-separated list inside sets what keywords the animation listens to from Trigger Engine's Execute Animation Node.

The Execute Animation Node is set with a constant name, or is computed based on some characteristic of the event that triggered it, e.g. rolling an attack roll with a longbow will call a `longbow` animation, and receiving damage will call a `damage:longbow` animation. For a full list, see [the included PF2e Triggers list](#included-pf2e-triggers).
![Start Animation Node](../../../assets/chrome_mRKfLRGVss.png)
![Execute Animation Node](../../../assets/chrome_s0rFHgoDr3.png)

### Priority and Name Resolution

When an Execute Animation node is fired, it checks a cache of all active Trigger Animation triggers names and plays **the first match**, using the following algorithm:

- Triggers with a higher priority go before lower priority triggers.
- Ties are broken based on character length of the name.
  - Wildcards (`*`) have a penalty of -0.5 character.

As such, `longbow` will win over `bow` which will win over `bow*`.

### Included PF2e Triggers

The module includes multiple triggers for both Trigger Animations and Trigger Engine to smoothen development. There are also some notably missing triggers that have been left for the reasons described below.

The naming convention of each event describes what animation names the event sends out. As with every trigger, any and all of them can be disabled in favor of your own.

Reasoning behind not including a trigger is most often due to the trigger being too specific for broader purposes or requiring too many combinations of parameters to be wholly encompassing.

| Included | Event               | Naming Convention / Reasoning                          |
| :------: | ------------------- | ------------------------------------------------------ |
|    ✓     | Action Sent to Chat | `item-slug`                                            |
|    ✓     | Attack Rolled       | `item-slug`, `weapon group`, `base-item`               |
|    ✓     | Check Rolled        | `item-slug`                                            |
|    ✓     | Damage Taken        | `(damage\|healing\|persistent\|negated):item-slug`     |
|    !     | Item Added to Actor | `item-slug` (*only applies to Effects and Conditions*) |
|    ✗     | Aura Entered        | *Too Specific*                                         |
|    ✗     | Aura Left           | *Too Specific*                                         |
|    ✗     | Combatant Created   | *Too Specific*                                         |
|    ✗     | Combatant Removed   | *Too Specific*                                         |
|    ✗     | Region Triggered    | *Too Specific*                                         |
|    ✗     | Token Created       | *Too Specific*                                         |
|    ✗     | Token Moved         | *Too Specific*                                         |
|    ✗     | Token Removed       | *Too Specific*                                         |
|    ✗     | Turn End            | *Too Specific*                                         |
|    ✗     | Turn Start          | *Too Specific*                                         |
|    ✗     | On Hook Called      | *Too Specific*                                         |
|    ✗     | Execute Event       | ***Not Applicable***                                   |
|    ✗     | Test Event          | ***Not Applicable***                                   |

## Module Development

To call methods at runtime, read from the module's global:

```ts
const { runFromTrigger } = globalThis.triggerAnimations.api;
runFromTrigger();
```

You can also install `trigger-animations`'s types by installing it as a GitHub dependency:

```sh
npm install github:mrvauxs/trigger-animations
# or better, tied to a specific version
npm install github:mrvauxs/trigger-animations#1.2.3
```

Then import the types either directly in the code or tsconfig.json:

```ts
# Import types directly
import "trigger-animations/types";

# Or add to tsconfig.json
{
  "compilerOptions": {
    "types": ["trigger-animations/types"]
  }
}
```

### Adding Animations via Modules

To add triggers, you can use the [Trigger Engine's registerTriggers](https://github.com/reonZ/trigger-engine/wiki) method, or add the following flag to your module.json.

```json
{
  "flags": {
		  "trigger-animations": {
		  	"triggers": "modules/your-module/yourTriggersFile.json"
	  	},
  }
}
```

## Further reading

- [GitHub repository](https://github.com/MrVauxs/trigger-animations)
- [Sequencer Docs](https://fantasycomputer.works/FoundryVTT-Sequencer/#/)
- [Trigger Engine](https://github.com/reonZ/trigger-engine)