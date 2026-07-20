---
title: Windows
description: Install CheezyClash desktop on Windows — installer, portable zip, and TUN helper.
---

## Download

From [GitHub Releases](https://github.com/l0nelynx/CheezyClash/releases/latest):

| Artifact | Purpose |
| -------- | ------- |
| `CheezyClash-win-x64.exe` | NSIS installer (recommended) |
| `CheezyClash-win-x64.zip` | Portable — no installer |

Filenames stay stable across versions so `latest/download/` links keep working.

## Installer (recommended)

1. Run `CheezyClash-win-x64.exe` and complete setup.
2. The installer registers the **CheezyHelperService** Windows service for TUN mode (same pattern as other Mihomo desktop clients).
3. Launch **CheezyClash** from the Start menu.
4. Import a profile (**Profiles** → URL or file) and set it active.
5. In **Settings**, choose **Proxy** or **TUN**, then **Connect** on Home.

## Portable zip

1. Extract the zip to a folder (e.g. `C:\Apps\CheezyClash`).
2. Run `CheezyClash.exe`.
3. For TUN, use **Install helper** on Home or Settings if the service is not registered yet.

## First connection

- **Proxy mode** — sets the system proxy to the app mixed port (default from settings).
- **TUN mode** — routes traffic through a virtual adapter; requires the helper service running.

If TUN fails, see [Helper service](/troubleshooting/helper-service/).

## Updates

Use **About → Open releases** in the app, or download the latest installer/portable from GitHub. The NSIS installer stops and recreates the helper service when upgrading.

## Requirements

- Windows 10/11 x64
- Administrator/UAC once for helper installation
