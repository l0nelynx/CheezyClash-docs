---
title: Access Control
description: Per-process routing rules on desktop (Windows).
---

**Access Control** (desktop) lets you add **PROCESS-NAME** rules that map executables to policies (`DIRECT`, `PROXY`, `REJECT`, or a proxy group name).

## Use cases

- Force a browser or game through `DIRECT` while the rest of the system uses the proxy.
- Send a specific app through a dedicated policy group.

## Edit rules

Open **Settings → Access Control**. Rules are merged into the active profile config and hot-applied when possible without a full TUN restart.

Invalid rule syntax is rejected before save.
