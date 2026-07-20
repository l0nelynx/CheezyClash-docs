---
title: macOS
description: Установка CheezyClash desktop на macOS.
---

Сборки для macOS публикуются в каждом релизе. Выберите файл под ваш процессор.

## Скачать

[GitHub Releases → latest](https://github.com/l0nelynx/CheezyClash/releases/latest)

| Файл | Тип Mac |
| ---- | ------- |
| [CheezyClash-mac-arm64.dmg](https://github.com/l0nelynx/CheezyClash/releases/latest/download/CheezyClash-mac-arm64.dmg) | Apple Silicon (M1/M2/M3/M4) |
| [CheezyClash-mac-x64.dmg](https://github.com/l0nelynx/CheezyClash/releases/latest/download/CheezyClash-mac-x64.dmg) | Intel |
| `CheezyClash-mac-arm64.zip` / `CheezyClash-mac-x64.zip` | Портативная версия |

Как узнать чип: **Меню Apple → Об этом Mac** — «Чип» (Apple Silicon) или «Процессор» (Intel).

## Установка

1. Скачайте `.dmg` для вашей архитектуры.
2. Откройте образ и перетащите **CheezyClash** в **Программы**.
3. Запустите из Программ или Spotlight.

## Gatekeeper

Если macOS не даёт открыть приложение:

1. **Системные настройки → Конфиденциальность и безопасность** → **Все равно открыть**, или
2. В Terminal:

```shell
xattr -rd com.apple.quarantine /Applications/CheezyClash.app
```

Приложение без подписи разработчика — для open-source сборок это нормально.

## TUN на macOS

Для TUN может понадобиться helper или однократное повышение прав. Если TUN не работает, начните с режима **Proxy**.

## Требования

- macOS **11+**
- Apple Silicon **arm64** или Intel **x64**
