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

1. **Açık Kaynak Lisansı:** Kodun başkaları tarafından kullanılmasına, değiştirilmesine ve dağıtılmasına yasal izin veren OSI onaylı bir lisans (MIT, Apache 2.0, BSD, GPL, AGPL vb.). Lisans yoksa varsayılan durum "tüm hakları saklıdır"dır.
2. **Katkı Patikası (Contribution Path):** Başka birinin projeyi nasıl klonlayacağı, yerel ortamını nasıl kuracağı, testleri nasıl çalıştıracağı ve PR açacağı açıkça belirtilmelidir (`CONTRIBUTING.md`).
3. **Şeffaf İletişim:** Kararlar, hatalar ve planlar kapalı kapılar ardında değil, GitHub Issues ve PR tartışmalarında görünür şekilde tartışılır.
4. **Makul Bakım Beklentileri:** Açık kaynak yazılımlar genellikle ücretsizdir ve gönüllülük esasına dayanır. Kullanıcıların "bunu hemen düzeltin" taleplerine karşı projenin bakım sınırları baştan şeffaf olmalıdır.

## Açık kaynak projenin anatomisi

```text
├── LICENSE          # Yasal hak ve serbestlik sınırları
├── README.md        # Projenin vitrini ve hızlı kullanım rehberi
├── CONTRIBUTING.md  # Nasıl katkı verileceğini açıklayan kılavuz
└── .github/         # Issue ve PR şablonları, CI iş akışları
```

## Sık yapılan hatalar

- **Lisans eklemeyi unutmak:** Lisanssız kod paylaşarak yasal belirsizlik oluşturmak.
- **Dışarıdan gelen katkılara düşmanca yaklaşmak:** Katkı veren insanlara cevap vermemek veya onları azarlamak.

## Daha fazla bilgi

- Lisans seçimi için [choosealicense.com](https://choosealicense.com) adresini ziyaret edebilirsiniz.
- Octacity organizasyonunun katkı ilkeleri için [octacity-org/.github](https://github.com/octacity-org/.github) deposunu inceleyin.
