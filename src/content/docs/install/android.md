---
title: Android
description: Install CheezyClash on Android from GitHub Releases.
---

## Download

[GitHub Releases → latest](https://github.com/l0nelynx/CheezyClash/releases/latest)

Pick the APK for your CPU. Direct links (always point at the latest release):

| Architecture | Devices | Download |
| ------------ | ------- | -------- |
| **arm64-v8a** | Most phones (2020+) | [app-direct-open-arm64-v8a-release.apk](https://github.com/l0nelynx/CheezyClash/releases/latest/download/app-direct-open-arm64-v8a-release.apk) |
| **armeabi-v7a** | Older 32-bit ARM phones | [app-direct-open-armeabi-v7a-release.apk](https://github.com/l0nelynx/CheezyClash/releases/latest/download/app-direct-open-armeabi-v7a-release.apk) |
| **x86_64** | Emulators, rare tablets | [app-direct-open-x86_64-release.apk](https://github.com/l0nelynx/CheezyClash/releases/latest/download/app-direct-open-x86_64-release.apk) |
| **universal** | All ABIs in one APK (larger file) | [app-direct-open-universal-release.apk](https://github.com/l0nelynx/CheezyClash/releases/latest/download/app-direct-open-universal-release.apk) |

Not sure? Use **arm64-v8a** on a modern phone, or **universal** if you want one file for any device.

## Install

1. Download the APK (browser or `adb install`).
2. Allow install from unknown sources if the system asks.
3. Open CheezyClash.

## Add configuration

- Subscription URL (Clash/Mihomo format), or
- Import profile file from storage.

Remote response headers supported include `profile-title`, `announce`, `profile-update-interval`, `subscription-userinfo` (quota/expiry on supported builds).

## HWID & subscription headers

CheezyClash **always** sends device identification headers on subscription import and refresh — on **Android, Windows, macOS, and Linux**:

| Header | Android example |
| ------ | ----------------- |
| `x-hwid` | Stable random UUID stored on first use |
| `x-device-os` | `Android` |
| `x-ver-os` | Android version |
| `x-device-model` | Device model |
| `User-Agent` | `CheezyClash/OPEN/mihomo/<version>` |

Panels such as [Remnawave](https://github.com/remnawave/panel) use `x-hwid` to bind a subscription to a device limit. The same headers are sent from desktop builds — see [Subscription → HWID](/features/subscription/#hwid-all-platforms).

## Connect

1. Tap connect.
2. Accept **VPN** permission — required for the tunnel.
3. Open proxy groups in the app UI and select nodes.

## Requirements

- Android **9.0+** (API 28 minimum)
- Architectures: arm64-v8a, armeabi-v7a, x86_64

## Update

Install a newer APK over the old one (data kept unless you uninstall). The in-app updater matches APKs by ABI suffix when checking GitHub Releases.
