---
title: Bir projeye nasıl başlanır?
description: Fikirden koda geçerken mimariye boğulmadan, gerçek bir problemi çözen ilk çalışan prototipi oluşturma yöntemi.
sidebar_position: 1
---

# Bir projeye nasıl başlanır?

Bir projeye karmaşık klasör yapıları kurarak ya da mükemmel mimariyi çizerek değil; **somut bir problemi tanımlayıp, o problemi çözen en küçük çalıştırılabilir adımı atarak** başlanır.

Yeni başlayan ekiplerin en sık düştüğü tuzak, henüz tek satır iş mantığı yazmadan authentication, mikroservisler, veri tabanı soyutlamaları ve CI pipeline'ları ile haftalar kaybetmektir. Octacity'de tavsiyemiz: Önce çalışan en yalın akışı görün, gerisini ihtiyaca göre inşa edin.

Fikriniz henüz tartışmaya açılmadıysa, önce [Bir proje fikri nasıl paylaşılır?](./proje-fikri-nasil-paylasilir.md) rehberini izleyerek Octacity Discussions üzerinde İngilizce paylaşın. Buradaki adımlar, fikri tartıştıktan sonra ilk çalışan sonucu oluşturmanıza yardımcı olur.

## Ne zaman?

- Yeni bir fikriniz olduğunda ve ilk adımı atmakta kararsız kaldığınızda,
- Ekip olarak bir projeye başlamadan önce odağı kaybetmemek istediğinizde.

## Nasıl yapmalıyım?

1. **Problemi çözülecek kişiyi belirleyin:** Bu araç kime hizmet edecek? Kendi yaşadığınız bir problemi mi çözüyorsunuz yoksa varsayımsal bir kullanıcı grubunu mu hedefliyorsunuz?
2. **En küçük faydalı sonucu (smallest useful outcome) tanımlayın:** Projenin varlık sebebi olan tek bir işlevi seçin. Örneğin bir URL kısaltıcı yapıyorsanız, ilk hedef "uzun URL alıp kısa URL dönen ve yönlendiren tek bir endpoint" olmalıdır. Kullanıcı girişi, analitik panelleri veya özel alias'lar ilk günün konusu değildir.
3. **Mimariden önce akışı kurun:** Soyut tasarım kalıpları yerine doğrudan çalışan basit bir prototip yazın.
4. **Çalıştırılabilir bir ilk patika oluşturun:** Projeyi klonlayan birinin `npm start` veya `cargo run` diyerek 30 saniye içinde çalışan bir sonuç görebilmesini sağlayın.

## İyi örnek

> **Senaryo:** Markdown dosyalarını PDF'e dönüştüren bir CLI aracı.  
> **Kötü başlangıç:** Docker konfigürasyonu, eklenti sistemi, tema desteği, bulut senkronizasyonu hazırlamak.  
> **İyi başlangıç:** Tek bir `.md` dosyasını argüman alıp yerel bir `.pdf` üreten 50 satırlık basit bir betik yazıp doğrulamak.

## Sık yapılan hatalar

- **Mimaride boğulmak (Architecture Astronaut):** Olmayan yük ve kullanıcılar için önceden aşırı ölçeklenebilir altyapı kurmak.
- **Problemi yazılı olarak ifade etmemek:** Ekip üyelerinin aklındaki "proje" tanımlarının birbirinden farklı olması.
- **Localhost'a hapsolmak:** Projenin yalnızca geliştirenin makinesinde çalışması; eksik kurulum adımları, yerel ortam bağımlılıkları veya işletim sistemi farkları yüzünden başka bir bilgisayarda derlenememesi. İlk sürümün başarısı, başka bir geliştiricinin de projeyi temiz bir ortamda ayağa kaldırabilmesiyle ölçülür.

## Daha fazla bilgi

İlk sürümün kapsamını netleştirmek için [Fikri nasıl küçültürüm?](./fikri-nasil-kuculturum.md) ve [İlk sürümde ne olmalı?](./ilk-surumde-ne-olmali.md) rehberlerini inceleyin.
