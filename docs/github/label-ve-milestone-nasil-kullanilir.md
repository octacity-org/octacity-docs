---
title: Label ve milestone nasıl kullanılır?
description: Issue ve PR'ları label ile sınıflandırmak, milestone ile somut bir hedefe bağlamak ve bunu süreç yüküne çevirmemek.
sidebar_position: 5
---

# Label ve milestone nasıl kullanılır?

Label bir işin **ne tür bir iş olduğunu**, milestone ise **hangi somut hedefe ait olduğunu** söyler. İkisini de az ve amaçlı kullanın; yalnızca filtrelemek veya ilerlemeyi görmek istediğiniz bir bilgi için ekleyin.

Küçük bir projede GitHub'ın varsayılan label'ları ve tek bir sürüm milestone'u çoğu zaman yeterlidir. Süreç için süreç kurmayın.

## Ne zaman?

- Açık issue sayısı bir bakışta takip edilemeyecek kadar arttığında,
- Dışarıdan katkı almaya başladığınızda ve yeni gelenlere uygun işleri göstermek istediğinizde,
- Bir sürümü (örneğin v0.1) tamamlamak için nelerin kaldığını görmek istediğinizde.

## Hangisi hangi soruyu cevaplar?

| | Label | Milestone | Project |
| :--- | :--- | :--- | :--- |
| **Cevapladığı soru** | Bu ne tür bir iş? | Bu hangi hedefe ait? | Kim neyi, hangi sırayla yapıyor? |
| **Örnek** | `bug`, `documentation`, `good first issue` | `v0.1.0` | Durum sütunları olan bir pano |
| **Ne zaman başlanır?** | İlk günden (varsayılanlar hazır gelir) | İlk sürümü planladığınızda | İş hacmi label ve milestone ile yönetilemez hale geldiğinde |

## Yaygın label'lar

GitHub her yeni repository'ye hazır bir label seti ekler. Çoğu proje için bu set yeterlidir; uymayanları silin, eksik olanı ekleyin.

| Label | Ne zaman kullanılır? |
| :--- | :--- |
| `bug` | Bir şey beklendiği gibi çalışmıyor. Yeniden üretme adımları issue'da yazılı olmalı. |
| `enhancement` | Yeni bir özellik veya mevcut bir davranışın iyileştirilmesi isteniyor. |
| `documentation` | Kod değil; README, rehber veya yorum satırları değişecek. |
| `question` | İş tanımlanmadan önce bilgi gerekiyor. Cevap gelince label kaldırılır ya da issue kapatılır. |
| `accessibility` | Engelli kullanıcıları etkileyen bir erişilebilirlik sorunu var. |
| `duplicate` | Aynı konu başka bir issue, PR veya discussion'da zaten var. Kapatırken diğerine link verin. |
| `invalid` | Issue artık geçerli değil veya projeyle ilgili değil. |
| `wontfix` | Konu anlaşıldı ama üzerinde çalışılmayacak. Kapatırken nedenini bir cümleyle yazın. |
| `good first issue` | Projeye ilk kez katkı verecek biri için uygun, küçük ve tanımı tam bir iş. [Aşağıya bakın.](#katkı-vermek-isteyen-kişileri-çeken-iki-label-good-first-issue-ve-help-wanted) |
| `help wanted` | Maintainer bu iş için dışarıdan yardım istiyor. [Aşağıya bakın.](#katkı-vermek-isteyen-kişileri-çeken-iki-label-good-first-issue-ve-help-wanted) |

Label setini düzenlerken:

1. **Yeni label'ı yalnızca gerçekten filtreleyeceğiniz bir ayrım için açın.**
2. **Her label'a açıklama yazın:** Açıklama, label seçen kişinin doğru olanı tahmin etmek zorunda kalmamasını sağlar.
3. **GitHub'ın zaten gösterdiği bilgi için label açmayın:** Bir issue'nun kime atandığı veya bağlı bir PR'ı olup olmadığı zaten görünür; `in progress` gibi label'lar zamanla gerçeği yansıtmamaya başlar.

Label uygulamak için repository'de en az triage yetkisi, label oluşturmak, düzenlemek veya silmek için write yetkisi gerekir.

## Katkı vermek isteyen kişileri çeken iki label: `good first issue` ve `help wanted`

Bu iki label, projenize dışarıdan katkı gelmesinin en doğrudan yoludur. Katkı vermek isteyen biri çoğu zaman bir projeye kodu okuyarak değil, bu label'larla filtrelenmiş bir issue listesinden girer. Bu yüzden her ikisi de yeni gelenlere verilen bir sözdür: "Bu iş hazır, başlayabilirsin ve yardım edeceğiz."

| | `good first issue` | `help wanted` |
| :--- | :--- | :--- |
| **Kime sesleniyor?** | Projeye ilk kez katkı verecek kişiye | Projeyi az çok tanıyan veya ilgili konuda deneyimli herkese |
| **İşin boyutu** | Dar kapsamlı; tek bir davranışı değiştirir | Daha büyük veya daha zor olabilir |
| **Gereken bağlam** | Issue içinde eksiksiz yazılı | Temel bağlam yazılı; ayrıntılar tartışılarak netleşebilir |
| **Maintainer'ın mesajı** | "Seni projeye almak için ayırdığımız bir iş" | "Buna zamanımız yetmiyor, yardımın değerli" |

### GitHub bu label'ları öne çıkarır mı?

- **`good first issue`:** GitHub, public repository'lerdeki en yaklaşılabilir issue'ları bir algoritmayla seçip platformun farklı yerlerinde öne çıkarır. Bu label, bir issue'nun öne çıkarılma ihtimalini artırır ve katkı vermek isteyen kişileri projenize çeker.
- **`help wanted`:** Bu label da katkı vermek isteyen kişileri çekmek için kullanılır; ancak GitHub'ın bu label'lı issue'ları öne çıkaracağı garanti değildir.

### İyi bir `good first issue` nasıl hazırlanır?

Label'ı eklemeden önce issue'yu bu listeyle kontrol edin. Listeyi geçemeyen bir işe `good first issue` koymak, yeni gelenin ilk deneyimini bozar:

<Checklist
  id="good-first-issue"
  title="Bu issue yeni gelene hazır mı?"
  items={[
    'Problem ve beklenen sonuç, projeyi bilmeyen birinin anlayacağı şekilde yazılı',
    'Değişecek dosya veya fonksiyon belirtilmiş',
    'Değişikliğin nasıl test edileceği yazılı',
    'Projenin tamamını bilmeden yapılabilecek kadar dar kapsamlı',
    'Başka bir işin bitmesini beklemiyor; çekirdek bir parçayı da kilitlemiyor',
    'Takılan biri soru sorduğunda kısa sürede cevap verecek biri var',
  ]}
/>

Bir işin nasıl yazılacağı için [İyi bir Issue nasıl yazılır?](./iyi-issue-nasil-yazilir.md) rehberine bakın. Yeni gelen biri "bunun üzerinde çalışmak istiyorum" yazdığında hızlıca cevap verin ve issue'yu ona atayın; ilk katkıda cevapsız kalmak, katkı vermek isteyen kişiyi en hızlı kaybetmenin yoludur.

:::warning[Silme davranışları farklıdır]

Bir label'ı silmek onu tüm issue ve PR'lardan kaldırır. Bir milestone'u silmek ise bağlı issue ve PR'ları etkilemez.

:::

## Milestone'ları nasıl kullanmalıyım?

Milestone, bitişi belli bir hedef için açılır. GitHub her milestone için tamamlanma yüzdesini, açık ve kapalı issue/PR sayısını ve varsa bitiş tarihini gösterir.

1. **Milestone'u somut bir sonuca göre adlandırın:** `v0.1.0` veya "CLI ilk çalışan sürüm" gibi. "Backlog" ya da "Bir gün" gibi hiç bitmeyecek kovalar milestone değildir.
2. **Açıklamaya hedefi bir cümleyle yazın:** Milestone açıklaması Markdown destekler; sürümün neyi kanıtlaması gerektiğini buraya yazın. Hedefi belirlemek için [İlk sürümde ne olmalı?](../baslangic/ilk-surumde-ne-olmali.md) rehberine bakın.
3. **Yalnızca hedef için şart olan işleri ekleyin:** Güzel ama şart olmayan fikirler milestone'u şişirir ve tamamlanma yüzdesini anlamsızlaştırır. Bunları [Fikri nasıl küçültürüm?](../baslangic/fikri-nasil-kuculturum.md) rehberindeki "İleride Düşünülecekler" yaklaşımıyla ayrı tutun.
4. **Milestone içinde öncelik sırası verin:** Açık issue ve PR'ları milestone sayfasında sürükleyip bırakarak sıralayabilirsiniz; ekip sıradaki işi listeden okur.
5. **Tarih kaçarsa sessizce geçmesine izin vermeyin:** Ya kapsamı daraltın ya da tarihi açıkça güncelleyin. Yayın zamanlaması için [v0.1 ne zaman çıkar?](../release/v01-ne-zaman-cikar.md) rehberine bakın.

## Karşılaştırma

<div className="comparison-grid">
  <div className="comparison-box comparison-bad">
    <div className="comparison-title">❌ Süreç yığını</div>
    <p><strong>Label'lar:</strong> <code>urgent</code>, <code>URGENT!!</code>, <code>important</code>, <code>p0</code>, <code>in progress</code>, açıklamasız 25 label daha</p>
    <p><strong>Milestone:</strong> "Someday", 140 açık issue, tarih yok</p>
    <small>⚠️ Kimse hangi label'ı seçeceğini bilmez; milestone hiçbir zaman bitmez.</small>
  </div>
  <div className="comparison-box comparison-good">
    <div className="comparison-title">✅ Az ve amaçlı</div>
    <p><strong>Label'lar:</strong> Açıklamalı 7 label; yeni gelenler için birkaç <code>good first issue</code></p>
    <p><strong>Milestone:</strong> <code>v0.1.0</code>, 8 issue, açıklamada tek cümlelik hedef</p>
    <small>✓ Sürüme ne kaldığı ve nereden katkı verilebileceği tek bakışta görünür.</small>
  </div>
</div>

## Sık yapılan hatalar

- **Her ihtimal için label açmak:** Label sayısı arttıkça kimse doğru olanı seçemez ve label'lar filtreleme aracı olmaktan çıkar.
- **`good first issue` label'lı işlerin tükenmesine izin vermek:** Liste boş kalırsa yeni gelenler başka projeye gider. Kolay işleri kendiniz bitirmek yerine bir kısmını bu label'la ayırın.
- **Öncelik label'larını çoğaltmak:** `urgent`, `p0` ve `important` aynı anda varsa hiçbiri bir şey ifade etmez. Öncelik için milestone içindeki sırayı kullanın.
- **Milestone'u yapılacaklar çekmecesine çevirmek:** Hedefle ilgisi olmayan issue'lar eklendikçe milestone'un tamamlanma yüzdesi anlamını yitirir.

## Daha fazla bilgi

Label ve milestone ekranlarının nasıl kullanılacağı GitHub'ın resmi dokümanlarında anlatılır:

- [Managing labels](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/managing-labels)
- [Encouraging helpful contributions to your project with labels](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/encouraging-helpful-contributions-to-your-project-with-labels)
- [About milestones](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/about-milestones)
- [Creating and editing milestones](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/creating-and-editing-milestones-for-issues-and-pull-requests)

Octacity genelinde ortak bir varsayılan label seti kullanılması bir organizasyon kararıdır; böyle bir kural tanımlanırsa [octacity-org/.github](https://github.com/octacity-org/.github) deposunda yer alır.
