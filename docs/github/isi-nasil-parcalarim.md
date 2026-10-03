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
2. **Her adımda kullanılabilir bir sonuç hedefleyin:** Bir kullanıcı davranışı için gereken veri modeli, API ve arayüz değişikliklerini aynı küçük PR içinde tamamlayın. Altyapı değişikliği tek başına doğrulanabilen bir fayda sağlıyorsa ayrı bir PR olabilir; yalnızca ileride kullanılacak yardımcı kod eklemek için işi katmanlara bölmeyin.
3. **Bağımlılıkları görünür kılın:** Hangi işin diğerini beklediğini açıkça belirtin. Örneğin: `#12 tamamlandıktan sonra başlanabilir`.
4. **Her parçanın bağımsız çalışabilir olmasını sağlayın:** Kod tabanına eklenen her parça projeyi kırık (broken) durumda bırakmamalıdır.

## Parçalama örneği

> **Büyük Görev:** "Kullanıcı profil sayfası ve avatar yükleme sistemi."
>
> **Parçalanmış Adımlar:**
> 1. `Issue 1:` Kullanıcı kendi profil sayfasında adını ve varsayılan avatarını görebilir. Gerekli veri okuma, API ve arayüz akışı birlikte tamamlanır ve test edilir.
> 2. `Issue 2:` Kullanıcı profil sayfasından bir JPEG avatar yükleyebilir ve sayfayı yeniden açtığında aynı avatarı görür. Dosya türü ve boyut kontrolleri, saklama, API ve arayüz akışı birlikte tamamlanır ve test edilir.
> 3. `Issue 3:` Kullanıcı yüklediği avatarı kaldırıp varsayılan avatara dönebilir. Silme, profil kaydını güncelleme ve arayüz akışı birlikte tamamlanır ve test edilir.

Her adım kullanıcıya çalışan bir sonuç sunar ve ana dala (main branch) birleştirildiğinde proje kullanılabilir kalır. İkinci adım birinciye, üçüncü adım ikinciye dayanır; bu bağımlılıklar Issue'larda açıkça belirtilir.

## Sık yapılan hatalar

- **Tamamlanmamış ölü kodlar bırakmak:** Çok küçük parçalayacağım derken hiçbir yerde çağrılmayan öksüz kodlar commit etmek.
- **Birbirine sıkı sıkıya bağlı 10 paralel PR açmak:** Birinci PR değiştiğinde sonraki dokuz PR'ın çökmesine yol açacak karmaşık bağımlılık zincirleri kurmak.

## Daha fazla bilgi

Parçalanan işlerin incelenmesi için [İyi bir Pull Request nasıl hazırlanır?](./iyi-pr-nasil-hazirlanir.md) rehberine bakın.
