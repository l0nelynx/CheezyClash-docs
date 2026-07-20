---
title: DNS leaks
description: DNS behavior in Proxy and TUN modes on desktop.
---

When **TUN** is enabled, the desktop app rebuilds `config.yaml` with:

- `dns.enable: true`
- `enhanced-mode: fake-ip` (if unset)
- `fake-ip-range: 198.18.0.1/16` (if unset)
- nameservers `8.8.8.8` / `1.1.1.1` if missing
- TUN `dns-hijack: [any:53, tcp://any:53]`

## Manual checks

1. **Proxy mode** — browser via system proxy; DNS follows OS or fake-ip depending on profile.
2. **TUN mode** — visit an IP/DNS leak test site; DNS should not bypass the tunnel (`strict-route` helps on multi-homed Windows).
3. **Network change** — switch Wi‑Fi/Ethernet while connected; if routing breaks, Disconnect/Connect.
4. **VMs** — VirtualBox/Hyper-V may conflict with strict routing; advanced toggles may come in a future release.

Automated `npm run smoke` (developer tool) only verifies controller and mixed-port listen.
