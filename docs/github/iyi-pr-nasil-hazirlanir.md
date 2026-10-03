---
title: İyi bir Pull Request nasıl hazırlanır?
description: İnceleyeni yormayan, tek bir amaca odaklanan ve kolayca birleştirilebilen bir PR hazırlama kılavuzu.
sidebar_position: 3
---

# İyi bir Pull Request nasıl hazırlanır?

İyi bir Pull Request (PR), **inceleyenin (reviewer) aklında soru işareti bırakmadan, tek bir mantıksal değişikliği anlaşılır şekilde sunan** PR'dır.

Bir PR'ın kalitesi sadece yazdığınız kodla değil, o kodu inceleyecek takım arkadaşınıza gösterdiğiniz özenle ölçülür.

## Ne zaman?

- Üzerinde çalıştığınız görev veya hata düzeltmesi tamamlandığında,
- Kod tabanına birleştirilmek üzere inceleme talep edeceğinizde.

## Nasıl yapmalıyım?

1. **Tek bir amaca odaklanın (Single responsibility):** Bir PR içinde hem yeni bir özellik ekleyip, hem alakasız bir dosyanın kod biçimini (formatting) düzeltip, hem de bağımlılıkları güncellemeyin.
2. **"Ne" ve "Neden"i açıklayın:** Kod *neyin* değiştiğini söyler; PR açıklaması ise bunun *neden* yapıldığını açıklamalıdır.
3. **İlgili Issue'yu bağlayın:** GitHub'ın otomatik kapatma anahtar kelimelerini kullanın (örnek: `Closes #42` veya `Fixes #15`).
4. **Test notlarını ekleyin:** Bu değişikliği yerel ortamınızda nasıl test ettiğinizi veya hangi otomatik testlerin eklendiğini yazın.
5. **Görseller ekleyin:** Arayüz (UI) veya çıktı değişikliği varsa mutlaka "Öncesi / Sonrası" ekran görüntüsü veya kısa bir GIF ekleyin.
6. **Erken geri bildirim için Draft PR kullanın:** İşiniz henüz tamamlanmadıysa fakat yönünüzü ekiple erkenden paylaşmak veya CI sonuçlarını görmek istiyorsanız PR'ı **Draft** (Taslak) olarak açın. Bu, *"üzerinde çalışıyorum, henüz birleştirmeye hazır değil"* sinyali verir.
7. **Kendi kodunuzu kendiniz inceleyin (Self-review):** PR'ı başkasına göndermeden önce GitHub'daki "Files changed" sekmesini sanki bir başkasının kodunu inceliyormuş gibi baştan sona okuyun. Unutulmuş `console.log` ifadelerini, gereksiz biçimlendirme farklarını ve geçici yorum satırlarını temizleyin.
8. **Anlaşılır commit mesajları yazın:** `asdf`, `fix`, `deneme` gibi anlamsız commit'ler tarihçeyi çöpe çevirir. Tercihen Conventional Commits (`feat(auth): ...`, `fix(ui): ...`) formatını kullanın ve her commit'in mantıksal bir adımı temsil etmesini sağlayın.

## Karşılaştırma

<div className="comparison-grid">
  <div className="comparison-box comparison-bad">
    <div className="comparison-title">❌ Baştan Savma PR</div>
    <p><strong>Başlık:</strong> updates</p>
    <p><strong>Açıklama:</strong> <em>(Boş bırakılmış)</em></p>
    <p><strong>Commitler:</strong> <code>fix</code>, <code>wip 2</code>, <code>bitti</code></p>
    <small>⚠️ İnceleyen kişi 40 dosyalık diff içinde neyin neden değiştiğini tahmin etmek zorunda kalır.</small>
  </div>

  <div className="comparison-box comparison-good">
    <div className="comparison-title">✅ Octacity Standardında PR</div>
    <p><strong>Başlık:</strong> fix(auth): handle invalid password with 401 response</p>
    <p><strong>Açıklama:</strong> Çözülen sorun, yapılan değişiklikler, test yöntemi ve ilgili Issue (<code>Closes #84</code>) net şekilde listelenmiştir.</p>
    <small>✓ İnceleyen kişi 2 dakikada değişikliğin amacını ve güvenilirliğini kavrayabilir.</small>
  </div>
</div>

## İyi bir PR açıklaması örneği

```markdown
## Açıklama
Kullanıcı giriş yaparken şifresini yanlış girdiğinde oluşan genel sunucu hatası (500) düzeltildi. Artık uygun şekilde 401 Unauthorized ve açıklayıcı hata mesajı dönüyor.

Closes #84

## Yapılan Değişiklikler
- `authService.validate` metodundaki try/catch bloğu özelleştirildi.
- Geçersiz şifre denemeleri için birim testi eklendi.

## Nasıl Test Edildi?
- `npm test tests/auth.test.ts` çalıştırıldı (tüm testler yeşil).
- Postman ile yanlış şifreyle istek atılarak `401` yanıtı ve JSON hata yapısı doğrulandı.

## Ekran Görüntüsü
*(Arayüz değişikliği varsa eklenir)*
```

## Sık yapılan hatalar

- **Boş PR açıklaması:** Başlıkta sadece `fix` yazıp gövdeyi tamamen boş bırakmak.
- **Devasa diff'ler:** Tek bir PR'da 3000 satır değişiklik gönderip hızlı inceleme beklemek.

## Daha fazla bilgi

İnceleme süreçlerinin mantığı için [Code review nasıl yapılır?](./code-review-nasil-yapilir.md) sayfasına bakın.
