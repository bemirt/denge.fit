import { Link } from "react-router-dom";
import { WHATSAPP_LINK, guideLibrary } from "../shared/siteData";
import { MiniCTA, MiniForm } from "../shared/siteContent";

const featureItems = [
  "kısa ve net rehberlerle temel konuları anlaşılır hale getirir",
  "abartılı vaatler yerine dengeli ve gerçekçi bir yaklaşım benimser",
  "kullanıcıların sık zorlandığı alanlara odaklanır",
  "rehberler ve araçlarla günlük kararları biraz daha kolaylaştırır",
];

export default function Home() {
  const guides = guideLibrary.slice(0, 4);

  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-14 md:pb-24 md:pt-20">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs font-medium backdrop-blur">
              yeni nesil rehberler ve kolay başlangıç
            </span>

            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              nerede yanlış yaptığını öğren,
              <br />
              sana uygun yerden başla.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-gray-500 md:text-lg">
              <em className="italic">denge</em>, beslenme ve günlük yaşam
              tarafında kafası karışanlara sade içerikler, pratik
              hesaplayıcılar ve doğru ilk yönlendirme sunar.
            </p>

            <div className="mt-8 grid gap-4 lg:grid-cols-[1.6fr_1fr]">
              <a
                href="/testler#mini-test"
                className="flex h-full min-h-[360px] flex-col rounded-[28px] border border-green-200 bg-green-50 p-5 text-left transition hover:-translate-y-0.5 hover:border-green-300 hover:bg-green-100/70 md:p-6"
              >
                <p className="text-sm font-medium tracking-wide text-green-800">
                  mini test
                </p>
                <h2 className="mt-2 text-xl font-semibold text-neutral-900 md:text-2xl">
                  sana uygun başlangıcı birkaç soruda bul
                </h2>
                <p className="mt-2 text-sm leading-6 text-neutral-600 md:text-base">
                  kısa birkaç soruyla nerede zorlandığını daha net gör, sana
                  uygun başlangıç noktasını belirle.
                </p>
                <span className="mt-auto inline-flex min-w-[220px] items-center justify-center self-start rounded-xl bg-green-800 px-5 py-3 text-sm font-medium text-white transition hover:bg-green-900">
                  mini testi başlat
                </span>
              </a>

              <Link
                to="/araclar"
                className="flex h-full min-h-[360px] flex-col rounded-[28px] border border-green-100 bg-white p-6 transition hover:-translate-y-0.5 hover:border-green-200 hover:bg-[#fcfdf9] md:p-8"
              >
                <p className="text-sm font-medium text-green-800">araçlar</p>
                <h3 className="mt-3 text-2xl font-semibold text-gray-900">
                  hesaplayıcıları keşfet
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  vücut kitle indeksi ve günlük kalori ihtiyacı gibi temel
                  araçlarla daha net bir başlangıç yap.
                </p>
                <span className="mt-auto inline-flex min-w-[220px] items-center justify-center self-start rounded-xl bg-green-800 px-5 py-3 text-sm font-medium text-white transition hover:bg-green-900">
                  hesaplayıcılara git
                </span>
              </Link>
            </div>
          </div>

          <div className="grid gap-5 lg:pl-8 lg:grid-rows-[auto_auto] lg:pt-1">
            <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-sm">
              <div className="bg-gradient-to-br from-[#dbe8d3] via-[#eef3e6] to-[#f6f1e8] p-6 md:p-7">
                <p className="text-sm font-medium text-neutral-500">
                  neden sürekli başa dönülüyor?
                </p>
                <div className="mt-4 grid gap-3">
                  <div className="rounded-2xl bg-white/85 p-4 backdrop-blur">
                    <h3 className="font-medium">bilgi çok, sistem yok</h3>
                    <p className="mt-1 text-sm text-neutral-600">
                      neyin doğru olduğunu bilsen bile günlük düzene dönüştürmek
                      zor olabilir.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/85 p-4 backdrop-blur">
                    <h3 className="font-medium">sürdürülemeyen planlar</h3>
                    <p className="mt-1 text-sm text-neutral-600">
                      aşırı katı listeler kısa süreli motivasyon üretir ama uzun
                      vadede dağılır.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/85 p-4 backdrop-blur">
                    <h3 className="font-medium">gerçek hayata uymayan öneriler</h3>
                    <p className="mt-1 text-sm text-neutral-600">
                      iş, tempo ve günlük yaşam çoğu zaman hesaba katılmaz.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-black/5 bg-white px-6 py-4">
                <p className="text-sm text-neutral-600">
                  günün, dünden daha iyi olsun
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[2rem] border border-black/5 bg-white px-5 py-5 shadow-sm">
                <p className="text-sm text-neutral-500">burada ne var?</p>
                <p className="mt-2 text-[15px] font-semibold leading-8">
                  sade rehberler ve pratik hesaplayıcılar
                </p>
              </div>
              <div className="rounded-[2rem] border border-black/5 bg-white px-5 py-5 shadow-sm">
                <p className="text-sm text-neutral-500">nasıl fayda sağlar?</p>
                <p className="mt-2 text-[15px] font-semibold leading-8">
                  doğru başlangıcı daha net görmeni sağlar
                </p>
              </div>
              <div className="rounded-[2rem] border border-black/5 bg-white px-5 py-5 shadow-sm">
                <p className="text-sm text-neutral-500">şimdi ne yapmalı?</p>
                <p className="mt-2 text-[15px] font-semibold leading-8">
                  kısa yaz, uygun yönlendirme al
                </p>
              </div>
              <div className="rounded-[2rem] border border-black/5 bg-white px-5 py-5 shadow-sm">
                <p className="text-sm text-neutral-500">ek olarak</p>
                <p className="mt-2 text-[15px] font-semibold leading-8">
                  mini testlerle kendini daha iyi tanı
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
              değer önerisi
            </span>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
              sade, uygulanabilir, sürdürülebilir.
            </h2>
            <p className="mt-4 text-neutral-700">
              <em className="italic">denge</em> bu yüzden abartısız, anlaşılır
              ve günlük hayata daha kolay taşınabilecek içeriklere odaklanır.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {featureItems.map((item) => (
              <div
                key={item}
                className="rounded-xl border p-4 text-sm text-gray-700"
              >
                {item}
              </div>
            ))}
          </div>

          <MiniCTA className="mt-8" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-24">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-medium text-neutral-500">
              rehberler
            </span>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
              rehberler
            </h2>
            <p className="mt-3 text-neutral-600">
              içerik grupları, ilgini çekebileceğini düşündüğümüz spesifik
              konular
            </p>
          </div>

          <Link
            to="/rehberler"
            className="text-sm font-medium underline underline-offset-4"
          >
            tüm rehberleri gör
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {guides.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className={`h-32 bg-gradient-to-br ${item.accent}`} />
              <div className="flex min-h-[430px] flex-col p-6">
                <span className="inline-flex rounded-full bg-[#f6f1e8] px-3 py-1 text-xs font-medium text-neutral-700">
                  {item.tag}
                </span>
                <h3 className="mt-4 text-lg font-semibold leading-snug">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  {item.desc}
                </p>
                <Link
                  to={item.slug}
                  className="mt-auto inline-block pt-2 text-sm font-medium underline underline-offset-4"
                >
                  rehberi aç
                </Link>
              </div>
            </article>
          ))}
        </div>

        <MiniCTA className="mt-8" />
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-24">
        <div className="rounded-[2rem] bg-green-800 px-6 py-10 text-white md:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="max-w-2xl">
              <div className="mb-8">
                <p className="text-sm font-medium text-white/70">araçlar</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">
                  hesaplayıcılar
                </h2>
              </div>
              <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                karar vermeyi kolaylaştıran başlangıç araçları
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/80 md:text-base">
                teoride takılmadan, önce mevcut durumu gör. sonra rehberlerle
                düzenini biraz daha net kur.
              </p>

              <div className="mt-6">
                <Link
                  to="/araclar"
                  className="inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-medium text-green-900 transition hover:bg-white/90"
                >
                  araçlara git
                </Link>
              </div>
            </div>

            <MiniCTA className="border-white/20 bg-white text-neutral-900" />
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
              sana uygun yönü daha hızlı bul
            </h2>

            <p className="mt-4 leading-7 text-neutral-700">
              herkes için aynı yol çalışmaz. kısa bir mesajla veya mini testle
              daha doğru ilk yönlendirmeyi almak, başlangıcı belirgin şekilde
              kolaylaştırır.
            </p>

            <div className="mt-6 space-y-3 text-sm text-neutral-700">
              <p>- hedefe göre yönlendirme</p>
              <p>- sık zorlanılan alanları daha net görme</p>
              <p>- whatsapp üzerinden iletişime geç</p>
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block rounded-xl bg-green-800 px-5 py-3 text-sm font-medium text-white transition hover:bg-green-900"
            >
              whatsapp üzerinden iletişime geç
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
                formu doldurduğunda bilgiler hazır mesaj olarak WhatsApp
                ekranında açılır. böylece ilk yönlendirme daha hızlı başlar.
              </p>
            </div>

            <MiniForm />
          </div>
        </div>
      </section>
    </main>
  );
}
