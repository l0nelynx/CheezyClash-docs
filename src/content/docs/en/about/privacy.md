---
title: Privacy
description: What CheezyClash stores and sends.
---

## Local data

- Profiles, logs, and selections are stored **on device** (app data directory).
- Controller secret for Mihomo API is generated locally.

## Network

- The app connects to **your subscription URLs** and proxy servers defined in the profile — not to CheezyClash-operated proxy infrastructure.
- Optional update checks contact **GitHub Releases** for version metadata.

## Analytics

Open builds may include Firebase Analytics/Crashlytics when `google-services.json` is present in a given build flavor — see the main repository README. No account telemetry is described in this open edition.

## Logs

Desktop **Logs** show Mihomo/app log lines locally. Clear logs from the Logs page; they are not uploaded automatically.
