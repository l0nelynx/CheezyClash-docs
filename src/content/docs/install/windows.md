---
title: Windows
description: Install and first run of CheezyClash desktop on Windows 10/11 x64.
---

## Download

[GitHub Releases → latest](https://github.com/l0nelynx/CheezyClash/releases/latest)

| File | When to use |
| ---- | ----------- |
| `CheezyClash-win-x64.exe` | Normal install (registers TUN helper) |
| `CheezyClash-win-x64.zip` | Portable — extract and run |

Links stay stable (`…/latest/download/CheezyClash-win-x64.exe`).

## Install (NSIS)

1. Run the installer, choose install location.
2. Installer registers **CheezyHelperService** for TUN (stop/restart on upgrade).
3. Launch **CheezyClash** from Start menu.

## First profile

1. Sidebar → **Profiles**.
2. Paste subscription URL → **Import from URL**, or **Import file** for local YAML/zip.
3. Click **Activate** on the profile you want.

## Connect

1. **Settings → Connection** → **Proxy** or **TUN**.
2. **Home → Connect**.
3. If TUN and footer shows helper not ready → **Install helper** (UAC once).

## Proxy vs TUN on Windows

| Mode | Behavior |
| ---- | -------- |
| **Proxy** | Sets system proxy to Mihomo mixed port. Browser and many apps follow it. |
| **TUN** | Virtual adapter + DNS hijack in generated config. Broader capture; needs helper. |

See [Connection modes](/features/connection-modes/) and [Helper service](/troubleshooting/helper-service/) if TUN fails.

## Updating

Download a new installer or portable zip. Installer replaces the helper service safely. If you develop/build locally, stop the service first: `sc stop CheezyHelperService`.

## Uninstall

Use Windows **Apps & features**. NSIS uninstall stops and removes **CheezyHelperService**.
