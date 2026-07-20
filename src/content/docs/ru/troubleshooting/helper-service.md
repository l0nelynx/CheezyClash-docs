---
title: Helper-сервис
description: CheezyHelperService на Windows — установка, TUN и конфликт при сборке.
---

**TUN** на Windows использует службу **CheezyHelperService** с правами для виртуального адаптера.

## Установка

- **NSIS installer** — регистрирует службу.
- **Portable / dev** — **Install helper** на Home (UAC).

Имя службы: `CheezyHelperService`.

## Статус

На Home: **VPN helper** и **Setup**.

## Allowlist ядра

Helper запускает только `mihomo` с SHA256 из `allowed_core.sha256`. Приложение синхронизирует hash при подключении.

## Ошибка сборки «Access denied»

Пока служба **Running**, Windows блокирует перезапись `CheezyHelperService.exe`. `binPath` указывает на установленный binary (часто `release/win-unpacked/…` при dev-сборке).

Перед пересборкой:

```powershell
sc stop CheezyHelperService
```

После установки:

```powershell
sc start CheezyHelperService
```

## Обновление

NSIS installer пересоздаёт службу при апгрейде.
