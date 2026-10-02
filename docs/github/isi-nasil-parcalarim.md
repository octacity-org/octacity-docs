---
title: Bir işi nasıl parçalara ayırırım?
description: Büyük ve karmaşık özellikleri bağımsız, incelenebilir ve teslim edilebilir küçük adımlara bölme yöntemleri.
sidebar_position: 2
---

# Bir işi nasıl parçalara ayırırım?

Büyük bir işi parçalara ayırmanın en sağlıklı yolu, teknik katmanlara (örneğin "tüm veritabanı", "tüm API", "tüm arayüz") göre değil; **bağımsız olarak doğrulanabilir ve tek başına anlam ifade eden küçük çıktılara** göre bölmektir.

Haftalarca süren ve yüzlerce dosya değiştiren devasa iş paketleri, code review süreçlerini kilitler ve takım içi iletişimi zayıflatır.

## Ne zaman?

- Bir görevin tamamlanması 3-4 günden fazla sürecek gibi göründüğünde,
- Bir Pull Request'in 500 satırdan fazla değişeceğini öngördüğünüzde,
- Ekip içinde birden fazla kişinin aynı özellik üzerinde çalışması gerektiğinde.

## Nasıl yapmalıyım?

1. **Araştırmayı (Spike) geliştirmeden ayırın:** Bilmediğiniz bir kütüphaneyi veya mimariyi araştırmak için önce küçük bir prototip/araştırma issue'su açın; araştırmayı asıl geliştirmenin içine karıştırmayın.
2. **Altyapı ile iş mantığını ayırın:** Gerekli veri modellerini veya yardımcı fonksiyonları eklemek ayrı bir PR, bunları kullanan arayüzü eklemek ayrı bir PR olabilir.
3. **Bağımlılıkları görünür kılın:** Hangi işin diğerini beklediğini açıkça belirtin. Örneğin: `#12 tamamlandıktan sonra başlanabilir`.
4. **Her parçanın bağımsız çalışabilir olmasını sağlayın:** Kod tabanına eklenen her parça projeyi kırık (broken) durumda bırakmamalıdır.

## Parçalama örneği

> **Büyük Görev:** "Kullanıcı profil sayfası ve avatar yükleme sistemi."
>
> **Parçalanmış Adımlar:**
> 1. `Issue 1:` Avatar için S3/dosya yükleme yardımcı modülünün (`uploadAvatar`) ve birim testlerinin yazılması.
> 2. `Issue 2:` Kullanıcı modeli üzerine avatar URL alanının eklenmesi ve API endpoint'inin hazırlanması.
> 3. `Issue 3:` Frontend profil sayfasına avatar yükleme bileşeninin eklenmesi ve API'ye bağlanması.

Her adım bağımsız olarak incelenebilir, test edilebilir ve ana dala (main branch) sorunsuz şekilde birleştirilebilir.

## Sık yapılan hatalar

- **Tamamlanmamış ölü kodlar bırakmak:** Çok küçük parçalayacağım derken hiçbir yerde çağrılmayan öksüz kodlar commit etmek.
- **Birbirine sıkı sıkıya bağlı 10 paralel PR açmak:** Birinci PR değiştiğinde sonraki dokuz PR'ın çökmesine yol açacak karmaşık bağımlılık zincirleri kurmak.

## Daha fazla bilgi

Parçalanan işlerin incelenmesi için [İyi bir Pull Request nasıl hazırlanır?](./iyi-pr-nasil-hazirlanir.md) rehberine bakın.
