---
title: İyi bir Issue nasıl yazılır?
description: Bir GitHub Issue'yu başka bir geliştiricinin doğrudan çalışmaya başlayabileceği kadar açık ve eyleme dönüştürülebilir kılmak.
sidebar_position: 1
---

# İyi bir Issue nasıl yazılır?

İyi bir Issue, başka bir geliştiricinin **size soru sormak zorunda kalmadan doğrudan üzerinde çalışmaya başlayabileceği** kadar net ve somut olan Issue'dur.

Bir Issue açarken "hata var çalışmıyor" veya "şunu eklesek iyi olur" gibi muğlak ifadeler işi durma noktasına getirir. Sorunu, beklenen sonucu ve sınırları net çizmek gerekir.

## Ne zaman?

- Projede bir hata (bug) tespit ettiğinizde,
- Somut ve sınırları belirli yeni bir özellik önerdiğinizde,
- Ekip içinde bir görevi takip edilebilir bir iş birimine bölmek istediğinizde.

## Nasıl yapmalıyım?

1. **Açıklayıcı bir başlık seçin:** Başlık neyin değişmesi gerektiğini veya nerede hata olduğunu tek bakışta anlatmalıdır. (Örn: `fix: safari üzerinde mobil menü kapanmıyor` veya `feat: kullanıcı profiline avatar yükleme desteği`).
2. **Mevcut durumu ve problemi tanımlayın:** Şu anda ne oluyor ve bu neden bir problem?
3. **Beklenen davranışı belirtin:** Ne olması gerekiyordu?
4. **Yeniden üretme adımlarını (Reproduction steps) yazın:** Hata bildiriyorsanız adım adım nasıl tetikleneceğini belirtin.
5. **Kapsamı daraltın:** O issue içinde neyin yapılacağı kadar, **neyin yapılmayacağını** da belirtmek kapsam kaymasını önler.

## İyi örnek

```markdown
### Problem
`parseConfig` fonksiyonu, JSON dosyasında fazladan virgül (trailing comma) olduğunda sessizce `null` dönüyor ve uygulamanın çökmesine yol açıyor.

### Yeniden Üretme
1. `config.json` içine `{ "port": 3000, }` yazın.
2. `npm start` çalıştırın.

### Beklenen Davranış
Sessizce çökmek yerine, dosya yolunu ve satır numarasını belirten açıklayıcı bir `ConfigParseError` fırlatılmalı.

### Kapsam Dışı
Bu issue kapsamında otomatik JSON düzeltme (auto-fix) yapılmayacaktır; yalnızca hata mesajı netleştirilecektir.
```

## Sık yapılan hatalar

- **Sadece ekran görüntüsü bırakıp açıklama yazmamak:** Ekran görüntüsü bağlamı açıklamaz.
- **Bir Issue içine 5 farklı iş sıkıştırmak:** Tamamlanması aylar süren "mega issue"lar açmak yerine işi parçalara bölün.

## Daha fazla bilgi

İşleri yönetilebilir parçalara ayırmak için [Bir işi nasıl parçalara ayırırım?](./isi-nasil-parcalarim.md) sayfasına bakın.
