---
title: Connection modes
description: Proxy mode vs TUN mode on desktop and Android VPN.
---

## Proxy mode (desktop)

- Mihomo listens on a **mixed HTTP/SOCKS port**.
- **System proxy** is enabled so most apps use the tunnel.
- No kernel driver; easiest to debug.

## TUN mode (desktop)

- Creates a virtual network interface and routes traffic through Mihomo.
- **Windows:** requires **CheezyHelperService** (installed with NSIS or via **Install helper**).
- DNS is configured in generated config (`fake-ip`, DNS hijack on TUN) — see [DNS leaks](/troubleshooting/dns-leaks/).

## Android

Android uses the platform **VPNService** API — equivalent to full-device tunneling. Mode naming differs from desktop but routing is handled by the VPN tunnel.

## Switching modes

On desktop, pick **Proxy** or **TUN** in **Settings**, then reconnect if already running.
