---
title: Linux
description: Установка CheezyClash desktop на Linux.
---

Сборки Linux публикуются в CI для **x86_64** (обычные ПК и ноутбуки). AppImage — portable без установки; `.deb` — для Debian/Ubuntu и производных, если файл есть в релизе.

## Скачать

[GitHub Releases → latest](https://github.com/l0nelynx/CheezyClash/releases/latest)

| Файл | Когда использовать |
| ---- | -------------------- |
| [CheezyClash-linux-x86_64.AppImage](https://github.com/l0nelynx/CheezyClash/releases/latest/download/CheezyClash-linux-x86_64.AppImage) | Portable, большинство дистрибутивов |
| `CheezyClash-linux-x86_64.deb` | Debian / Ubuntu / Mint и т.п. |

Сейчас в open-релизах — **x64**. ARM Linux (Raspberry Pi и т.д.) в матрице CI пока нет.

## AppImage

```shell
chmod +x CheezyClash-linux-x86_64.AppImage
./CheezyClash-linux-x86_64.AppImage
```

На Ubuntu 22.04+ может понадобиться: `sudo apt install libfuse2`.

## deb

```shell
sudo apt install ./CheezyClash-linux-x86_64.deb
```

## Первый запуск

1. **Profiles** → URL подписки → **Import** → **Activate**.
2. **Settings** → начните с **Proxy**.
3. **Home** → **Connect**.

## Proxy и TUN

- **Proxy** — системный прокси, обычно работает сразу.
- **TUN** — полный туннель; на Linux может потребоваться повышение прав. Основной QA — Windows.

## HWID

При импорте и обновлении подписки клиент **всегда** отправляет `x-hwid` и заголовки устройства — на **Android, Windows, macOS и Linux**. Подробнее: [Subscription → HWID](/features/subscription/#hwid-all-platforms).

## Обновление

Скачайте новый AppImage или `.deb`. Данные профилей хранятся в `~/.config/CheezyClash`, не внутри AppImage.
