---
title: Proxies
description: Proxy groups, latency, and server selection.
---

The **Proxies** page lists groups from your profile (order follows `GLOBAL` in Mihomo).

## Latency

- The core runs periodic health checks for `url-test` / groups with `url` + `interval`.
- CheezyClash reads last delays from Mihomo `GET /proxies` history — no manual ping required.
- **Test** / **Test all** runs an active group delay check when you want fresh numbers.

## Select a server

Tap or click a node in a **Selector** group. The choice is saved and survives reconnects.

## Group icons

If the YAML defines `icon: https://…` on a proxy group, the desktop app shows that image next to the group name.

## Desktop Home picker

When connected, Home shows the first proxy group with a quick popover to change the active server.
