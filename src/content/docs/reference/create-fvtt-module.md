---
title: create-fvtt-module
description: A reference page for the `create-fvtt-module` CLI tool.
---

`create-fvtt-module` is a CLI tool that generates a ready-to-ship module structure for Foundry VTT, allowing you to quickly set up a new module with the necessary files and folders. This includes:

- A basic module structure with example files
- Vite integration, including:
  - Including Hot Module Replacement (HMR) for development
  - [FoundryVTT-Sync](https://github.com/MrVauxs/FoundryVTT-Sync) for building compendiums along with the module
- TypeScript support (using [7H3LaughingMan/foundry-types](https://github.com/7H3LaughingMan/foundry-types))
- Compendium extraction scripts
- Optional addons:
  - GitHub Actions for automatic releases and changelogs
  - SF2e-PF2e cross-compatibility (via UUID redirects)
  - TypeScript definitions and package.json config to share types between modules

## Further reading

- See the [GitHub repository](https://github.com/MrVauxs/create-fvtt-module).
