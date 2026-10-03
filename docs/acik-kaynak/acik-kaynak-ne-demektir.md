---
title: Açık kaynak proje ne demektir?
description: Bir projenin sadece kodunun halka açık olması ile gerçek bir açık kaynak proje olması arasındaki kritik farklar.
sidebar_position: 1
---

# Açık kaynak proje ne demektir?

Bir projenin kodunu GitHub'a herkese açık (public) olarak yüklemek, onu tek başına **açık kaynak bir proje** yapmaz. Açık kaynak; **geçerli bir lisans, şeffaf bir katkı patikası ve iş birliğine dayalı bir iletişim kültürü** bütünüdür.

Lisansı olmayan veya katkıya tamamen kapalı bir depo sadece "halka açık kaynak kod"dur (source-available / public code).

## Ne zaman?

- Projenizi dış dünyaya açarken veya bir açık kaynak projeye ilk kez katkıda bulunurken.

## Bir projeyi açık kaynak yapan temel unsurlar

1. **Açık Kaynak Lisansı:** Kodun başkaları tarafından kullanılmasına, değiştirilmesine ve dağıtılmasına yasal izin veren OSI onaylı bir lisans. İki temel lisans felsefesi öne çıkar:
   - **Permissive (İzin verici - örn. MIT, Apache 2.0):** *"Kodu dilediğin gibi kullan, değiştir, kapalı kaynak veya ticari projelerine dahil et; sadece orijinal telif bildirimini koru."*
   - **Copyleft (Paylaşımcı - örn. GPL, AGPL):** *"Bu kodu kullanabilir ve değiştirebilirsin; ancak bu kodla geliştirdiğin veya türettiğin projeyi de aynı lisansla açık kaynak olarak dağıtmak zorundasın."*
2. **Katkı Patikası (Contribution Path):** Başka birinin projeyi nasıl klonlayacağı, yerel ortamını nasıl kuracağı, testleri nasıl çalıştıracağı ve PR açacağı açıkça belirtilmelidir (`CONTRIBUTING.md`).
3. **Güvenlik Politikası (SECURITY.md):** Güvenlik açıklarını herkesin gördüğü bir GitHub Issue açarak ifşa etmek sistemi saldırılara açık hale getirir. `SECURITY.md` dosyası, kritik zafiyetlerin maintainer'a özel/gizli kanaldan (e-posta veya GitHub Private Vulnerability Reporting) nasıl bildirileceğini açıklar.
4. **Davranış Kuralları (CODE_OF_CONDUCT.md):** Açık kaynak projenin büyümesi, saygılı ve kapsayıcı bir iletişim ortamına bağlıdır. Topluluğun sınırlarını ve nezaket kurallarını belirten bir davranış sözleşmesi bulunmalıdır.
5. **Şeffaf İletişim:** Kararlar, hatalar ve planlar kapalı kapılar ardında değil, GitHub Issues ve PR tartışmalarında görünür şekilde yürütülür.
6. **Makul Bakım Beklentileri:** Açık kaynak yazılımlar genellikle ücretsizdir ve gönüllülük esasına dayanır. Kullanıcıların *"bunu hemen düzeltin"* taleplerine karşı projenin bakım sınırları baştan şeffaf olmalıdır.

## Açık kaynak projenin anatomisi

```text
├── LICENSE             # Yasal hak ve serbestlik sınırları
├── README.md           # Projenin vitrini ve hızlı kullanım rehberi
├── CONTRIBUTING.md     # Nasıl katkı verileceğini açıklayan kılavuz
├── CODE_OF_CONDUCT.md  # Topluluk iletişim ve nezaket kuralları
├── SECURITY.md         # Güvenlik zafiyetlerinin gizli bildirim süreci
└── .github/            # Issue ve PR şablonları, CI iş akışları
```

## Sık yapılan hatalar

- **Lisans eklemeyi unutmak:** Lisanssız kod yasal olarak "tüm hakları saklıdır" kapsamındadır ve başkaları tarafından kullanılamaz.
- **"Açık kaynağın telif hakkı yoktur" sanmak:** Açık kaynak, kamu malı (public domain) demek değildir. Yazılan kodun telif hakkı (copyright) her zaman kodu geliştirene aittir. Lisans belgesi yalnızca bu kodun başkaları tarafından hangi şartlarla kullanılabileceğini düzenleyen yasal bir izin beyanıdır.
- **Dışarıdan gelen katkılara düşmanca yaklaşmak:** Katkı veren insanlara cevap vermemek veya kırıcı davranmak topluluğu tamamen yok eder.

## Daha fazla bilgi

- Lisans seçimi için [choosealicense.com](https://choosealicense.com) adresini ziyaret edebilirsiniz.
- Octacity organizasyonunun katkı ilkeleri için [octacity-org/.github](https://github.com/octacity-org/.github) deposunu inceleyin.
