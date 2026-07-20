---
title: Android
description: Install CheezyClash on Android from GitHub Releases.
---

## Download

[GitHub Releases](https://github.com/l0nelynx/CheezyClash/releases/latest) — pick APK by CPU:

| APK suffix | Devices |
| ---------- | ------- |
| `arm64-v8a` | Most phones (2020+) |
| `armeabi-v7a` | Older 32-bit phones |
| `x86_64` | Emulators, rare tablets |

## Install

1. Allow install from unknown sources if the system asks.
2. Open CheezyClash.

## Add configuration

- Subscription URL (Clash/Mihomo format), or
- Import profile file from storage.

Remote headers supported include `profile-title`, `announce`, `profile-update-interval`, `subscription-userinfo` (quota/expiry on supported builds).

## Connect

1. Tap connect.
2. Accept **VPN** permission — required for the tunnel.
3. Open proxy groups in the app UI and select nodes.

## Requirements

- Android **9.0+** (API 28 minimum)
- Architectures: arm64-v8a, armeabi-v7a, x86_64

## Remnawave / panels

Open builds can send HWID and subscription headers expected by Remnawave-style panels — same idea as documented in the [CheezyClash README](https://github.com/l0nelynx/CheezyClash).

## Update

Install newer APK over the old one (data kept unless you uninstall).
