---
title: Architecture
description: How CheezyClash desktop and Android are structured.
---

## Android

- UI: Kotlin / Compose
- Core: Mihomo via native `libclash` (Go)
- VPN: `VpnService` tunnel

## Desktop

- UI: Electron + React + TypeScript
- Core: Mihomo sidecar process (`mihomo.exe` / `mihomo`)
- Windows TUN: Go **CheezyHelperService** (HTTP API to start/stop core, replace binary)
- Profiles: YAML on disk under userData; hot reload via Mihomo API

## Shared semantics

Both platforms use Clash/Mihomo config, proxy groups, rules, and subscription headers. Version numbers for releases are synced from `app/version.properties` to desktop `package.json`.

## Documentation

This site is generated with [Starlight](https://starlight.astro.build/) from the [CheezyClash-docs](https://github.com/l0nelynx/CheezyClash-docs) repository.
