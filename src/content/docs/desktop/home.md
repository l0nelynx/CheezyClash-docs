---
title: Home & Connect
description: CheezyClash desktop Home tab — connect, subscription quota, server picker, traffic.
---

The **Home** tab is where you connect and see status at a glance.

## Connection card

- **Connect** — starts Mihomo with the active profile (Proxy or TUN per Settings).
- **Disconnect** — stops the core and clears session traffic display.
- While connected, **Download** and **Upload** rates show live speed (from Mihomo connection totals).
- Footer lines:
  - **VPN helper** — `running` / `installed` / `not installed` (Windows TUN).
  - **Setup** — `ready` or `needs setup` → **Install helper** if TUN prerequisites are missing.

Choose **Proxy** or **TUN** under **Settings → Connection** before connecting.

## Subscription card

If your subscription sends `subscription-userinfo`, Home shows:

- **Used** / **Remaining** traffic
- Progress bar (when quota is limited)
- **Expires** date and last profile update time

The provider can also send an **announce** banner (dismiss with ×).

## Active server card

When connected, the first proxy group from your config appears next to the subscription card:

- Shows group name, current server (`now`), and latency if the core has health-check history.
- **Selector** groups: click to open a list and switch server without opening Proxies.
- **URL-test / Fallback** groups: read-only (auto-selected node).

## Session traffic

Below the cards, **Session** shows total upload/download since the last connect.

## Typical flow

1. Activate a profile on **Profiles**.
2. Set mode on **Settings**.
3. **Connect** on Home.
4. Change server here or on **Proxies**.
