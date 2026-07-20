---
title: macOS
description: Install CheezyClash desktop on macOS (Apple Silicon and Intel).
---

Desktop builds for macOS are published on every release. Pick the file for your Mac’s CPU.

## Download

[GitHub Releases → latest](https://github.com/l0nelynx/CheezyClash/releases/latest)

| File | Mac type |
| ---- | -------- |
| [CheezyClash-mac-arm64.dmg](https://github.com/l0nelynx/CheezyClash/releases/latest/download/CheezyClash-mac-arm64.dmg) | Apple Silicon (M1/M2/M3/M4) |
| [CheezyClash-mac-x64.dmg](https://github.com/l0nelynx/CheezyClash/releases/latest/download/CheezyClash-mac-x64.dmg) | Intel |
| `CheezyClash-mac-arm64.zip` / `CheezyClash-mac-x64.zip` | Portable — extract and run |

Not sure which chip you have? **Apple menu → About This Mac** — “Chip” (Apple Silicon) or “Processor” (Intel).

Direct links always track the latest tag (`…/latest/download/…`).

## Install

1. Download the `.dmg` for your architecture.
2. Open the disk image and drag **CheezyClash** to **Applications**.
3. Launch from Applications (or Spotlight).

## Gatekeeper

If macOS blocks the app (“cannot verify developer”):

1. **System Settings → Privacy & Security** → **Open Anyway**, or
2. Remove quarantine in Terminal:

```shell
xattr -rd com.apple.quarantine /Applications/CheezyClash.app
```

The app is open-source and unsigned — this is expected until/not unless a signed build is published.

## First profile

Same as other desktop platforms:

1. Sidebar → **Profiles** → import subscription or file → **Activate**.
2. **Settings → Connection** → **Proxy** or **TUN**.
3. **Home → Connect**.

## TUN on macOS

TUN may require helper privileges or one-time elevation. Use **Install helper** in the app if offered. If TUN fails, start with **Proxy** mode.

## Requirements

- macOS **11 Big Sur** or newer (matches Electron desktop target)
- Apple Silicon **arm64** or Intel **x64**

## Update

Download a newer `.dmg` or zip from Releases and replace the app in Applications. Settings and profiles are stored in your user data directory, not inside the `.app` bundle.
