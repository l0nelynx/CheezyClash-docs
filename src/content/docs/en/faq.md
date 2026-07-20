---
title: FAQ
description: Frequently asked questions about CheezyClash.
---

## What core does CheezyClash use?

[Mihomo](https://github.com/MetaCubeX/mihomo) (Clash.Meta). Desktop and Android ship a build from the project’s pinned `go.mod` (same hash family as published `libclash-*` assets), not necessarily stock upstream Alpha.

## Proxy vs TUN — which should I use?

- **Proxy** — simpler, good for browsers and apps that respect system proxy.
- **TUN** — captures more traffic system-wide; required for strict routing. On Windows, install the helper first.

## Why is latency empty until I test?

Passive delays come from Mihomo history after the core health-checks nodes. `url-test` groups update on interval; plain Selector groups only show delays after a manual **Test** or group `url` checks.

## Can I use the same subscription on phone and PC?

Yes, if your provider allows multiple devices. Import the same URL on each platform.

## Where are configs stored?

- **Desktop:** `%APPDATA%/cheezy/…` (Electron userData).
- **Android:** app-private storage.

## Is CheezyClash the same as CheezyVPN?

This documentation covers the **open CheezyClash** project. Other branded builds may add account login and managed profiles — those are not documented here.

## How do I report bugs?

[GitHub Issues](https://github.com/l0nelynx/CheezyClash/issues) with version, platform, and logs from the Logs tab (desktop).
