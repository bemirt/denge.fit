function WhySection() {
  return (
    <section id="neden" className="px-5 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-text-soft)]">
            neden <em className="italic">denge</em>
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
            çünkü insanlar çoğu zaman bilgiye değil,
            <span className="block">güvenilir bir sadeleştirmeye ihtiyaç duyuyor</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-[var(--color-text-soft)]">
            sosyal medyada ve internette içerik çok fazla. ama çok içerik
            olması, doğru karar vermeyi kolaylaştırmıyor.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-[30px] border border-[var(--color-border)] bg-white p-7">
            <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-text-soft)]">01</p>
            <p className="mt-4 text-2xl font-semibold tracking-[-0.03em]">bilgi kalabalığı</p>
            <p className="mt-4 leading-7 text-[var(--color-text-soft)]">
              tekrar eden ve bağlamdan kopuk içerikler kullanıcıyı daha yorgun
              hale getirir.
            </p>
          </div>

          <div className="rounded-[30px] border border-[var(--color-border)] bg-white p-7">
            <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-text-soft)]">02</p>
            <p className="mt-4 text-2xl font-semibold tracking-[-0.03em]">uzman seçimi zor</p>
            <p className="mt-4 leading-7 text-[var(--color-text-soft)]">
              doğru uzmana ulaşmak her zaman kolay değil.
            </p>
          </div>

          <div className="rounded-[30px] border border-[var(--color-border)] bg-white p-7">
            <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-text-soft)]">03</p>
            <p className="mt-4 text-2xl font-semibold tracking-[-0.03em]">net yönlendirme eksik</p>
            <p className="mt-4 leading-7 text-[var(--color-text-soft)]">
              insanlar çoğu zaman ne aradığını kabaca biliyor ama nasıl
              ilerlemesi gerektiğini bilmiyor. <em className="italic">denge</em>{" "}
              burada devreye giriyor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhySection;
