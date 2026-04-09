import { useMemo, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Calculator from "./components/Calculator";
import WaterCalculator from "./components/WaterCalculator";

const WHATSAPP_LINK =
  "https://wa.me/905050727306?text=merhaba%20denge.fit%20üzerinden%20yazıyorum";

const guideLibrary = [
  {
    title: "insülin direnci olanlar için günlük beslenme",
    desc: "kan şekeri dalgalanmalarını azaltmaya yardımcı olabilecek pratik beslenme düzeni.",
    slug: "/rehberler/insulin-direnci-gunluk-beslenme",
    live: true,
    tag: "kan şekeri dengesi",
    accent: "from-emerald-100 to-lime-50",
  },
  {
    title: "insülin direncinde tatlı isteği nasıl azaltılır",
    desc: "sürekli gelen tatlı krizlerini daha sürdürülebilir şekilde yönetmenin yolları.",
    slug: "/rehberler/tatli-istegi-nasil-azaltilir",
    live: true,
    tag: "kan şekeri dengesi",
    accent: "from-amber-100 to-orange-50",
  },
  {
    title: "masa başı çalışanlarda en sık yapılan beslenme hataları",
    desc: "hareketsiz yaşamla birlikte sık görülen günlük beslenme problemleri.",
    slug: "/rehberler/masa-basi-beslenme-hatalari",
    live: true,
    tag: "günlük yaşam",
    accent: "from-sky-100 to-cyan-50",
  },
  {
    title: "gebelik planlayan kadınlar için beslenme",
    desc: "gebelik öncesinde dikkat edilmesi gereken temel beslenme yaklaşımı.",
    slug: "#",
    live: false,
    tag: "kadın sağlığı",
    accent: "from-rose-100 to-pink-50",
  },
  {
    title: "pcos’ta beslenme yaklaşımı",
    desc: "hormonal dengeyi desteklemeye yönelik temel beslenme prensipleri.",
    slug: "#",
    live: false,
    tag: "kadın sağlığı",
    accent: "from-violet-100 to-fuchsia-50",
  },
  {
    title: "şişkinlik yaşayanlar için günlük beslenme önerileri",
    desc: "günlük hayatta uygulanabilecek sade ve pratik düzen önerileri.",
    slug: "#",
    live: false,
    tag: "bağırsak sağlığı",
    accent: "from-teal-100 to-emerald-50",
  },
];

function MiniForm() {
  const [form, setForm] = useState({
    age: "",
    height: "",
    weight: "",
    goal: "",
    struggle: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Merhaba, denge.fit üzerinden mini form doldurdum.

Yaş: ${form.age}
Boy: ${form.height} cm
Kilo: ${form.weight} kg
Hedef: ${form.goal}
Zorlandığım konu: ${form.struggle}

Detaylı destek almak istiyorum.`;

    const url = `https://wa.me/905050727306?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <label className="mb-2 block text-sm font-medium text-neutral-700">
          yaş
        </label>
        <input
          name="age"
          placeholder="ör. 30"
          value={form.age}
          onChange={handleChange}
          required
          className="w-full rounded-xl border border-black/10 px-3 py-3 outline-none transition focus:border-neutral-400"
        />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-neutral-700">
            boy
          </label>
          <input
            name="height"
            placeholder="cm"
            value={form.height}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-black/10 px-3 py-3 outline-none transition focus:border-neutral-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-neutral-700">
            kilo
          </label>
          <input
            name="weight"
            placeholder="kg"
            value={form.weight}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-black/10 px-3 py-3 outline-none transition focus:border-neutral-400"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-neutral-700">
          hedefin ne?
        </label>
        <select
          name="goal"
          value={form.goal}
          onChange={handleChange}
          required
          className="w-full rounded-xl border border-black/10 bg-white px-3 py-3 outline-none transition focus:border-neutral-400"
        >
          <option value="">seç</option>
          <option value="kilo vermek">kilo vermek</option>
          <option value="sağlıklı beslenmek">sağlıklı beslenmek</option>
          <option value="kas yapmak">kas yapmak</option>
          <option value="yeme davranışımı kontrol etmek">
            yeme davranışımı kontrol etmek
          </option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-neutral-700">
          en çok nerede zorlanıyorsun?
        </label>
        <select
          name="struggle"
          value={form.struggle}
          onChange={handleChange}
          required
          className="w-full rounded-xl border border-black/10 bg-white px-3 py-3 outline-none transition focus:border-neutral-400"
        >
          <option value="">seç</option>
          <option value="gece yeme">gece yeme</option>
          <option value="stres yeme">stres yeme</option>
          <option value="tatlı krizi">tatlı krizi</option>
          <option value="kontrol kaybı / duygusal yeme">
            kontrol kaybı / duygusal yeme
          </option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-neutral-900 py-3 text-sm font-medium text-white transition hover:opacity-90"
      >
        whatsapp’a gönder
      </button>

      <p className="text-xs leading-6 text-neutral-500">
        butona bastığında bilgiler hazır mesaj olarak WhatsApp ekranında açılır.
      </p>
    </form>
  );
}

function MidCTA() {
  return (
    <div className="mt-10 rounded-3xl bg-neutral-900 p-6 text-white">
      <h3 className="text-xl font-semibold">bu döngüden çıkmak istiyorsan</h3>
      <p className="mt-3 text-sm leading-6 text-white/80">
        sana uygun beslenme düzenini birlikte netleştirebiliriz. hızlıca yaz,
        nasıl ilerleyebileceğimizi söyleyelim.
      </p>

      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-block rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
      >
        whatsapp&apos;tan yaz
      </a>
    </div>
  );
}

function BottomCTA() {
  return (
    <div className="mt-12 rounded-3xl border border-black/10 bg-[#f6f1e8] p-6">
      <h3 className="text-xl font-semibold">
        tek başına çözmek zorunda değilsin
      </h3>

      <p className="mt-3 leading-7 text-neutral-700">
        sürekli başa dönüyorsan sorun sende değil, sistemde. sana uygun
        sürdürülebilir bir plan oluşturabiliriz.
      </p>

      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-block rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
      >
        benim için uygun mu öğren
      </a>
    </div>
  );
}

function getRelatedGuides(currentSlug, limit = 3) {
  const currentGuide = guideLibrary.find((guide) => guide.slug === currentSlug);

  if (!currentGuide) {
    return guideLibrary.filter((guide) => guide.live).slice(0, limit);
  }

  const sameTag = guideLibrary.filter(
    (guide) =>
      guide.slug !== currentSlug &&
      guide.live &&
      guide.tag === currentGuide.tag
  );

  const others = guideLibrary.filter(
    (guide) =>
      guide.slug !== currentSlug &&
      guide.live &&
      guide.tag !== currentGuide.tag
  );

  return [...sameTag, ...others].slice(0, limit);
}

function RelatedGuides({ currentSlug }) {
  const related = getRelatedGuides(currentSlug);

  return (
    <section className="mt-10">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <span className="text-sm font-medium text-neutral-500">
            ilgili rehberler
          </span>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            okumaya devam et
          </h2>
        </div>

        <Link
          to="/rehberler"
          className="text-sm font-medium underline underline-offset-4"
        >
          tüm rehberler
        </Link>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {related.map((guide) => (
          <article
            key={guide.title}
            className="overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className={`h-28 bg-gradient-to-br ${guide.accent}`} />
            <div className="p-5">
              <span className="inline-flex rounded-full bg-[#f6f1e8] px-3 py-1 text-xs font-medium text-neutral-700">
                {guide.tag}
              </span>
              <h3 className="mt-4 text-lg font-medium leading-snug">
                {guide.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600">
                {guide.desc}
              </p>
              <Link
                to={guide.slug}
                className="mt-4 inline-block text-sm font-medium underline underline-offset-4"
              >
                rehberi oku
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function GuideCard({ guide }) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-sm">
      <div className={`h-28 bg-gradient-to-br ${guide.accent}`} />
      <div className="p-5">
        <span className="inline-flex rounded-full bg-[#f6f1e8] px-3 py-1 text-xs font-medium text-neutral-700">
          {guide.tag}
        </span>

        <h3 className="mt-4 text-lg font-medium leading-snug">{guide.title}</h3>
        <p className="mt-2 text-sm leading-6 text-neutral-600">{guide.desc}</p>

        {guide.live ? (
          <Link
            to={guide.slug}
            className="mt-4 inline-block text-sm font-medium underline underline-offset-4"
          >
            rehberi oku
          </Link>
        ) : (
          <p className="mt-4 text-sm text-neutral-400">yakında yayında</p>
        )}
      </div>
    </div>
  );
}

function Home() {
  const featured = guideLibrary.slice(0, 3);

  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-14 md:pb-24 md:pt-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium backdrop-blur">
              sağlıklı yaşamı sadeleştirir
            </span>

            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              dengeyi kur,
              <br />
              sürdürülebilir yaşa.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-neutral-700 md:text-lg">
              karmaşık diyetler, geçici çözümler ve bilgi kirliliği arasında
              kaybolma. denge.fit; beslenme, günlük yaşam dengesi ve
              uygulanabilir rehberlerle daha sade bir başlangıç sunar.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/rehberler"
                className="rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                rehberlere göz at
              </Link>
              <Link
                to="/araclar"
                className="rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-medium transition hover:bg-black/5"
              >
                hesaplayıcıları kullan
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-neutral-600">
              <div>
                <p className="font-semibold text-neutral-900">niş içerikler</p>
                <p>yüksek niyetli konular</p>
              </div>
              <div>
                <p className="font-semibold text-neutral-900">pratik araçlar</p>
                <p>hızlı başlangıç noktası</p>
              </div>
              <div>
                <p className="font-semibold text-neutral-900">sade yaklaşım</p>
                <p>gerçek hayata uyumlu</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-sm">
              <div className="bg-gradient-to-br from-[#dbe8d3] via-[#eef3e6] to-[#f6f1e8] p-6">
                <p className="text-sm font-medium text-neutral-500">
                  neden sürekli başa dönülüyor?
                </p>
                <div className="mt-4 grid gap-3">
                  <div className="rounded-2xl bg-white/80 p-4 backdrop-blur">
                    <h3 className="font-medium">bilgi çok, sistem yok</h3>
                    <p className="mt-1 text-sm text-neutral-600">
                      neyin doğru olduğunu bilsen bile günlük düzene dönüştürmek
                      zor olabilir.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/80 p-4 backdrop-blur">
                    <h3 className="font-medium">sürdürülemeyen planlar</h3>
                    <p className="mt-1 text-sm text-neutral-600">
                      aşırı katı listeler kısa süreli motivasyon üretir ama uzun
                      vadede dağılır.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/80 p-4 backdrop-blur">
                    <h3 className="font-medium">gerçek hayata uymayan öneriler</h3>
                    <p className="mt-1 text-sm text-neutral-600">
                      masa başı iş, yoğun tempo ve sosyal hayat çoğu zaman hesaba
                      katılmaz.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-black/5 bg-white px-6 py-4">
                <p className="text-sm text-neutral-600">
                  amaç mükemmeliyet değil; sürdürülebilir düzen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-24">
        <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm md:p-8">
          <div className="max-w-2xl">
            <span className="text-sm font-medium text-neutral-500">
              denge yaklaşımı
            </span>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
              sade. uygulanabilir. gerçek hayatla uyumlu.
            </h2>
            <p className="mt-4 text-neutral-700">
              amaç mükemmel olmak değil; sürdürülebilir bir sistem kurmak.
              denge.fit bu yüzden abartısız, anlaşılır ve uygulanabilir
              içeriklere odaklanır.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl bg-[#f6f1e8] p-5">
              <h3 className="text-lg font-medium">sade bilgiler</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600">
                karmaşık anlatımlar yerine anlaşılır ve günlük hayata uygun
                içerikler.
              </p>
            </div>
            <div className="rounded-3xl bg-[#f6f1e8] p-5">
              <h3 className="text-lg font-medium">uygulanabilir sistem</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600">
                teoride değil, işte, evde ve yoğun tempoda sürdürülebilecek
                yaklaşım.
              </p>
            </div>
            <div className="rounded-3xl bg-[#f6f1e8] p-5">
              <h3 className="text-lg font-medium">gerçekçi bakış</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600">
                hızlı mucizeler değil, küçük ama kalıcı değişimler.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-24">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-medium text-neutral-500">
              öne çıkan rehberler
            </span>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
              ilk içerik kümeleri
            </h2>
          </div>

          <Link
            to="/rehberler"
            className="text-sm font-medium underline underline-offset-4"
          >
            tüm rehberleri gör
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {featured.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className={`h-32 bg-gradient-to-br ${item.accent}`} />
              <div className="p-6">
                <span className="inline-flex rounded-full bg-[#f6f1e8] px-3 py-1 text-xs font-medium text-neutral-700">
                  {item.tag}
                </span>
                <h3 className="mt-4 text-xl font-semibold leading-snug">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  {item.desc}
                </p>
                <Link
                  to={item.slug}
                  className="mt-5 inline-block text-sm font-medium underline underline-offset-4"
                >
                  rehberi aç
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-24">
        <div className="rounded-[2rem] bg-neutral-900 px-6 py-10 text-white md:px-10">
          <div className="max-w-2xl">
            <span className="text-sm font-medium text-white/60">
              başlangıç noktası
            </span>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
              araçlarla hızlıca başla
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/80 md:text-base">
              teoride takılma. başlangıç için sade hesaplayıcıları kullan,
              sonra rehberlerle düzenini güçlendir.
            </p>

            <div className="mt-6">
              <Link
                to="/araclar"
                className="inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition hover:opacity-90"
              >
                araçlara git
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-24">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] bg-[#ebe3d7] p-6 md:p-8">
            <span className="text-sm font-medium text-neutral-500">
              kişiye daha uygun başlangıç
            </span>

            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
              sana uygun beslenme desteğini bul
            </h2>

            <p className="mt-4 leading-7 text-neutral-700">
              herkes için aynı plan çalışmaz. birkaç kısa soruyla seni daha
              doğru şekilde yönlendirebiliriz. özellikle duygusal yeme, kontrol
              kaybı ve sürdürülebilir düzen kurma tarafında daha doğru ilk temas
              fark yaratır.
            </p>

            <div className="mt-6 space-y-3 text-sm text-neutral-700">
              <p>• hedefe göre yönlendirme</p>
              <p>• duygusal yeme / kontrol kaybı ayrımı</p>
              <p>• direkt whatsapp üzerinden hızlı iletişim</p>
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              direkt whatsapp’tan yaz
            </a>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm md:p-8">
            <div className="mb-5">
              <span className="text-sm font-medium text-neutral-500">
                mini yönlendirme formu
              </span>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                birkaç kısa soruyla başlayalım
              </h3>
              <p className="mt-3 text-sm leading-6 text-neutral-600">
                formu doldurduğunda bilgiler hazır mesaj olarak senin WhatsApp
                hattına düşer. böylece ilk yönlendirme kontrolü sende olur.
              </p>
            </div>

            <MiniForm />
          </div>
        </div>
      </section>
    </main>
  );
}

function Guides() {
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("tümü");

  const tags = ["tümü", ...new Set(guideLibrary.map((guide) => guide.tag))];

  const filteredGuides = useMemo(() => {
    return guideLibrary.filter((guide) => {
      const matchesTag =
        selectedTag === "tümü" ? true : guide.tag === selectedTag;

      const q = query.trim().toLowerCase();
      const matchesQuery =
        q === ""
          ? true
          : guide.title.toLowerCase().includes(q) ||
            guide.desc.toLowerCase().includes(q) ||
            guide.tag.toLowerCase().includes(q);

      return matchesTag && matchesQuery;
    });
  }, [query, selectedTag]);

  return (
    <main className="mx-auto max-w-6xl px-6 py-14 md:py-20">
      <span className="text-sm font-medium text-neutral-500">rehberler</span>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">
        rehber içerikler
      </h1>
      <p className="mt-4 max-w-2xl text-neutral-700">
        ilk aşamada niş ve yüksek niyetli içeriklere odaklanıyoruz.
      </p>

      <div className="mt-8 rounded-[2rem] border border-black/5 bg-white p-5 shadow-sm">
        <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">
              rehber ara
            </label>
            <input
              type="text"
              placeholder="örnek: insülin, pcos, şişkinlik..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-2xl border border-neutral-200 px-4 py-3 outline-none focus:border-neutral-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">
              kategori filtresi
            </label>
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 outline-none focus:border-neutral-400"
            >
              {tags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-neutral-600">
          <span>
            bulunan rehber:{" "}
            <strong className="text-neutral-900">{filteredGuides.length}</strong>
          </span>
          <span className="hidden md:inline">•</span>
          <span>
            canlı içerik:{" "}
            <strong className="text-neutral-900">
              {filteredGuides.filter((guide) => guide.live).length}
            </strong>
          </span>
        </div>
      </div>

      {filteredGuides.length > 0 ? (
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredGuides.map((guide) => (
            <GuideCard key={guide.title} guide={guide} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-[2rem] border border-dashed border-black/10 bg-white p-8 text-center shadow-sm">
          <h2 className="text-xl font-semibold">eşleşen rehber bulunamadı</h2>
          <p className="mt-3 text-neutral-600">
            farklı bir kelime dene ya da kategori filtresini değiştir.
          </p>
        </div>
      )}
    </main>
  );
}

function Tools() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14 md:py-20">
      <span className="text-sm font-medium text-neutral-500">araçlar</span>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">
        çalışan araçlar
      </h1>
      <p className="mt-4 max-w-2xl text-neutral-700">
        başlangıç noktası olarak sade, hızlı ve gerçekten kullanılabilir
        araçlar burada. gereksiz kalabalık yok.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Calculator />
        <WaterCalculator />
      </div>
    </main>
  );
}

function About() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14 md:py-20">
      <span className="text-sm font-medium text-neutral-500">hakkımızda</span>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">
        gürültü değil, netlik
      </h1>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm md:p-8">
          <p className="leading-7 text-neutral-700">
            denge.fit; sağlıklı yaşamı daha ulaşılabilir, daha anlaşılır ve daha
            sürdürülebilir hale getirmek için kuruldu. amaç, insanlara baskı
            kuran bir dil değil; uygulanabilir bir düzen sunmak.
          </p>
        </div>

        <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm md:p-8">
          <ul className="space-y-4 text-neutral-700">
            <li>• sade ve uygulanabilir içerikler</li>
            <li>• niş, yüksek niyetli konu seçimi</li>
            <li>• günlük hayata uyumlu yaklaşım</li>
            <li>• araçlar + rehberler birlikte ilerleyen sistem</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

function Contact() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14 md:py-20">
      <span className="text-sm font-medium text-neutral-500">iletişim</span>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">
        bize ulaşın
      </h1>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-semibold">iletişim bilgileri</h2>
          <div className="mt-5 space-y-3 text-neutral-700">
            <p>📧 denge.fit@protonmail.com</p>
            <p>📷 @denge.fit</p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-block pt-2 text-sm font-medium underline underline-offset-4"
            >
              💬 whatsapp&apos;tan yaz
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-semibold">iş birliği</h2>
          <p className="mt-4 leading-7 text-neutral-700">
            içerik katkısı, marka iş birliği veya proje önerileri için mail
            üzerinden ulaşabilirsiniz.
          </p>
        </div>
      </div>
    </main>
  );
}

function GuideArticleInsulin() {
  const currentSlug = "/rehberler/insulin-direnci-gunluk-beslenme";

  return (
    <main className="mx-auto max-w-4xl px-6 py-14 md:py-20">
      <Link
        to="/rehberler"
        className="text-sm text-neutral-500 underline underline-offset-4"
      >
        ← rehberlere dön
      </Link>

      <article className="mt-6 overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-sm">
        <div className="h-40 bg-gradient-to-br from-emerald-100 via-lime-50 to-[#f6f1e8]" />
        <div className="p-6 md:p-10">
          <span className="inline-flex rounded-full bg-[#f6f1e8] px-3 py-1 text-xs font-medium text-neutral-700">
            kan şekeri dengesi
          </span>

          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            insülin direnci olanlar için günlük beslenme düzeni nasıl kurulmalı?
          </h1>

          <p className="mt-5 text-base leading-7 text-neutral-700">
            insülin direnci olan birçok kişi ne yemesi gerektiğinden çok, bunu
            günlük hayata nasıl uyarlayacağını bilemediği için zorlanır. sorun
            çoğu zaman tek bir besin değildir; düzensiz öğünler, uzun açlıklar,
            akşam kontrolsüz yeme ve gün içine yayılmış küçük kaçamaklardır.
          </p>

          <div className="mt-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                insülin direncinde temel problem nedir?
              </h2>
              <p className="mt-3 leading-7 text-neutral-700">
                vücut insülini üretir ama hücreler buna olması gerektiği kadar
                iyi yanıt vermez. bunun sonucu olarak kan şekeri yönetimi
                zorlaşabilir, açlık daha sık hissedilebilir ve özellikle tatlı
                isteği artabilir.
              </p>
            </section>

            <MidCTA />

            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                en sık yapılan hatalar
              </h2>
              <div className="mt-4 grid gap-4">
                <div className="rounded-2xl bg-[#f7f4ee] p-4">
                  <h3 className="font-medium">çok uzun süre aç kalmak</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    gün içinde öğün atlamak, akşam daha büyük porsiyonlara ve
                    kontrol kaybına yol açabilir.
                  </p>
                </div>
                <div className="rounded-2xl bg-[#f7f4ee] p-4">
                  <h3 className="font-medium">
                    öğünleri protein yönünden zayıf kurmak
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    sadece karbonhidrat ağırlıklı öğünler daha hızlı acıkmaya
                    neden olabilir.
                  </p>
                </div>
                <div className="rounded-2xl bg-[#f7f4ee] p-4">
                  <h3 className="font-medium">
                    akşam tatlı krizini gün boyu biriktirmek
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    gündüz yetersiz beslenme, akşam yüksek iştah olarak geri
                    dönebilir.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                günlük düzen nasıl kurulabilir?
              </h2>
              <div className="mt-4 space-y-4 text-neutral-700">
                <p>
                  <strong>1.</strong> öğün aralarını aşırı uzatma. herkes için
                  tek doğru saat yok ama uzun açlıklar seni kontrolden
                  çıkarıyorsa bunu fark edip düzen kurmak gerekir.
                </p>
                <p>
                  <strong>2.</strong> ana öğünlerde protein kaynağı bulundur.
                  yumurta, yoğurt, peynir, et, tavuk, balık, bakliyat gibi
                  seçenekler tokluğu destekler.
                </p>
                <p>
                  <strong>3.</strong> lifli besinleri artır. sebzeler, kuru
                  baklagiller, yulaf ve meyve gibi seçenekler günlük düzeni
                  destekler.
                </p>
                <p>
                  <strong>4.</strong> tatlı isteğini sadece iradeyle çözmeye
                  çalışma. önce gün içi düzenin yeterli olup olmadığına bak.
                </p>
                <p>
                  <strong>5.</strong> mükemmel liste yerine uygulanabilir sistem
                  kur. iş hayatına, eve dönüş saatine ve gerçek tempona uyan plan
                  daha değerlidir.
                </p>
              </div>
            </section>

            <section className="rounded-3xl bg-[#f6f1e8] p-5">
              <h2 className="text-xl font-semibold tracking-tight">not</h2>
              <p className="mt-3 text-sm leading-6 text-neutral-700">
                bu içerik genel bilgilendirme amaçlıdır. tanı, tedavi veya
                kişisel beslenme planı yerine geçmez. kişisel sağlık durumunuz
                için uzman desteği alınmalıdır.
              </p>
            </section>

            <BottomCTA />
          </div>
        </div>
      </article>

      <RelatedGuides currentSlug={currentSlug} />
    </main>
  );
}

function GuideArticleSweet() {
  const currentSlug = "/rehberler/tatli-istegi-nasil-azaltilir";

  return (
    <main className="mx-auto max-w-4xl px-6 py-14 md:py-20">
      <Link
        to="/rehberler"
        className="text-sm text-neutral-500 underline underline-offset-4"
      >
        ← rehberlere dön
      </Link>

      <article className="mt-6 overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-sm">
        <div className="h-40 bg-gradient-to-br from-amber-100 via-orange-50 to-[#f6f1e8]" />
        <div className="p-6 md:p-10">
          <span className="inline-flex rounded-full bg-[#f6f1e8] px-3 py-1 text-xs font-medium text-neutral-700">
            kan şekeri dengesi
          </span>

          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            insülin direncinde tatlı isteği nasıl azaltılır?
          </h1>

          <p className="mt-5 text-base leading-7 text-neutral-700">
            tatlı isteği çoğu zaman sadece irade eksikliği değildir. gün içinde
            yetersiz beslenme, uzun açlık, düşük protein alımı ve düzensiz öğün
            akşam saatlerinde daha güçlü istekler oluşturabilir. bu yüzden
            çözüm yalnızca tatlıyı yasaklamak değildir.
          </p>

          <div className="mt-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                tatlı krizleri neden artar?
              </h2>
              <p className="mt-3 leading-7 text-neutral-700">
                gün boyu yeterli doygunluk sağlanmadığında vücut hızlı enerji
                veren seçeneklere yönelmeye daha yatkın hale gelir. özellikle
                akşam saatlerinde yorgunluk ve stres de bu isteği güçlendirebilir.
              </p>
            </section>

            <MidCTA />

            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                en sık yapılan yanlışlar
              </h2>
              <div className="mt-4 grid gap-4">
                <div className="rounded-2xl bg-[#f7f4ee] p-4">
                  <h3 className="font-medium">tüm gün çok az yemek</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    akşam gelen kontrolsüz tatlı isteğinin en sık nedenlerinden
                    biridir.
                  </p>
                </div>
                <div className="rounded-2xl bg-[#f7f4ee] p-4">
                  <h3 className="font-medium">yasak koyup sonra patlamak</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    aşırı katı kurallar kısa vadede işe yarıyor gibi görünse de
                    çoğu zaman geri teper.
                  </p>
                </div>
                <div className="rounded-2xl bg-[#f7f4ee] p-4">
                  <h3 className="font-medium">
                    stres ve uykuyu görmezden gelmek
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    sadece besine odaklanıp yaşam düzenini unutmak sorunu eksik
                    çözmeye yol açar.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                ne yapmak daha mantıklı?
              </h2>
              <div className="mt-4 space-y-4 text-neutral-700">
                <p>
                  <strong>1.</strong> ana öğünleri daha dengeli kur. protein,
                  lif ve yeterli hacim tatlı isteğinin şiddetini azaltabilir.
                </p>
                <p>
                  <strong>2.</strong> öğün atlamayı alışkanlık haline getirme.
                  özellikle seni akşam kontrolden çıkarıyorsa bu önemli.
                </p>
                <p>
                  <strong>3.</strong> tatlıyı tamamen “yasaklı” kategoriye koyma.
                  bu psikolojik baskıyı artırabilir.
                </p>
                <p>
                  <strong>4.</strong> uykunu ve stres düzeyini ciddiye al.
                  yorgunluk arttıkça hızlı ödül arayışı da artabilir.
                </p>
                <p>
                  <strong>5.</strong> hedefini “hiç istememek” değil, “daha iyi
                  yönetmek” olarak koy. bu daha gerçekçi ve sürdürülebilir olur.
                </p>
              </div>
            </section>

            <section className="rounded-3xl bg-[#f6f1e8] p-5">
              <h2 className="text-xl font-semibold tracking-tight">not</h2>
              <p className="mt-3 text-sm leading-6 text-neutral-700">
                bu içerik genel bilgilendirme amaçlıdır. kişisel sağlık
                durumunuz ve özel ihtiyaçlarınız için uzman desteği alınmalıdır.
              </p>
            </section>

            <BottomCTA />
          </div>
        </div>
      </article>

      <RelatedGuides currentSlug={currentSlug} />
    </main>
  );
}

function GuideArticleDesk() {
  const currentSlug = "/rehberler/masa-basi-beslenme-hatalari";

  return (
    <main className="mx-auto max-w-4xl px-6 py-14 md:py-20">
      <Link
        to="/rehberler"
        className="text-sm text-neutral-500 underline underline-offset-4"
      >
        ← rehberlere dön
      </Link>

      <article className="mt-6 overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-sm">
        <div className="h-40 bg-gradient-to-br from-sky-100 via-cyan-50 to-[#f6f1e8]" />
        <div className="p-6 md:p-10">
          <span className="inline-flex rounded-full bg-[#f6f1e8] px-3 py-1 text-xs font-medium text-neutral-700">
            günlük yaşam
          </span>

          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            masa başı çalışanlarda en sık yapılan beslenme hataları
          </h1>

          <p className="mt-5 text-base leading-7 text-neutral-700">
            masa başı çalışma düzeni sadece hareketi azaltmaz; öğün saatlerini,
            susama farkındalığını ve atıştırma davranışını da etkiler. bu yüzden
            problem çoğu zaman “ne yediğinden” çok, “gün içinde nasıl bir düzen
            kurduğundan” kaynaklanır.
          </p>

          <div className="mt-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                neden masa başı düzende işler zorlaşıyor?
              </h2>
              <p className="mt-3 leading-7 text-neutral-700">
                uzun süre oturmak, ekran karşısında çalışmak ve yoğun odak
                gerektiren işler; hem açlık sinyallerini karıştırabilir hem de
                fark etmeden sık atıştırmaya yol açabilir. ayrıca çoğu kişi su
                tüketimini ve hareket molalarını ihmal eder.
              </p>
            </section>

            <MidCTA />

            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                en sık görülen hatalar
              </h2>
              <div className="mt-4 grid gap-4">
                <div className="rounded-2xl bg-[#f7f4ee] p-4">
                  <h3 className="font-medium">öğün atlayıp akşam yüklenmek</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    gün içindeki düzensizlik akşam daha yüksek porsiyonlara
                    neden olabilir.
                  </p>
                </div>
                <div className="rounded-2xl bg-[#f7f4ee] p-4">
                  <h3 className="font-medium">susamayı açlık sanmak</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    gün boyu az su içen kişiler gereksiz atıştırmaya daha açık
                    olabilir.
                  </p>
                </div>
                <div className="rounded-2xl bg-[#f7f4ee] p-4">
                  <h3 className="font-medium">ekran başında otomatik yemek</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    farkındalık azaldığında tüketilen miktar kolayca artabilir.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                daha iyi bir düzen nasıl kurulur?
              </h2>
              <div className="mt-4 space-y-4 text-neutral-700">
                <p>
                  <strong>1.</strong> iş temposuna uygun sabit bir öğün akışı
                  belirle. mükemmel saat değil, sürdürülebilir düzen önemli.
                </p>
                <p>
                  <strong>2.</strong> masanda “göz önünde” sürekli atıştırmalık
                  tutma. çevre düzeni davranışı çok etkiler.
                </p>
                <p>
                  <strong>3.</strong> su içmeyi hatırlatacak küçük bir sistem
                  kur. şişe bulundurmak bile fark yaratabilir.
                </p>
                <p>
                  <strong>4.</strong> ana öğünde protein ve sebze/lif dengesini
                  ihmal etme. bu, daha uzun tokluk sağlar.
                </p>
                <p>
                  <strong>5.</strong> kısa hareket molaları ekle. sadece kalori
                  değil, zihinsel yorgunluk açısından da işe yarar.
                </p>
              </div>
            </section>

            <section className="rounded-3xl bg-[#f6f1e8] p-5">
              <h2 className="text-xl font-semibold tracking-tight">not</h2>
              <p className="mt-3 text-sm leading-6 text-neutral-700">
                bu içerik genel bilgilendirme amaçlıdır. kişisel sağlık
                durumunuz, iş rutininiz ve özel ihtiyaçlarınız için uzman
                desteği daha doğru sonuç verir.
              </p>
            </section>

            <BottomCTA />
          </div>
        </div>
      </article>

      <RelatedGuides currentSlug={currentSlug} />
    </main>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { to: "/", label: "ana sayfa" },
    { to: "/rehberler", label: "rehberler" },
    { to: "/araclar", label: "araçlar" },
    { to: "/hakkimizda", label: "hakkımızda" },
    { to: "/iletisim", label: "iletişim" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f6f1e8]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-xl font-semibold tracking-tight">
          denge.fit
        </Link>

        <nav className="hidden gap-6 text-sm md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="transition hover:opacity-70"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex rounded-xl border border-black/10 bg-white px-3 py-2 text-sm md:hidden"
        >
          menü
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-black/5 bg-white md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-6 py-4 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-3 transition hover:bg-black/5"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white/60">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="text-lg font-semibold">denge.fit</h3>
          <p className="mt-3 max-w-md text-sm leading-6 text-neutral-600">
            sağlıklı yaşamı sadeleştiren rehberler ve pratik araçlar. amaç,
            insanları bilgiye boğmak değil; uygulanabilir bir başlangıç sunmak.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
            menü
          </h4>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <Link to="/" className="hover:opacity-70">
              ana sayfa
            </Link>
            <Link to="/rehberler" className="hover:opacity-70">
              rehberler
            </Link>
            <Link to="/araclar" className="hover:opacity-70">
              araçlar
            </Link>
            <Link to="/hakkimizda" className="hover:opacity-70">
              hakkımızda
            </Link>
            <Link to="/iletisim" className="hover:opacity-70">
              iletişim
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
            iletişim
          </h4>
          <div className="mt-3 space-y-2 text-sm text-neutral-700">
            <p>📧 denge.fit@protonmail.com</p>
            <p>📷 @denge.fit</p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-block pt-1 underline underline-offset-4"
            >
              💬 whatsapp
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-black/5 px-6 py-4 text-center text-xs text-neutral-500">
        © 2026 denge.fit — sade, uygulanabilir, sürdürülebilir.
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#f6f1e8] text-neutral-900">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rehberler" element={<Guides />} />
        <Route path="/araclar" element={<Tools />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route
          path="/rehberler/insulin-direnci-gunluk-beslenme"
          element={<GuideArticleInsulin />}
        />
        <Route
          path="/rehberler/tatli-istegi-nasil-azaltilir"
          element={<GuideArticleSweet />}
        />
        <Route
          path="/rehberler/masa-basi-beslenme-hatalari"
          element={<GuideArticleDesk />}
        />
      </Routes>

      <Footer />
    </div>
  );
}