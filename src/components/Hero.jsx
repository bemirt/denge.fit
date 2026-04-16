function Hero() {
  return (
    <section className="px-5 pb-16 pt-14 md:px-6 md:pb-24 md:pt-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-14">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-sm text-[var(--color-text-soft)] shadow-[0_6px_20px_rgba(0,0,0,0.03)]">
            sade rehberler, pratik hesaplayıcılar, net başlangıç
          </p>

          <h1 className="max-w-2xl text-4xl font-semibold leading-[1.02] tracking-[-0.04em] md:text-6xl">
            yanlış yöntemlerle vakit kaybetme,
            <span className="block">sana uygun yolu netleştir</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--color-text-soft)] md:text-xl">
            sade içerikler, pratik hesaplayıcılar ve doğru başlangıç için net
            yönlendirme ile nereden başlayacağını daha hızlı gör.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#iletisim"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-text)] px-6 py-3 text-center text-sm font-semibold !text-white whitespace-nowrap transition hover:opacity-90"
            >
              ihtiyacını kısaca yaz
            </a>

            <a
              href="#araclar"
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-white px-6 py-3 text-center text-sm font-semibold text-[var(--color-text)] transition hover:bg-[var(--color-surface)]"
            >
              hesaplayıcıları dene
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-[var(--color-border)] bg-white px-5 py-4">
              <p className="text-sm text-[var(--color-text-soft)]">burada ne var?</p>
              <p className="mt-1 font-semibold">sade rehberler ve hesaplayıcılar</p>
            </div>

            <div className="rounded-3xl border border-[var(--color-border)] bg-white px-5 py-4">
              <p className="text-sm text-[var(--color-text-soft)]">nasıl fayda sağlar?</p>
              <p className="mt-1 font-semibold">ihtiyacını daha net görmeni sağlar</p>
            </div>

            <div className="rounded-3xl border border-[var(--color-border)] bg-white px-5 py-4">
              <p className="text-sm text-[var(--color-text-soft)]">şimdi ne yapmalı?</p>
              <p className="mt-1 font-semibold">whatsapp'tan yaz, birlikte netleştirelim</p>
            </div>
          </div>
        </div>

        <div>
          <div className="relative overflow-hidden rounded-[36px] border border-[var(--color-border)] bg-white p-5 shadow-[0_24px_80px_rgba(0,0,0,0.05)] md:p-6">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[rgba(168,195,160,0.28)] blur-3xl"></div>
            <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-[rgba(237,227,212,0.8)] blur-3xl"></div>

            <div className="relative rounded-[30px] border border-[rgba(47,58,50,0.06)] bg-[linear-gradient(180deg,#ffffff_0%,#f6f1e8_100%)] p-6 md:p-7">
              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-[var(--color-text-soft)]">neden işe yarar?</p>
                  <p className="mt-1 text-2xl font-semibold tracking-[-0.03em]">
                    karmaşayı azaltır, ilk adımı netleştirir
                  </p>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]">
                  <div className="h-5 w-5 rounded-full border-2 border-[var(--color-text)]"></div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-[24px] border border-[rgba(47,58,50,0.06)] bg-white p-4">
                  <p className="text-sm text-[var(--color-text-soft)]">1. adım</p>
                  <p className="mt-1 text-base font-medium">ihtiyacını kısaca netleştir</p>
                </div>

                <div className="rounded-[24px] border border-[rgba(47,58,50,0.06)] bg-white p-4">
                  <p className="text-sm text-[var(--color-text-soft)]">2. adım</p>
                  <p className="mt-1 text-base font-medium">doğru başlangıç için ilk yönlendirmeyi al</p>
                </div>

                <div className="rounded-[24px] border border-[rgba(47,58,50,0.06)] bg-white p-4">
                  <p className="text-sm text-[var(--color-text-soft)]">3. adım</p>
                  <p className="mt-1 text-base font-medium">uygun uzman veya uygun çözümle ilerle</p>
                </div>
              </div>

              <div className="mt-6 rounded-[24px] bg-[var(--color-primary)]/35 p-4">
                <p className="text-sm text-[var(--color-text-soft)]">yaklaşım</p>
                <p className="mt-1 font-medium text-[var(--color-text)]">
                  amaç daha fazla bilgi yüklemek değil; doğru olanı daha sade ve
                  uygulanabilir hale getirmek.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl">
        <div className="rounded-[32px] border border-[var(--color-border)] bg-white/90 p-4 shadow-[0_12px_40px_rgba(0,0,0,0.04)] md:p-5">
          <div className="grid gap-3 md:grid-cols-3">
            <div className="rounded-[24px] border border-[rgba(47,58,50,0.06)] bg-[var(--color-surface)] px-4 py-4">
              <p className="text-sm text-[var(--color-text-soft)]">güven veren içerik</p>
              <p className="mt-1 font-semibold text-[var(--color-text)]">uzman içerikleri</p>
            </div>

            <div className="rounded-[24px] border border-[rgba(47,58,50,0.06)] bg-[var(--color-surface)] px-4 py-4">
              <p className="text-sm text-[var(--color-text-soft)]">kolay başlangıç</p>
              <p className="mt-1 font-semibold text-[var(--color-text)]">sade ve uygulanabilir yaklaşım</p>
            </div>

            <div className="rounded-[24px] border border-[rgba(47,58,50,0.06)] bg-[var(--color-surface)] px-4 py-4">
              <p className="text-sm text-[var(--color-text-soft)]">sana göre yön</p>
              <p className="mt-1 font-semibold text-[var(--color-text)]">kişiye özel yönlendirme</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
