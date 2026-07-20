---
title: Helper service
description: CheezyHelperService on Windows — install, TUN, and build conflicts.
---

Windows **TUN mode** uses a privileged **CheezyHelperService** that starts Mihomo with the rights needed for the virtual adapter.

## Install

- **NSIS installer** — registers and starts the service automatically.
- **Portable / dev** — click **Install helper** on Home (UAC prompt).

Service name: `CheezyHelperService`. Default HTTP control: `127.0.0.1` (app verifies identity before use).

## Verify status

Home footer shows **VPN helper: running / installed / not installed** and **Setup: ready / needs setup**.

## Core allowlist

The helper only runs Mihomo binaries whose SHA256 matches `allowed_core.sha256` beside the helper. The app syncs this on connect and when using **Ensure helper**.

## Build / reinstall fails with “Access denied”

Windows locks the service `.exe` while the service is **Running**. The service `binPath` points at the installed helper binary (often under `Program Files` or a previous `release/win-unpacked` path if you ran an unpacked build).

Before rebuilding or overwriting helper files:

```powershell
sc stop CheezyHelperService
```

Then rebuild or reinstall. Start again after install:

```powershell
sc start CheezyHelperService
```

## Upgrade

The NSIS installer stops, deletes, and recreates the service so the binary path and allowlist stay in sync.
