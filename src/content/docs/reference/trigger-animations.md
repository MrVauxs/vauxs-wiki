---
title: Trigger Animations
description: A reference page for the `Trigger Animations` FoundryVTT module.
---

Trigger Animations is a FoundryVTT module that introduces node-based visual programming for your special effect workflows. It is based on top of and in cooperation with [Trigger Engine](https://github.com/reonZ/trigger-engine) to create the UI.

The special effects, also called animations, are built through [Sequencer](https://fantasycomputer.works/FoundryVTT-Sequencer/#/). Effectively, Trigger Animations is a bridge that allows you to make Sequencer's sequences via easily readable nodes.

## Making Triggers

:::note
Examples on how to create new triggers will be done in the Guides section of the wiki.
:::

### Included PF2e Triggers

The module includes multiple triggers for both Trigger Animations and Trigger Engine to smoothen development. There are also some notably missing triggers that have been left for the reasons described below.

The naming convention of each event describes what animation names the event sends out. As with every trigger, any and all of them can be disabled in favor of your own.

Reasoning behind not including a trigger is most often due to the trigger being too specific for broader purposes or requiring too many combinations of parameters to be wholly encompassing.

| Included | Event               | Naming Convention / Reasoning                          |
| :------: | ------------------- | ------------------------------------------------------ |
|    ✓     | Action Sent to Chat | `item-slug`                                            |
|    ✓     | Attack Rolled       | `item-slug, weapon group, base-item`                   |
|    ✗     | Aura Entered        | *Too Specific*                                         |
|    ✗     | Aura Left           | *Too Specific*                                         |
|    ✓     | Check Rolled        | `item-slug`                                            |
|    ✗     | Combatant Created   | *Too Specific*                                         |
|    ✗     | Combatant Removed   | *Too Specific*                                         |
|    ✓     | Damage Taken        | `(damage\|healing\|persistent\|negated):item-slug`     |
|    ✗     | Execute Event       | ***Not Applicable***                                   |
|    !     | Item Added to Actor | `item-slug` (*only applies to Effects and Conditions*) |
|    ✗     | On Hook Called      | ***Not Applicable***                                   |
|    ✗     | Region Triggered    | *Too Specific*                                         |
|    ✗     | Test Event          | ***Not Applicable***                                   |
|    ✗     | Token Created       | *Too Specific*                                         |
|    ✗     | Token Moved         | *Too Specific*                                         |
|    ✗     | Token Removed       | *Too Specific*                                         |
|    ✗     | Turn End            | *Too Specific*                                         |
|    ✗     | Turn Start          | *Too Specific*                                         |

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