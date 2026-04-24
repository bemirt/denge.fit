import { WHATSAPP_LINK } from "../shared/siteData";

export default function Contact() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10 md:py-14">
      <section className="max-w-3xl">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-green-800">
          iletişim
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-900 md:text-6xl">
          bize ulaş
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-neutral-700 md:text-lg">
          soruların, iş birlikleri veya sana uygun yönlendirme için bize yaz.
          kısa ve net şekilde dönüş yapalım.
        </p>
      </section>

      <section className="mt-8 rounded-[2rem] border border-black/5 bg-white p-6 shadow-[0_20px_60px_rgba(17,24,39,0.06)] md:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-0">
          <div className="lg:pr-8">
            <p className="text-sm font-medium text-green-800">iletişim</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900">
              doğrudan bize yaz
            </h2>
            <p className="mt-4 max-w-sm text-base leading-8 text-neutral-700">
              soruların, iş birlikleri veya geri bildirimlerin için bize
              yazabilirsin.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href="mailto:hello@denge.fit"
                className="inline-flex items-center justify-center rounded-2xl bg-green-800 px-5 py-3 text-sm font-medium text-white transition hover:bg-green-900"
              >
                hello@denge.fit
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border border-green-200 px-5 py-3 text-sm font-medium text-green-900 transition hover:bg-green-50"
              >
                whatsapp üzerinden iletişime geç
              </a>
            </div>
          </div>

          <div className="border-black/6 lg:border-l lg:px-8">
            <p className="text-sm font-medium text-green-800">diğer kanallar</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900">
              güvenli ve net iletişim
            </h2>
            <p className="mt-4 max-w-sm text-base leading-8 text-neutral-700">
              iş birliği, içerik katkısı veya proje önerileri için farklı
              iletişim seçeneklerini de kullanabilirsin.
            </p>

            <div className="mt-6 space-y-3">
              <div className="rounded-2xl border border-black/5 bg-[#fcfaf6] p-4">
                <p className="text-sm font-medium text-neutral-500">e-posta</p>
                <a
                  href="mailto:hello@denge.fit"
                  className="mt-2 inline-flex text-base font-medium text-neutral-900 transition hover:text-green-800"
                >
                  hello@denge.fit
                </a>
              </div>

              <div className="rounded-2xl border border-black/5 bg-[#fcfaf6] p-4">
                <p className="text-sm font-medium text-neutral-500">instagram</p>
                <p className="mt-2 text-base font-medium text-neutral-900">
                  instagram üzerinden takip et
                </p>
              </div>
            </div>
          </div>

          <div className="border-black/6 lg:border-l lg:pl-8">
            <p className="text-sm font-medium text-green-800">
              hangi durumlar için uygun?
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900">
              şunlarda yardımcı olabiliriz
            </h2>

            <div className="mt-6 space-y-4 text-base leading-7 text-neutral-700">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-semibold text-green-800">
                  ✓
                </span>
                <p>beslenme desteği hakkında ilk iletişim</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-semibold text-green-800">
                  ✓
                </span>
                <p>doğru uzman veya doğru başlangıç arayışı</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-semibold text-green-800">
                  ✓
                </span>
                <p>iş birliği ve içerik proje talepleri</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-[1.75rem] border border-green-100 bg-green-50/60 p-5 md:p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-green-800">
                mini test
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
                sana uygun başlangıcı birkaç soruda bul
              </h3>
              <p className="mt-2 text-sm leading-7 text-neutral-700 md:text-base">
                kısa birkaç soruyla nerede zorlandığını daha net gör, sana uygun
                başlangıç noktasını belirle.
              </p>
            </div>

            <a
              href="/testler#mini-test"
              className="inline-flex items-center justify-center rounded-2xl bg-green-800 px-6 py-3 text-sm font-medium text-white transition hover:bg-green-900"
            >
              mini testi başlat
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
