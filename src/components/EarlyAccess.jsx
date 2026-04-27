function EarlyAccess() {
  return (
    <section id="basla" className="px-5 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-4xl rounded-[40px] border border-[var(--color-border)] bg-white p-8 text-center md:p-14">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-text-soft)]">
          başlangıç
        </p>

        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">
          <em className="italic">denge</em> yolculuğunun başındayız.
          <span className="block">ilk duyanlardan biri ol.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--color-text-soft)]">
          şu an ilk versiyonu inşa ediyoruz. yakında daha güçlü yönlendirme
          yapıları, içerikler ve araçlarla büyüyeceğiz.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:denge.fit@protonmail.com"
            className="inline-flex min-w-[210px] items-center justify-center rounded-full bg-green-800 px-6 py-3 text-sm font-semibold !text-white whitespace-nowrap transition hover:bg-green-900"
          >
            denge.fit@protonmail.com
          </a>

          <a
            href="https://www.instagram.com/denge.fit/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-w-[210px] items-center justify-center rounded-full border border-[var(--color-border)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-text)] transition hover:bg-[var(--color-surface)]"
          >
            instagram üzerinden takip et
          </a>
        </div>
      </div>
    </section>
  );
}

export default EarlyAccess;
