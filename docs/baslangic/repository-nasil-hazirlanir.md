---
title: Repository nasıl hazırlanır?
description: GitHub üzerinde yeni bir depoyu temiz, anlaşılır ve iş birliğine hazır şekilde yapılandırma adımları.
sidebar_position: 4
---

# Repository nasıl hazırlanır?

Temiz bir repository (depo), projeye dışarıdan bakan birinin **5 dakika içinde projeyi anlayıp kendi bilgisayarında çalıştırabilmesini** sağlar.

Bir depoyu hazırlarken aşırı dosya ve klasör karmaşasından kaçınmalı, standart GitHub yapısını takip etmelisiniz.

## Ne zaman?

- Yeni bir GitHub deposu oluştururken veya dağınık bir depoyu düzenlerken.

## Nasıl yapmalıyım?

1. **İsimlendirme:** Kısa, açıklayıcı ve küçük harflerden oluşan isimler tercih edin. Kelimeleri tire (`-`) ile ayırın (örneğin `markdown-parser` veya `octacity-docs`).
2. **Temel dosyaları ekleyin:**
   - `README.md`: Projenin vitrini ve başlangıç kılavuzu.
   - `LICENSE`: MIT, Apache 2.0 veya AGPL-3.0 gibi standart bir açık kaynak lisansı.
   - `.gitignore`: Kullandığınız dile uygun (node_modules, target, .env vb.) yoksayma dosyası.
3. **Standart klasör hiyerarşisi oluşturun:**
   ```text
   proje-adi/
   ├── src/          # Kaynak kodlar
   ├── tests/        # Birim ve entegrasyon testleri
   ├── .gitignore
   ├── LICENSE
   ├── package.json  # (Veya Cargo.toml, go.mod vb.)
   └── README.md
   ```
4. **Temel bir CI iş akışı kurun:** Projenin testlerinin her PR'da otomatik koştuğu basit bir GitHub Actions dosyası (`.github/workflows/ci.yml`) ekleyin.
5. **Gereksiz dosyaları depodan uzak tutun:** `.DS_Store`, yerel IDE ayarları (`.idea/`, `.vscode/`) ve derleme çıktılarını depoya göndermeyin.

## İyi örnek

> Bir Node.js projesi için sade bir depo başlangıcı:
> - Kök dizinde açık bir `package.json` ve `README.md`.
> - `npm test` ve `npm run build` komutlarının hatasız çalışması.
> - GitHub Actions üzerinde her push ve pull request anında derleme ve testleri koşan 20 satırlık bir iş akışı.

## Sık yapılan hatalar

- **Gizli anahtarları (secrets) commit etmek:** `.env` dosyasını depoya atıp API anahtarlarını ifşa etmek.
- **Lisanssız depo açmak:** Lisansı olmayan bir kod yasal olarak "tüm hakları saklıdır" sayılır ve açık kaynak niteliği taşımaz.

## Daha fazla bilgi

- İyi bir README yazımı için [İyi bir README nasıl yazılır?](./iyi-readme-nasil-yazilir.md) sayfasına bakın.
- Açık kaynak lisansları hakkında bilgi için [Açık kaynak proje ne demektir?](../acik-kaynak/acik-kaynak-ne-demektir.md) rehberini inceleyin.
