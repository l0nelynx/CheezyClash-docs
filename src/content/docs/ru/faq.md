---
title: FAQ
description: Частые вопросы о CheezyClash.
---

## Какое ядро используется?

[Mihomo](https://github.com/MetaCubeX/mihomo) (Clash.Meta). Desktop и Android — сборка из `go.mod` проекта (тот же hash, что `libclash-*`), не обязательно stock Alpha.

## Proxy или TUN?

- **Proxy** — проще, для приложений с системным прокси.
- **TUN** — шире захват трафика; на Windows нужен helper.

## Почему нет задержки до Test?

Задержки берутся из history ядра после health-check. У `url-test` — по interval; у Selector — после ручного **Test** или если в YAML задан `url`.

## Одна подписка на телефон и ПК?

Да, если провайдер разрешает несколько устройств.

## Где хранятся конфиги?

- **Desktop:** `%APPDATA%/cheezy/…`
- **Android:** private storage приложения.

## CheezyClash и CheezyVPN?

Эта документация — для **open CheezyClash**. Другие бренды могут добавлять аккаунт и managed profile — здесь не описаны.

## Баги

[GitHub Issues](https://github.com/l0nelynx/CheezyClash/issues) + версия, платформа, логи (desktop → Logs).
