---
title: Subscription
description: Remote subscriptions, headers, and refresh behavior.
---

## Supported formats

- Clash / Mihomo YAML subscriptions
- Standard subscription headers used by panels (Remnawave-compatible fields where applicable)

## Response headers (from panel)

| Header | Effect |
| ------ | ------ |
| `profile-title` | Display name hint |
| `announce` | Banner text on Home |
| `profile-update-interval` | Auto refresh interval (hours) |
| `subscription-userinfo` | Upload/download/total/expire for quota UI |

## Request headers (from CheezyClash)

On **every** subscription import and profile refresh, CheezyClash sends the same client identification headers on **Android, Windows, macOS, and Linux**:

| Header | Purpose |
| ------ | ------- |
| `x-hwid` | Stable device ID (UUID generated once, stored locally) |
| `x-device-os` | `Android`, `Windows`, `macOS`, or `Linux` |
| `x-ver-os` | OS version string |
| `x-device-model` | Device model (Android) or `OS-arch` on desktop |
| `User-Agent` | `CheezyClash/OPEN/mihomo/<version>` (open builds) |
| `Accept` | YAML / plain text |

These are sent **unconditionally** — not only for Remnawave. Any panel that enforces device limits or filters by client can read `x-hwid`.

## HWID (all platforms)

### What it is

**HWID** here is CheezyClash’s **`x-hwid`** header: a random UUID created on first subscription request and reused for that install.

- **Android** — stored in app private preferences (`cheezy.device`).
- **Desktop** (Windows / macOS / Linux) — stored in Electron local settings (`desktopHwid`).

Reinstalling the app or clearing app data generates a **new** HWID. Panels that count devices will see that as a new device.

### Why panels use it

Services like [Remnawave Panel](https://github.com/remnawave/panel) bind subscriptions to a maximum number of devices. The panel reads `x-hwid` (and sometimes `User-Agent`) on each fetch.

CheezyClash open builds always send HWID so open and proprietary clients behave consistently toward the subscription server.

### Privacy note

HWID is a client-generated identifier, not hardware serial numbers. It is sent only to **your** subscription URL when you import or refresh a profile.

## Manual refresh

**Profiles → Update** re-fetches the subscription (with the same headers) and reloads the core when connected.
