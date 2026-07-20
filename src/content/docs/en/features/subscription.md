---
title: Subscription
description: Remote subscriptions, headers, and refresh behavior.
---

## Supported formats

- Clash / Mihomo YAML subscriptions
- Standard subscription headers used by panels (Remnawave-compatible fields where applicable)

## Headers

| Header | Effect |
| ------ | ------ |
| `profile-title` | Display name hint |
| `announce` | Banner text on Home |
| `profile-update-interval` | Auto refresh interval (hours) |
| `subscription-userinfo` | Upload/download/total/expire for quota UI |

## Manual refresh

**Profiles → Update** re-fetches the subscription and reloads the core when connected.

## HWID (Android)

Some panels expect device identifiers in subscription requests — supported where configured in the Android build.
