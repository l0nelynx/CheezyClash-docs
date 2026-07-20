---
title: Profiles
description: Import, activate, update, and delete Mihomo profiles in CheezyClash.
---

Profiles are stored under the app data directory (`profiles/<id>/` on desktop).

## Import

**Profiles** page:

- **Import from URL** — paste subscription link, optional display name.
- **Import file** — local `.yaml` / archive from disk.

Each profile gets an id folder with `base.yaml`, selections, and metadata.

## Activate

Only one profile is **active**. **Activate** reloads Mihomo when you are connected.

## Update subscription

- **Update** on a profile row — re-downloads subscription content.
- Desktop also honors `profile-update-interval` (hours) from the provider for background refresh.

After update, connected sessions reload config via Mihomo API.

## Delete

**Delete** removes the profile folder. You cannot delete the active profile without activating another first.

## Subscription UI

When headers include userinfo, **Home** shows quota. `announce` may show a banner.

## Selections

Proxy choices (which node in which group) are saved per profile and restored after reconnect.
