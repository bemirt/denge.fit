function ApproachSection() {
  return (
    <section className="px-5 py-16 md:px-6 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
        <div className="rounded-[34px] border border-[var(--color-border)] bg-[var(--color-primary)] p-8 md:p-9">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-text-soft)]">
            yaklaşımımız
          </p>
          <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em]">
            sade, uygulanabilir, sürdürülebilir.
          </h3>
          <p className="mt-4 max-w-xl leading-8 text-[var(--color-text)]">
            <em className="italic">denge</em> tarafında amaç, büyük sloganlar
            değil; uzun vadede güven oluşturan netlik ve sadelik.
          </p>
        </div>

        <div className="rounded-[34px] border border-[var(--color-border)] bg-white p-8 md:p-9">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-text-soft)]">
            uzun vade
          </p>
          <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em]">
            rehberler, araçlar ve yönlendirme aynı yapıda buluşur
          </h3>
          <p className="mt-4 max-w-xl leading-8 text-[var(--color-text-soft)]">
            hedef sadece bir açılış sayfası değil. bu yapı zamanla içerik,
            araçlar ve doğru ilk yönlendirme tarafında büyüyen bir sisteme
            dönüşür.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ApproachSection;
