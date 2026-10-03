---
title: Code review nasıl yapılır?
description: Kod incelemelerini kişiselleştirmeden; doğruluk, okunabilirlik ve sürdürülebilirlik odaklı yürütme rehberi.
sidebar_position: 4
---

# Code review nasıl yapılır?

Code review (kod incelemesi), bir denetleme veya hata yakalama sınavı değil; **kod tabanının ortak kalitesini koruma ve takım içi bilgi paylaşımını artırma sürecidir.**

İnceleme yaparken kişiyi değil, değişikliği değerlendirin. Yargılayıcı ifadeler yerine merak eden ve geliştiren sorular sorun.

## Ne zaman?

- Bir takım arkadaşınız veya dışarıdan bir katkıcı (contributor) PR açtığında.

## Nasıl yapmalıyım?

1. **Doğruluğu (correctness) kontrol edin:** Kod vaat ettiği işi doğru yapıyor mu? Uç durumlar (edge cases) düşünülmüş mü?
2. **Okunabilirlik ve sürdürülebilirliği değerlendirin:** 6 ay sonra bu kodu okuyan biri ne yapıldığını anlayabilir mi? Değişiklik projeye gereksiz karmaşıklık katıyor mu?
3. **Varsaymak yerine sorun:** Anlamadığınız bir kod parçası gördüyseniz "Bu yanlış" demek yerine "Burada şu yaklaşımı seçmenin özel bir sebebi var mıydı?" diye sorun.
4. **Yorum etiketleri (Review prefixes) kullanın:** İncelemenin tonunu ve beklentisini netleştirmek için yorumlarınızın başına niyetinizi belirten etiketler ekleyin:
   - `blocker:` PR birleşmeden önce mutlaka çözülmesi gereken güvenlik açığı, mantık hatası veya veri kaybı riski.
   - `suggestion:` Alternatif veya daha temiz bir yaklaşım önerisi; tartışmaya açıktır, katı zorunluluk değildir.
   - `question:` Kodu veya kararın ardındaki mantığı anlamak için sorulan soru (*"Burada bu kütüphaneyi seçmemizin özel bir nedeni var mı?"*).
   - `nit:` (küçük detay): Kodun çalışmasını etkilemeyen, isteğe bağlı biçim veya isimlendirme tavsiyesi (PR birleşmesine engel değildir).
   - `praise:` (takdir): Temiz bir test, zarif bir çözüm veya iyi hazırlanmış bir PR'ı kutlayan pozitif geri bildirim.
5. **İyi yapılan şeyleri takdir edin:** Code review yalnızca eksik bulma yeri değildir; iyi pratikleri övmek ekip motivasyonunu artırır.

## Yorum örnekleri

- ❌ *Kötü:* "Bu fonksiyon berbat yazılmış, neden böyle yaptın?"
- ✅ *blocker:* `blocker:` Bu döngü kullanıcı girdisini doğrudan SQL içine yerleştiriyor, SQL injection riskine karşı parametreli sorgu kullanmalıyız.
- ✅ *suggestion:* `suggestion:` Veri kümesi büyüdüğünde O(n²) maliyeti önlemek adına burada `Array.find` yerine bir `Map` kurgulayabiliriz.
- ✅ *question:* `question:` `maxRetries` değerini 3 olarak seçmişiz; bu üçüncü parti servisin rate limit kurallarıyla uyumlu mu?
- ✅ *nit:* `nit:` Değişken adı olarak `res` yerine `userResponse` dersek fonksiyon içi okunabilirlik biraz daha artabilir, birleştirmeyi engellemiyorum.
- ✅ *praise:* `praise:` Uç durum testleri çok kapsamlı hazırlanmış, eline sağlık!

## Sık yapılan hatalar

- **Linter işini elle yapmak:** Boşlukları ve noktalı virgülleri yorum olarak yazmak yerine bunları otomatik linter (Prettier, ESLint vb.) araçlarına bırakın.
- **İncelemeyi günlerce bekletmek:** PR'ların rafta beklemesi geliştiricinin motivasyonunu kırar ve merge conflict riskini artırır.

## Daha fazla bilgi

Maintainer gözüyle katkı değerlendirmesi için [Maintainer ne yapar?](../maintainer/maintainer-ne-yapar.md) rehberine bakın.
