---
title: Overview
description: What CheezyClash is and how Android and desktop relate.
---

CheezyClash is a **GUI for Mihomo**, not a proxy service. You bring a Clash/Mihomo configuration (subscription or file); the app runs the core and exposes everyday controls.

## Platforms

| Platform | UI | Core |
| -------- | -- | ---- |
| Android | Native (Kotlin) | `libclash` / Mihomo in VPN service |
| Windows desktop | Electron + React | `mihomo.exe` sidecar + optional helper for TUN |

Both use the **same go.mod hash family** for the Mihomo binary (see releases `libclash-*` assets for Android).

## App sections (desktop)

| Tab | Purpose |
| --- | ------- |
| **Home** | Connect/disconnect, quota, quick server pick, session traffic |
| **Proxies** | All groups, latency, test, select |
| **Profiles** | Import, activate, update subscriptions |
| **Settings** | Proxy/TUN, LAN, Access Control, Zashboard link |
| **Logs** | Mihomo log tail |
| **About** | Versions, update check, docs link |

## What CheezyClash adds over raw Mihomo

- Profile/subscription file management
- Saved proxy selections
- System proxy / TUN lifecycle on desktop
- Windows helper for privileged TUN
- Access Control (PROCESS-NAME rules) on desktop
- Subscription quota/announce UI

Routing rules themselves come from **your YAML**, not from hardcoded app logic (except Access Control additions and DNS defaults in TUN builds).

## Source & releases

- App: [github.com/l0nelynx/CheezyClash](https://github.com/l0nelynx/CheezyClash)
- Docs: [github.com/l0nelynx/CheezyClash-docs](https://github.com/l0nelynx/CheezyClash-docs)
