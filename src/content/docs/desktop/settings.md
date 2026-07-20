---
title: Settings
description: CheezyClash desktop Settings — connection mode, network, Access Control, Zashboard.
---

Open **Settings** from the sidebar.

## Connection

| Control | What it does |
| ------- | ------------- |
| **Proxy** | System proxy → Mihomo mixed port. Lightest option. |
| **TUN** | Virtual adapter; routes more traffic through Mihomo. Windows needs **CheezyHelperService**. |

Changing mode applies on next connect (or reconnect if already running).

## Network

- **System proxy** — toggle whether Windows uses the app’s proxy when in Proxy mode.
- **Mixed port** — local port Mihomo listens on (default in config).
- **Allow LAN** — whether Mihomo accepts LAN connections (matches `allow-lan` in YAML).

## Access Control

Opens the **Access Control** editor:

- Add rules: `PROCESS-NAME` → policy (`DIRECT`, `PROXY`, `REJECT`, or a proxy group name).
- Rules merge into the active profile and apply without a full reinstall when possible.

Example: send `game.exe` to `DIRECT` while everything else uses the tunnel.

## Zashboard

**Open Zashboard** launches the web dashboard in your browser with controller host/port/secret pre-filled (`127.0.0.1`, Mihomo API). Use it for connections list, rules debug, and advanced Mihomo UI — same family of tools as other Mihomo clients.

## Auto-start

Optional: start CheezyClash with Windows (does not auto-connect unless you enable that separately in future builds).
