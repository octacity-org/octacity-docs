---
title: Fikri nasıl küçültürüm?
description: Geniş vizyonu korurken ilk versiyonu bitirilebilir, test edilebilir ve teslim edilebilir ölçeğe indirme rehberi.
sidebar_position: 2
---

# Fikri nasıl küçültürüm?

Bir fikri küçültmek, vizyonunuzdan vazgeçmek demek değildir; **vizyon ile ilk sürüm arasındaki farkı net bir şekilde ayırmak** demektir.

Açık kaynak projelerin yarım kalmasının bir numaralı sebebi teknik yetersizlik değil, bitirilemeyecek kadar büyük kurgulanan ilk hedeflerdir. İlk sürüm her şeyi yapan devasa bir platform değil, tek bir şeyi kusursuz ve basitçe çözen bir çekirdek olmalıdır.

## Ne zaman?

- Proje fikir aşamasındayken yapılacaklar listesi 30 maddeyi aştığında,
- Ekip 2 aydır çalışıp ortaya henüz çalışan bir şey koyamadığında,
- "Bunu da ekleyelim, şununla da entegre olsun" cümleleri sıklaştığında.

## Nasıl yapmalıyım?

1. **Çekirdek yeteneği (core capability) izole edin:** "Bu özellik olmazsa bu proje hiçbir işe yaramaz" dediğiniz tek yeteneği bulun. Geri kalan her şey ikincildir.
2. **Opsiyonel entegrasyonları silin:** OAuth, Slack bildirimleri, çoklu veritabanı desteği veya e-posta gönderimi ilk aşamada çekirdek probleme hizmet etmiyorsa derhal kapsam dışına çıkarın.
3. **"Platform" yanılgısından kaçının:** İlk günden eklenti (plugin) mimarisi kurmaya çalışmayın. Henüz kendisi çalışmayan bir sistem için eklenti mimarisi tasarlamak erken optimizasyondur.
4. **Kullanıcı ve durum kısıtlaması koyun:** İlk sürümü "herkes ve her durum" için değil, belirli tek bir işletim sistemi veya tek bir dosya formatı için hazırlayın.
5. **Fikirleri silmeyin, bir havuzda saklayın:** Fikri küçültmek, ekipten gelen değerli önerileri çöpe atmak anlamına gelmez. Şu an yapılmayacak fakat gelecekte projeye değer katacak fikirler için "İleride Düşünülecekler" (Icebox / Future Ideas) başlıklı bir GitHub Issue veya Discussion açarak bunları kaydedin. Böylece hem katkı sağlayanların motivasyonu korunur hem de ilk sürümün odağı dağılmaz.

## Kapsam karşılaştırması

| Geniş / Aşırı Kapsam | Odaklı / Küçültülmüş Kapsam |
| :--- | :--- |
| Tüm veritabanlarını destekleyen evrensel ORM | SQLite üzerinde tek bir tabloyu yöneten tip güvenli query builder |
| Tüm sosyal ağlara otomatik paylaşım yapan SaaS bot | Belirli bir metni sadece GitHub Gist olarak yayınlayan CLI aracı |
| Çok dilli, rollü ve yetkilendirmeli topluluk forumu | Markdown destekleyen tek odalı salt okunur bülten panosu |

## Sık yapılan hatalar

- **Gelecekteki ihtiyaçları şimdiden kodlamak:** İleride gerekecek diye yazılan soyutlama katmanları projeyi tamamlanamaz hale getirir.
- **Her fikri kabul etmek:** Ekip içi her güzel fikri ilk sürüme dahil etmeye çalışmak projeyi çıkmaza sokar.

## Daha fazla bilgi

İlk sürümün sınırlarını çizmek için [İlk sürümde ne olmalı?](./ilk-surumde-ne-olmali.md) rehberine göz atın.
