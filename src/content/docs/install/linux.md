---
title: Linux
description: Install CheezyClash desktop on Linux (x64 AppImage and deb).
---

CheezyClash desktop for Linux is built in release CI on **x86_64** (most PCs and laptops). Pick AppImage for a portable run, or `.deb` on Debian/Ubuntu-based distros when it is attached to the release.

## Download

[GitHub Releases → latest](https://github.com/l0nelynx/CheezyClash/releases/latest)

| File | When to use |
| ---- | ----------- |
| [CheezyClash-linux-x86_64.AppImage](https://github.com/l0nelynx/CheezyClash/releases/latest/download/CheezyClash-linux-x86_64.AppImage) | Portable — no install, works on most distros |
| `CheezyClash-linux-x86_64.deb` | Debian / Ubuntu / Mint / Pop!\_OS — install via package manager |

Direct links always track the latest tag (`…/latest/download/…`). If `.deb` is missing from a given release, use the AppImage or check the full [releases page](https://github.com/l0nelynx/CheezyClash/releases/latest).

:::note[Architecture]
Release CI currently publishes **x64** Linux builds. **arm64** Linux (e.g. some Raspberry Pi / ARM laptops) is not in the open release matrix yet — build from source via the [desktop README](https://github.com/l0nelynx/CheezyClash/tree/main/desktop) if needed.
:::

## Install (AppImage)

1. Download `CheezyClash-linux-x86_64.AppImage`.
2. Make it executable:

```shell
chmod +x CheezyClash-linux-x86_64.AppImage
```

3. Run:

```shell
./CheezyClash-linux-x86_64.AppImage
```

Optional: move to `~/Applications` or `/opt` and add a `.desktop` launcher — electron-builder AppImages support `--appimage-extract` if you need a fixed path.

## Install (deb)

On Debian/Ubuntu derivatives:

```shell
sudo apt install ./CheezyClash-linux-x86_64.deb
```

Then launch **CheezyClash** from your app menu.

## First profile

1. Sidebar → **Profiles** → paste subscription URL → **Import** → **Activate**.
2. **Settings → Connection** → start with **Proxy** (system proxy to Mihomo mixed port).
3. **Home → Connect** → pick a node on **Proxies**.

## Proxy vs TUN on Linux

| Mode | Notes |
| ---- | ----- |
| **Proxy** | Sets system proxy — good first test on any distro |
| **TUN** | Full tunnel + DNS hijack in generated config; may need elevated helper / `pkexec` depending on build and distro |

Windows is the primary QA target for TUN + helper. On Linux, use **Proxy** if TUN or helper setup fails.

## Subscription & HWID

Every platform sends the same subscription request headers (including **`x-hwid`**) when importing or refreshing a profile — see [Subscription → HWID](/features/subscription/#hwid-all-platforms).

## Requirements

- **x86_64** Linux (glibc-based distros tested via CI on Ubuntu)
- Working system tray / notification area (status icon in panel)
- For AppImage: FUSE or `libfuse2` on some distros (Ubuntu 22.04+ may need `sudo apt install libfuse2`)

## Update

Download a newer AppImage or `.deb` from Releases. AppImage: replace the file. deb: `sudo apt install ./CheezyClash-linux-x86_64.deb` again.

User data (profiles, settings, HWID) lives in the Electron user data directory (`~/.config/CheezyClash` or similar), not inside the AppImage.

## Troubleshooting

| Issue | Try |
| ----- | --- |
| AppImage won’t start | Install `libfuse2`; run from terminal to see errors |
| No tray icon | Check DE supports StatusNotifier/AppIndicator |
| Subscription rejected | Confirm panel accepts your `User-Agent` and HWID headers |
| TUN fails | Switch to **Proxy**; check logs in **Logs** tab |

For development builds, see the [desktop README](https://github.com/l0nelynx/CheezyClash/tree/main/desktop).
