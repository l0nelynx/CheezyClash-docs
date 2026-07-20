---
title: macOS
description: CheezyClash desktop on macOS.
---

macOS desktop builds are produced in release CI. Download the latest `.dmg` or zip from [GitHub Releases](https://github.com/l0nelynx/CheezyClash/releases/latest).

## Gatekeeper

If macOS blocks the app (“cannot verify developer”), open **System Settings → Privacy & Security** and choose **Open Anyway**, or remove quarantine:

```shell
xattr -rd com.apple.quarantine /Applications/CheezyClash.app
```

## TUN on macOS

TUN may require helper privileges or one-time elevation. Use **Install helper** in the app if offered.
