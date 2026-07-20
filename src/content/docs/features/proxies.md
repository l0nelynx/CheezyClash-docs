---
title: Proxies
description: Proxy groups, latency display, and server selection in CheezyClash.
---

Open **Proxies** in the sidebar (desktop) or the proxies screen (Android).

## Group order

Groups follow **`GLOBAL.all`** from Mihomo — same order as in your YAML’s policy chain, not alphabetical.

## Latency numbers

- Mihomo stores results in **`history`** on each proxy (from url-test intervals or group health checks).
- CheezyClash reads that passively — delays appear without clicking **Test**.
- **Test** / **Test all** runs an active `GET /group/{name}/delay` and updates the UI immediately.
- Failed checks show as **fail** (red).

## Select a node

Click a row in a **Selector** group. The app calls Mihomo `PUT /proxies/{group}` and flushes live connections so the new node applies.

## Group icons

If your config sets:

```yaml
proxy-groups:
  - name: Proxy
    icon: https://example.com/icon.png
```

desktop shows the HTTPS icon next to the group name (remote URL, https only).

## Home quick picker

Desktop **Home** shows the **first** group with a popover to switch servers (Selector only).

## URL-test / Fallback

These groups auto-pick nodes; you can view `now` but manual select may not apply — use the profile’s intended group type.
