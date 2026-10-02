# Octacity Docs

Açık kaynak proje geliştirirken “bunu nasıl yapmalıyım?” sorusuna pratik cevaplar sunan, Türkçe öncelikli dokümantasyon platformu.

> 🌐 English version: [README.md](./README.md).

Canlı site: [docs.octacity.dev](https://docs.octacity.dev)

---

## 🛠️ Yerel Geliştirme

Projeyi yerelinizde çalıştırmak için Node.js LTS (>=20) ve tercih ettiğiniz bir paket yöneticisi (bun, npm, pnpm) yeterlidir:

```bash
# Bağımlılıkları yükleyin
bun install
# veya
npm install

# Geliştirme sunucusunu başlatın
bun run start
# veya
npm run start
```

Tarayıcınızda otomatik olarak `http://localhost:3000` adresi açılacaktır. Markdown dosyalarındaki değişiklikler anlık olarak (hot-reload) sayfaya yansır.

---

## 🏗️ Derleme ve Test

Üretim sürümünü derlemek ve statik dosyaları test etmek için:

```bash
# Statik derleme (kırık link ve TypeScript kontrolleri dahil)
bun run build

# Tip kontrolü
bun run typecheck

# Derlenen statik siteyi yerelde sunma
bun run serve
```

---

## 📁 Proje Yapısı

```text
docs/
├── baslangic/      # Projeye başlama, fikir küçültme, repository hazırlığı
├── github/         # Issue, PR, code review ve GitHub iş akışları
├── takim/          # Takım içi hizalanma, görev dağılımı ve kararlar
├── maintainer/     # Kapsam koruma, katkı değerlendirme ve sürdürülebilirlik
├── acik-kaynak/    # Lisanslama, topluluk ilişkileri ve ilk contributor deneyimi
├── release/        # v0.1 sürümü, versiyonlama ve teknik borç
└── octacity/       # Octacity Docs kullanım mantığı ve .github ile ilişkisi

src/
├── css/custom.css  # Tema ve marka renkleri
└── pages/          # Giriş sayfası (index.tsx)

workflow.py         # OmniShip dağıtım ve yayın hattı tanımı
omniship.yaml       # Derlenmiş işlem planı
docusaurus.config.ts# Site ve arama motoru yapılandırması
sidebars.ts         # Dokümantasyon menüsü ve kategori sıralaması
```

---

## 🚀 Sürüm ve Dağıtım (OmniShip)

GitHub Pages dağıtımları ve CI iş akışları [OmniShip](https://github.com/octacity-org/omniship) ile yönetilir:

```bash
# İş akışlarını ve planı yeniden derlemek için:
uvx --from git+https://github.com/octacity-org/omniship omniship generate

# İş akışlarının güncelliğini doğrulamak için:
uvx --from git+https://github.com/octacity-org/omniship omniship generate --check
```

---

## 🤝 Katkıda Bulunmak

Katkı sağlamak isteyenler için tüm süreç standart GitHub iş akışına dayanır:

1. Yeni bir rehber önerisi veya hata bildirimi için Issue açın.
2. Depoyu forklayıp yeni bir branch oluşturun.
3. Markdown rehberinizi ekleyin veya güncelleyin.
4. `bun run build` komutunun hatasız geçtiğinden emin olun.
5. Bir Pull Request açın.

Detaylar için [CONTRIBUTING.md](./CONTRIBUTING.md) dosyasına göz atabilirsiniz.

---

## 📜 Lisans

Bu dokümantasyon projesi MIT lisansı altında sunulmaktadır.
