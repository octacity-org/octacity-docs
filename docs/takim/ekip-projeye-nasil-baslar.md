---
title: Bir ekip projeye nasıl başlar?
description: Küçük yazılım ekiplerinin bürokrasiye boğulmadan hedefler, iş paylaşımı ve ilk adımlar üzerinde uzlaşma rehberi.
sidebar_position: 1
---

# Bir ekip projeye nasıl başlar?

Bir ekip projeye haftalarca süren toplantılarla veya 6 aylık kusursuz yol haritaları çizerek değil; **ortak problem üzerinde hizalanıp ilk 1-2 haftalık somut çıktıları belirleyerek** başlar.

Ekip projelerinde en büyük risk, herkesin kafasında farklı bir ürün canlandırması ve kimin neyi yapacağının belirsiz kalmasıdır.

## Ne zaman?

- 2 veya daha fazla kişi yeni bir açık kaynak projeyi hayata geçirmek için bir araya geldiğinde.

## Nasıl yapmalıyım?

1. **Problem ve ilk hedef üzerinde yazılı olarak uzlaşın:** "Bu projenin ilk sürümünde tam olarak ne yapıyoruz?" sorusunun yanıtını 1 paragrafa indirin ve projenin README veya başlangıç Issue'suna yazın.
2. **Sorumluluk alanlarını belirleyin (Ownership):** Emir-komuta zinciri kurmak yerine kişilerin ilgi ve yetkinliklerine göre alan sahipliği tanımlayın (örneğin: CLI çekirdeği, API istemcisi, dokümantasyon).
3. **İlk birkaç eyleme geçirilebilir Issue'yu açın:** Gelecekteki 50 özelliği değil, bu hafta bitebilecek ilk 3-4 somut işi GitHub Issue olarak tanımlayın.
4. **Tüm yol haritasını önceden planlamaktan kaçının:** Erken aşamada yapılan detaylı planlar ilk kod yazıldığında genellikle çöker. Esnek ve kısa döngülerle ilerleyin.
5. **Kararları görünür bir yere kaydedin:** Discord veya WhatsApp sohbetlerinde kaybolacak kararları doğrudan GitHub Issues veya Discussions üzerine taşıyın.

## İyi örnek

> Üç kişilik bir ekip bir CLI aracı geliştirecek:
> - **Hizalanma:** "İlk hedefimiz yerel bir YAML dosyasını okuyup formatlayan bir komut satırı aracı çıkarmak."
> - **Dağılım:**
>   - Geliştirici A: Argüman ayrıştırma (CLI parser) ve komut yapısı.
>   - Geliştirici B: YAML işleme mantığı ve hata kontrolleri.
>   - Geliştirici C: Test altyapısı, GitHub Actions CI ve temel README.
> - Birinci hafta sonunda üçü de çalışan ortak bir ana dal (main branch) üzerinde buluşur.

## Sık yapılan hatalar

- **Gereksiz toplantı maratonları:** Kod yazmak yerine saatlerce durum toplantısı (status meeting) yapmak.
- **Herkesin her şeye karar vermeye çalışması:** Küçük teknik detaylarda bile uzlaşma arayarak karar mekanizmasını felç etmek.

## Daha fazla bilgi

Proje sahipliği ve sürdürülebilirlik için [Maintainer ne yapar?](../maintainer/maintainer-ne-yapar.md) rehberine bakın.
