import { Link } from "react-router-dom";
import { WHATSAPP_LINK, guideLibrary } from "../shared/siteData";
import { MiniForm } from "../shared/siteContent";

export default function Home() {
  const featured = guideLibrary.slice(0, 3);

  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-14 md:pb-24 md:pt-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium backdrop-blur">
              sade rehberler ve net başlangıç
            </span>

            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              ne yapacağını netleştir,
              <br />
              sana uygun yerden başla.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-neutral-700 md:text-lg">
              denge.fit; beslenme ve günlük yaşam tarafında kafası karışanlara
              sade içerikler, pratik hesaplayıcılar ve doğru ilk yönlendirme sunar.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                ihtiyacını kısaca yaz
              </a>
              <Link
                to="/araclar"
                className="rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-medium transition hover:bg-black/5"
              >
                hesaplayıcıları dene
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-neutral-600">
              <div>
                <p className="font-semibold text-neutral-900">burada ne var?</p>
                <p>sade rehberler ve pratik hesaplayıcılar</p>
              </div>
              <div>
                <p className="font-semibold text-neutral-900">nasıl fayda sağlar?</p>
                <p>doğru başlangıcı daha net görmeni sağlar</p>
              </div>
              <div>
                <p className="font-semibold text-neutral-900">şimdi ne yapmalı?</p>
                <p>kısa yaz, uygun yönlendirme al</p>
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
              hesaplayıcılarla hızlıca başla
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
                hesaplayıcılara git
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
              direkt whatsapp'tan yaz
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
