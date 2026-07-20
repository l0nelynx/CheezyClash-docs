---
title: Logs & Zashboard
description: View Mihomo logs in CheezyClash desktop and use Zashboard.
---

## Logs tab

Shows recent Mihomo and app log lines (newest at bottom, scrollback limited in UI).

Use when:

- Connect fails — look for config parse errors or port conflicts.
- TUN fails — helper or privilege messages.
- Proxy select fails — group/name mismatch after profile change.

Clear logs from the page when you need a fresh trace.

## Zashboard (from Settings)

CheezyClash does not embed the full dashboard; it opens **Zashboard** externally with:

- Controller: `127.0.0.1` (fixed in desktop build)
- Port / secret: from your local Mihomo controller (must be connected)

Use Zashboard for live **Connections**, rule hits, and provider details — complementary to the built-in **Proxies** and **Home** views.

## Controller API

While connected, Mihomo exposes REST on localhost only. The app uses it for groups, select, traffic, and config reload. Do not expose this port to LAN unless you understand the security impact (`Allow LAN` in Settings).
