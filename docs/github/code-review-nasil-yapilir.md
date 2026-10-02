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
4. **Engelleyici olanla tavsiyeyi ayırın:**
   - **Blocking (Zorunlu):** Güvenlik açığı, mantık hatası veya veri kaybı riski taşıyan durumlar.
   - **Nit / Suggestion (İsteğe bağlı):** "Şöyle yazsak belki daha temiz olabilir ama bu haliyle de birleşebilir" türü kişisel tercihler. Bunların başına açıkça `nit:` veya `öneri:` yazın.
5. **İyi yapılan şeyleri takdir edin:** Temiz yazılmış bir test veya zarif bir çözüm gördüğünüzde bunu belirtmekten çekinmeyin.

## İyi yorum örnekleri

- ❌ *Kötü:* "Bu fonksiyon berbat yazılmış, neden böyle yaptın?"
- ✅ *İyi:* "Bu döngü büyük dizilerde O(n²) maliyet üretebilir. Giriş verisi büyüdüğünde bellek darboğazı yaşamamak için `Map` kullanmayı düşünebilir miyiz?"
- ✅ *İyi (İsteğe bağlı):* "`nit:` Değişken adı olarak `res` yerine `userResponse` dersek kodun okunabilirliği biraz daha artabilir, ama PR'ı bloklamıyorum."

## Sık yapılan hatalar

- **Linter işini elle yapmak:** Boşlukları ve noktalı virgülleri yorum olarak yazmak yerine bunları otomatik linter (Prettier, ESLint vb.) araçlarına bırakın.
- **İncelemeyi günlerce bekletmek:** PR'ların rafta beklemesi geliştiricinin motivasyonunu kırar ve merge conflict riskini artırır.

## Daha fazla bilgi

Maintainer gözüyle katkı değerlendirmesi için [Maintainer ne yapar?](../maintainer/maintainer-ne-yapar.md) rehberine bakın.
