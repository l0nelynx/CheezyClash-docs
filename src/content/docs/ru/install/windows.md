---
title: Windows
description: Установка CheezyClash desktop на Windows — installer, portable и TUN helper.
---

## Загрузка

[GitHub Releases](https://github.com/l0nelynx/CheezyClash/releases/latest):

| Файл | Назначение |
| ---- | ---------- |
| `CheezyClash-win-x64.exe` | NSIS installer (рекомендуется) |
| `CheezyClash-win-x64.zip` | Portable |

Имена файлов без версии — ссылка `latest/download/` всегда актуальна.

## Installer

1. Запустите `CheezyClash-win-x64.exe`.
2. Installer регистрирует службу **CheezyHelperService** для TUN.
3. Откройте CheezyClash, импортируйте профиль, активируйте его.
4. В **Settings** выберите **Proxy** или **TUN**, на **Home** нажмите **Connect**.

## Portable

1. Распакуйте zip.
2. Запустите `CheezyClash.exe`.
3. Для TUN — **Install helper** на Home, если служба не установлена.

## Режимы

- **Proxy** — системный прокси на mixed port приложения.
- **TUN** — виртуальный адаптер; нужен helper. См. [Helper-сервис](/ru/troubleshooting/helper-service/).

## Требования

- Windows 10/11 x64
- UAC при установке helper
