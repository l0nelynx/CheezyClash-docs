---
title: Android
description: Установка CheezyClash на Android из GitHub Releases.
---

## Загрузка

[GitHub Releases → latest](https://github.com/l0nelynx/CheezyClash/releases/latest)

| ABI | Устройства | Скачать |
| --- | ---------- | ------- |
| **arm64-v8a** | Большинство телефонов | [APK arm64](https://github.com/l0nelynx/CheezyClash/releases/latest/download/app-direct-open-arm64-v8a-release.apk) |
| **armeabi-v7a** | Старые 32-bit ARM | [APK armeabi-v7a](https://github.com/l0nelynx/CheezyClash/releases/latest/download/app-direct-open-armeabi-v7a-release.apk) |
| **x86_64** | Эмуляторы | [APK x86_64](https://github.com/l0nelynx/CheezyClash/releases/latest/download/app-direct-open-x86_64-release.apk) |
| **universal** | Все ABI (файл больше) | [APK universal](https://github.com/l0nelynx/CheezyClash/releases/latest/download/app-direct-open-universal-release.apk) |

На современном телефоне обычно нужен **arm64-v8a**.

## Установка APK

1. Скачайте APK по ссылке выше.
2. Разрешите установку из неизвестных источников при запросе.
3. При подключении выдайте разрешение VPN.

## HWID

При импорте и обновлении подписки клиент **всегда** отправляет `x-hwid` и заголовки устройства — на **Android, Windows, macOS и Linux**. Подробнее: [Subscription → HWID](/features/subscription/#hwid-all-platforms).

## Требования

- Минимум Android 9 (API 28)

## Первый запуск

1. Добавьте URL подписки или импортируйте профиль.
2. Подключитесь — система покажет диалог VPN.
3. Выберите группу и узел на экране Proxies.

## Заголовки подписки (ответ сервера)

Поддерживаются `profile-title`, `announce`, `profile-update-interval`, `subscription-userinfo` (квота, срок).

## Обновления

Установите новый APK поверх старого. Встроенный updater на Android ищет APK по суффиксу ABI в Releases.
