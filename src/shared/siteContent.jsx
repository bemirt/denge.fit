import { useState } from "react";
import { Link } from "react-router-dom";
import { WHATSAPP_LINK, guideLibrary } from "./siteData";

export function MiniCTA({ className = "", href = "/testler#mini-test" }) {
  return (
    <div
      className={`rounded-2xl border border-green-200 bg-green-50 p-5 md:p-6 ${className}`.trim()}
    >
      <p className="text-sm font-medium uppercase tracking-wide text-green-800">
        mini test
      </p>
      <h3 className="mt-2 text-xl font-semibold text-gray-900 md:text-2xl">
        sana uygun başlangıcı birkaç soruda bul
      </h3>
      <p className="mt-2 text-sm text-gray-600 md:text-base">
        kısa birkaç soruyla nerede zorlandığını daha net gör, sana uygun
        başlangıç noktasını belirle.
      </p>
      <a
        href={href}
        className="mt-4 inline-flex items-center justify-center rounded-xl bg-green-800 px-5 py-3 font-medium text-white transition hover:bg-green-900"
      >
        mini testi başlat
      </a>
    </div>
  );
}

export function MiniForm() {
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

    const message = `Merhaba, denge üzerinden mini form doldurdum.

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

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-xl bg-green-800 px-5 py-3 text-sm font-medium text-white transition hover:bg-green-900"
        >
          whatsapp
        </button>

        <span className="text-center text-sm text-neutral-400">veya</span>

        <a
          href="mailto:hello@denge.fit"
          className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-medium text-neutral-800 transition hover:bg-[#f3eee5]"
        >
          e-posta gönder
        </a>
      </div>

      <a
        href="mailto:hello@denge.fit"
        className="inline-flex text-sm font-medium text-green-800 transition hover:text-green-900"
      >
        hello@denge.fit
      </a>

      <p className="text-xs leading-6 text-neutral-500">
        butona bastığında bilgiler hazır mesaj olarak WhatsApp ekranında açılır.
      </p>
    </form>
  );
}

export function MidCTA() {
  return (
    <div className="mt-10 rounded-3xl bg-green-800 p-6 text-white">
      <h3 className="text-xl font-semibold">bu döngüden çıkmak istiyorsan</h3>
      <p className="mt-3 text-sm leading-6 text-white/80">
        sana uygun beslenme düzenini birlikte netleştirebiliriz. hızlıca yaz,
        nasıl ilerleyebileceğimizi söyleyelim.
      </p>

      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-block rounded-xl bg-white px-5 py-3 text-sm font-medium text-green-900 transition hover:bg-white/90"
      >
        whatsapp üzerinden iletişime geç
      </a>
    </div>
  );
}

export function BottomCTA() {
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
        className="mt-5 inline-block rounded-xl bg-green-800 px-5 py-3 text-sm font-medium text-white transition hover:bg-green-900"
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

export function RelatedGuides({ currentSlug }) {
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

export function GuideCard({ guide }) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-sm">
      <div className={`h-28 bg-gradient-to-br ${guide.accent}`} />
      <div className="p-5">
        <span className="inline-flex rounded-full bg-[#f6f1e8] px-3 py-1 text-xs font-medium text-neutral-700">
          {guide.tag}
        </span>

        <h3 className="mt-4 text-lg font-medium leading-snug">{guide.title}</h3>
        <p className="mt-2 text-sm leading-6 text-neutral-600">{guide.desc}</p>

        <Link
          to={guide.slug}
          className="mt-4 inline-block text-sm font-medium underline underline-offset-4"
        >
          rehberi oku
        </Link>
      </div>
    </div>
  );
}
