export default function About() {
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
            <li>• hesaplayıcılar + rehberler birlikte ilerleyen sistem</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
