---
title: İlk sürümde ne olmalı?
description: v0.1 sürümünün temel vaadi kanıtlaması, nelerin bulunması gerektiği ve nelerin ertelenebileceği.
sidebar_position: 3
---

# İlk sürümde ne olmalı?

İlk sürümün (v0.1) tek bir görevi vardır: **Temel vaadin çalıştığını ve gerçek bir ihtiyaca karşılık geldiğini kanıtlamak.**

v0.1'in eksiksiz olması beklenmez; ancak **kullanılabilir** olması şarttır. Bir yazılımın 100 özelliği yarım çalışacağına, 1 temel özelliğinin güvenilir ve hatasız çalışması tercih edilir.

## Ne zaman?

- Projenin ilk halka açık veya ekip içi sürümünü yayınlamaya karar verdiğinizde.

## İlk sürüm kontrol listesi

### Olması gerekenler

1. **Çalışan çekirdek işlev:** Aracın ana vaadi olan işlemi hatasız yerine getirmesi.
2. **Minimum dokümantasyon (README):**
   - Proje ne işe yarar?
   - Nasıl kurulur ve çalıştırılır?
   - 1 dakikalık hızlı kullanım örneği.
3. **Temel testler:** Kritik iş akışının bozulmadığını doğrulayan birkaç uçtan uca veya birim testi.
4. **Lisans dosyası:** Projenin açık kaynak haklarını belirten geçerli bir lisans (`LICENSE`).
5. **Temel `.gitignore`:** Derleme çıktıları ve gizli anahtarların depoya girmesini engelleyen dosya.

### Kesinlikle ertelenebilecekler

- Detaylı ayar dosyaları ve yüzlerce CLI bayrağı (flags),
- Çok dilli arayüz ve i18n altyapısı,
- Gelişmiş eklenti mimarisi,
- Otomatik güncelleme mekanizmaları,
- Kapsamlı analitik ve telemetri sistemleri.

## İyi örnek

> Bir API mocklama aracı için v0.1:
> - Bir JSON dosyasından okuyup yerel HTTP sunucusu açar (`GET` isteklerine yanıt verir).
> - README içinde `npm install -g mock-api` ve `mock-api data.json` komutları açıklanmıştır.
> - `POST`, `PUT`, dinamik veri üretimi ve GUI arayüzü v0.2 ve sonrasına bırakılmıştır.

## Sık yapılan hatalar

- **Mükemmeli bekleyip hiç yayınlamamak:** "Şunu da bitirelim öyle çıkarız" döngüsüne girip aylar kaybetmek.
- **Kullanım talimatı koymamak:** Kod çalışsa bile başka bir geliştiricinin nasıl çalıştıracağını yazmamak.

## Daha fazla bilgi

Sürüm zamanlamasını belirlemek için [v0.1 ne zaman çıkar?](../release/v01-ne-zaman-cikar.md) rehberini inceleyin.
