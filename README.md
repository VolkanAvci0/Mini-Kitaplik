# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

# WebStorm'da Yazdığın Projeyi GitHub'a Nasıl Gönderirsin (Repo Oluşturma ve Push)

Aşağıdaki adımlarla bu projeyi (kitaplik) GitHub'a yükleyebilirsin. İki yöntem var: WebStorm arayüzünden veya komut satırından.

## 0) Bir kezlik hazırlık
- Git kurulu mu kontrol et: `git --version` (Yoksa https://git-scm.com/downloads)
- Git kullanıcı bilgilerini ayarla (sadece ilk sefer):
  - `git config --global user.name "Ad Soyad"`
  - `git config --global user.email "mail@ornek.com"`
- Bu depoda gereksiz dosyaları göndermemek için `.gitignore` eklendi: `node_modules/`, `dist/`, `.idea/` vb. GitHub'a push edilmeyeceklerdir.

## 1) GitHub'da boş bir repo oluştur
1. GitHub hesabında New repository → Örn: `kitaplik`
2. Visibility seç (Public/Private)
3. README oluşturma kısmını boş bırakabilirsin (istersen oluşturabilirsin). Oluşturduktan sonra repo URL'ini kopyala: `https://github.com/KULLANICI_ADI/kitaplik.git`

## 2A) WebStorm ile (GUI üzerinden) yükleme
1. WebStorm'da projeyi aç: `C:\Users\volka\WebstormProjects\kitaplik`
2. VCS → Enable Version Control Integration → Git
3. Sağ alt köşede `Git` sekmesi görünecek. İlk commit için: VCS → Commit...
   - Tüm dosyaları seç, bir mesaj yaz: `ilk commit`
   - Commit butonuna bas (istersen Commit and Push)
4. Uzak repo ekle: Git → Manage Remotes… → `+` → Name: `origin`, URL: `https://github.com/KULLANICI_ADI/kitaplik.git`
5. Push: Git → Push… → `origin` → `main` (veya `master`) → Push
6. Gerekirse yeni branch adı ayarla: Git → Branches → `main` oluştur ve seç, sonra tekrar Push.

İpucu: Bazı sürümlerde Git → GitHub → "Share Project on GitHub" seçeneği ile 3-5 adımları tek ekrandan yapabilirsin.

## 2B) Komut satırı (PowerShell) ile yükleme
Proje klasöründe bu komutları sırayla çalıştır:

```powershell
cd "C:\Users\volka\WebstormProjects\kitaplik"
# Yeni git repo başlat
git init
# Varsayılan şube adı (opsiyonel, yoksa master olur)
git branch -M main
# Dosyaları ekle ve commit et
git add .
git commit -m "ilk commit"
# Uzak repo ekle
git remote add origin https://github.com/KULLANICI_ADI/kitaplik.git
# GitHub'a gönder
git push -u origin main
```

İlk push sırasında GitHub kimlik doğrulaması istenebilir. Parola yerine genellikle Personal Access Token (PAT) kullanılır:
- GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token → `repo` izinleri → Kopyala.
- İstendiğinde kullanıcı adın ve token'ı parola olarak gir.

## 3) Sonraki güncellemeleri göndermek
- Değişiklik yap → Commit → Push
- Komutla: `git add . && git commit -m "mesaj" && git push`

## Sık karşılaşılan sorunlar
- `node_modules` GitHub'a gitti: `.gitignore` ekli ama dosyalar daha önce commitlendiyse şu komutları çalıştır:
  ```powershell
  git rm -r --cached node_modules
  git commit -m "remove node_modules from repo"
  git push
  ```
- `non-fast-forward` hatası: Önce değişiklikleri çek: `git pull --rebase origin main` sonra push.
- Hatalı uzaktan repo URL'si: `git remote set-url origin YENI_URL`
