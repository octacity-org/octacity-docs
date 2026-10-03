---
title: İyi bir README nasıl yazılır?
description: Projenin vitrini olan README dosyasını sade, anlaşılır ve eyleme geçirici şekilde kurgulama rehberi.
sidebar_position: 5
---

# İyi bir README nasıl yazılır?

İyi bir README, sayfayı açan bir geliştiriciye **bu projenin ne olduğunu, neden var olduğunu ve nasıl deneneceğini** 1 dakikadan kısa sürede aktaran belgedir.

README bir tanıtım broşürü değil, pratik bir kullanım ve giriş kapısıdır. Sayfalarca süren teorik açıklamalar yerine doğrudan çalışan kod örnekleri sunmalıdır.

## Ne zaman?

- Projeyi ilk kez kamuya veya ekip arkadaşlarına açarken,
- Mevcut README karmaşıklaşıp okunamaz hale geldiğinde.

## Temel README bölümleri

1. **Başlık ve 1 Cümlelik Tanım:** Projenin ne yaptığını dolandırmadan söyleyin.
2. **Neden Var? (Problem):** Hangi sorunu çözüyor?
3. **Gereksinimler (Prerequisites):** Çalışma ortamı ve sürüm beklentileri (örn. Node.js >= 20, Python >= 3.12, Docker vb.). Sürüm uyumsuzluğu, yeni bir geliştiricinin projeden vazgeçmesine neden olan en yaygın sorundur.
4. **Kurulum (Installation):** Tek satırlık komutlarla ortamın hazırlanması.
5. **Hızlı Başlangıç (Quickstart / Usage):** En yaygın kullanım senaryosunu gösteren minimal kod veya CLI komutu.
6. **Proje Durumu (Status):** Proje v0.1 mi, deneysel mi yoksa üretimde kullanılabilir mi?
7. **Katkı (Contributing):** Yeni bir geliştiricinin nasıl katkı verebileceğine dair kısa bir yönlendirme.
8. **Lisans:** Lisans türünün belirtilmesi.

## İyi örnek

Aşağıda temsili bir kütüphane (`fast-slug`) senaryosu üzerinden hazırlanmış minimalist ve temiz bir README şablonu yer almaktadır (örnekteki paket ve komutlar temsilidir):

````markdown
# fast-slug (Temsili Örnek)

Türkçe ve özel karakterleri URL dostu slug metinlerine dönüştüren hafif TypeScript kütüphanesi.

## Gereksinimler

- Node.js >= 18.0.0

## Kurulum

```bash
npm install fast-slug
```

## Kullanım

```typescript
import { slugify } from 'fast-slug';

console.log(slugify('Açık Kaynak Projeler İçin Rehber'));
// Çıktı: "acik-kaynak-projeler-icin-rehber"
```

## Katkı

Hata bildirimleri ve katkılar için lütfen CONTRIBUTING.md belgesini inceleyin.

## Lisans

MIT
````

## Sık yapılan hatalar

- **Rozet (Badge) çöplüğü yaratmak:** Henüz çalışmayan bir projeye 20 farklı anlamsız rozet eklemek.
- **Nasıl çalıştırılacağını unutmak:** Projeyi klonlayan kişinin hangi komutla çalıştıracağını tahmin etmesini beklemek.

## Daha fazla bilgi

Açık kaynak projelerde standart dosya yapısı (CONTRIBUTING, LICENSE vb.) hakkında bilgi almak için [Açık kaynak proje ne demektir?](../acik-kaynak/acik-kaynak-ne-demektir.md) bölümünü inceleyin.
