---
title: Обзор
description: Что такое CheezyClash и как устроено приложение.
---

CheezyClash — оболочка над ядром **Mihomo** (Clash.Meta) с нативным UI на каждой платформе:

- **Android** — Kotlin / Jetpack Compose, VPN-сервис и Mihomo.
- **Desktop** — Electron + React; Mihomo как sidecar из того же `go.mod`, что и Android `libclash`.

Обе редакции поддерживают профили (YAML), группы прокси, правила, подписки и задержки из health-check ядра.

## Типичный сценарий

1. **Импорт или активация профиля** — URL подписки или локальный файл.
2. **Подключение** — **Proxy** (системный прокси) или **TUN** (полный туннель; на Windows нужен helper).
3. **Выбор сервера** на вкладке Proxies (или быстрый выбор на Home в desktop).
4. **Мониторинг** трафика и квоты подписки на Home.

## Загрузки

Сборки: [GitHub Releases](https://github.com/l0nelynx/CheezyClash/releases). Имена артефактов Windows desktop без версии в названии — ссылка `…/latest/download/CheezyClash-win-x64.exe` всегда актуальна.

## Исходники

[ l0nelynx/CheezyClash](https://github.com/l0nelynx/CheezyClash). Документация: [CheezyClash-docs](https://github.com/l0nelynx/CheezyClash-docs).
