# Katkı Rehberi (CONTRIBUTING)

Octacity Docs'a katkıda bulunmak istediğiniz için teşekkürler! Bu platform, açık kaynak proje geliştiren herkesin ortak hafızası olarak topluluk tecrübeleriyle büyür.

Dokümantasyonu da bir yazılım projesi gibi kod olarak ele alıyoruz.

---

## 📌 İçerik İlkeleri

Bir rehber yazarken veya güncellerken şu prensipleri göz önünde bulundurun:

1. **Türkçe Öncelikli:** Dokümantasyon dili Türkçedir; ancak `Issue`, `Pull Request`, `repository`, `branch`, `maintainer` gibi yerleşik teknik terimleri zorlama çevirilerle bozmadan doğal haliyle kullanırız.
2. **Önce Cevap (Answer First):** Rehbere teorik tanımlarla ("GitHub Issues, yazılım geliştirmede...") değil, doğrudan pratik cevapla başlayın ("Bir işi başkasına devredecek kadar netleştirmek için Issue kullanın.").
3. **Fikir Belirten, Katı Olmayan (Opinionated, not absolute):** "Octacity'de genellikle şunu öneriyoruz" demekten çekinmeyin, ancak bunun tek doğru yol olduğunu iddia etmeyin.
4. **Resmi Yönetişimi Kopyalamayın:** Octacity'nin kurumsal ve bağlayıcı kuralları `octacity-org/.github` deposundadır. Kuralları dokümantasyona kopyalamak yerine link verin.
5. **Kısa ve Odaklı:** Bir rehber tek bir pratik soruyu çözmelidir. Devasa bölümler yerine odaklı sayfaları tercih edin.

---

## 🔄 Katkı İş Akışı

1. **Öneri veya Tartışma:** Büyük bir rehber ekleyecekseniz veya kapsamlı bir değişiklik yapacaksanız önce bir **Issue** açarak fikir alışverişinde bulunun. Küçük düzeltmeler için doğrudan PR açabilirsiniz.
2. **Branch Oluşturma:** Anlamlı bir branch adı seçin:
   ```bash
   git checkout -b docs/yeni-rehber-adi
   ```
3. **Değişikliği Yapma:** Markdown dosyasını ilgili kategori dizinine (`docs/baslangic/`, `docs/github/` vb.) ekleyin veya düzenleyin.
4. **Doğrulama:** Göndermeden önce yerelde test edin:
   ```bash
   bun run build
   bun run typecheck
   ```
   Kırık iç link (broken links) olmadığından emin olun.
5. **Pull Request:** Yaptığınız değişikliğin gerekçesini açıklayan sade bir PR açın.

---

## 📝 Önerilen Rehber Şablonu

```markdown
---
title: [Soru olarak başlık]
description: [1-2 cümlelik pratik özet]
sidebar_position: 1
---

# [Soru olarak başlık]

[1-3 paragrafta doğrudan pratik cevap.]

## Ne zaman?

[Bu tavsiyenin ne zaman geçerli olduğu.]

## Nasıl yapmalıyım?

[Somut adımlar veya ilkeler.]

## İyi örnek

[Kısa ve gerçekçi örnek.]

## Sık yapılan hatalar

[En sık düşülen tuzaklar.]

## Daha fazla bilgi

[Gerekiyorsa kanonik kaynak veya .github bağlantısı.]
```

Sorularınız ve önerileriniz için GitHub Issues veya Discussions üzerinden iletişime geçebilirsiniz.
