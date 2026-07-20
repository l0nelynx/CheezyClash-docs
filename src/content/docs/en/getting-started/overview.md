---
title: Overview
description: What CheezyClash is and how it fits together.
---

CheezyClash wraps the **Mihomo** core (Clash.Meta) with a native UI on each platform:

- **Android** — Kotlin / Jetpack Compose, VPN service + in-process or remote Mihomo.
- **Desktop** — Electron + React; Mihomo runs as a sidecar binary built from the same `go.mod` as Android `libclash`.

Both editions share the same proxy semantics: profiles (YAML), proxy groups, rules, subscriptions, and health-check delays from the core.

## Typical workflow

1. **Import or activate a profile** — subscription URL or local file.
2. **Connect** — choose **Proxy** (system proxy) or **TUN** (full tunnel; Windows needs the helper service).
3. **Pick servers** on the Proxies tab (or the Home quick picker on desktop).
4. **Monitor** traffic and subscription usage on Home.

## Downloads

Official builds are published on [GitHub Releases](https://github.com/l0nelynx/CheezyClash/releases). Desktop Windows artifacts use stable filenames (no version in the name) so `…/releases/latest/download/CheezyClash-win-x64.exe` always points to the current installer.

## Open source

Source: [l0nelynx/CheezyClash](https://github.com/l0nelynx/CheezyClash). Documentation lives in [CheezyClash-docs](https://github.com/l0nelynx/CheezyClash-docs).
