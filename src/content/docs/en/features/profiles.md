---
title: Profiles
description: Import, activate, and refresh Clash/Mihomo profiles.
---

Profiles are Mihomo configuration trees stored under the app data directory.

## Add a profile

- **Subscription URL** — paste a remote Clash/Mihomo subscription link on the Profiles page.
- **Local file** — import a `.yaml` / `.yml` archive or config.

## Active profile

Only one profile is **active** at a time. Activating a profile reloads the core with that config (when connected).

## Subscription info

When the server sends `subscription-userinfo`, Home shows **Used / Remaining** quota and expiry. The `announce` header can display a banner on Home.

## Auto-update

If the subscription returns `profile-update-interval` (hours), the desktop client refreshes the profile on that schedule. Use **Update** on Profiles for a manual refresh.

## Managed profiles

Some builds may ship a non-deletable managed profile slot for provider integrations — it behaves like a normal profile for routing.
