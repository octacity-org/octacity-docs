---
title: v0.1 ne zaman çıkar?
description: Bir projenin ilk halka açık sürümünü (v0.1) mükemmellik tuzağına düşmeden yayınlama zamanlaması.
sidebar_position: 1
---

# v0.1 ne zaman çıkar?

v0.1 sürümü, **projenin temel vaadi tek bir ana senaryoda güvenilir ve tekrarlanabilir şekilde çalıştığı an** çıkar.

v0.1'in eksiksiz, mükemmel veya tüm uç durumları kapsayan bir yazılım olması beklenmez. Önemli olan, erken geri bildirim alabilmek ve projenin momentumunu kaybetmemesidir.

## Ne zaman?

- Çekirdek özellik çalışır hale geldiğinde,
- Temel kurulum adımları başka bir bilgisayarda denendiğinde ve çalıştığında,
- Sınırları ve eksikleri açıkça ifade edebildiğinizde.

## v0.1 için hazır olma kriterleri

1. **Çekirdek vaat yerine geliyor mu?** Proje bir Markdown dönüştürücü ise, geçerli bir Markdown girdisini hatasız çıktıya dönüştürüyor mu? Evet ise hazırsınız.
2. **Kritik kısıtlar açıkça yazıldı mı?** "Şu anda sadece UTF-8 dosyalar desteklenmektedir" veya "Yalnızca Node 20+ üzerinde test edilmiştir" gibi kısıtlamaları README'de belirtin. Kullanıcılar bilinen kısıtları affeder; ancak çalışmayan temel vaatleri affetmez.
3. **Temel bir sürüm etiketi (Git tag) basıldı mı?** `v0.1.0` etiketi oluşturularak GitHub Releases üzerinde sürüm notları paylaşıldı mı?

## v0.1 için beklememeniz gereken durumlar

- "Tasarım henüz istediğim kadar şık değil."
- "Birim test kapsamı (coverage) henüz %90 olmadı."
- "Windows üzerinde henüz test etmedik." (README'ye sadece Linux/macOS desteklendiğini not düşüp sürümü çıkartın).
- "Birkaç özellik daha ekleyip öyle çıkalım."

## İyi örnek

> Bir CLI projesi için v0.1 sürüm notu:
> ```markdown
> ## Octacity CLI v0.1.0
> 
> İlk deneysel sürümümüz yayınlandı! 🎉
> 
> ### Neler Var?
> - `octacity init`: Temel proje şablonunu oluşturur.
> - `octacity check`: Yapılandırma dosyalarını doğrular.
> 
> ### Bilinen Kısıtlamalar
> - Henüz Windows işletim sistemi desteklenmemektedir (v0.2 hedefi).
> - Eklenti mimarisi aktif değildir.
> ```

## Sık yapılan hatalar

- **Sonsuz "pre-alpha" evresi:** Projeyi 1 yıl boyunca hiçbir sürüm yayınlamadan depoda bekletmek.
- **Kısıtları gizlemek:** Henüz tamamlanmamış yerleri tamamlanmış gibi gösterip kullanıcıların güvenini sarsmak.

## Daha fazla bilgi

İlk sürüm kapsamını dar tutmak için [İlk sürümde ne olmalı?](../baslangic/ilk-surumde-ne-olmali.md) rehberine dönebilirsiniz.
