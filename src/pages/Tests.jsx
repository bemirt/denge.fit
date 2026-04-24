import MiniTestSection from "../components/MiniTestSection";
import { MiniForm } from "../shared/siteContent";

const testCards = [
  {
    eyebrow: "aktif test",
    title: "mini başlangıç testi",
    description:
      "kısa birkaç soruyla nerede zorlandığını gör ve kendine daha uygun bir başlangıç noktası bul.",
  },
  {
    eyebrow: "testler",
    title: "farklı ihtiyaçlara göre büyüyecek",
    description:
      "zamanla yeme düzeni, süreklilik ve günlük akış gibi farklı alanlar için yeni testler de burada yer alacak.",
  },
];

export default function Tests() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14 md:py-20">
      <div className="mb-8">
        <p className="text-sm font-medium text-neutral-500">testler</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900">
          başlangıç testleri
        </h1>
      </div>

      <p className="max-w-2xl text-neutral-700">
        kısa ve uygulanabilir testlerle önce nerede takıldığını gör. sonra sana
        daha uygun bir ilk adımı seçmek kolaylaşsın.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {testCards.map((card) => (
          <div
            key={card.title}
            className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm"
          >
            <p className="text-sm font-medium text-green-800">{card.eyebrow}</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900">
              {card.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-neutral-600 md:text-base">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 scroll-mt-24">
        <MiniTestSection />
      </div>

      <section
        id="mini-form"
        className="mt-10 scroll-mt-24 rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm md:p-8"
      >
        <div className="mb-5 max-w-2xl">
          <span className="text-sm font-medium text-neutral-500">
            mini yönlendirme formu
          </span>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900">
            birkaç kısa bilgiyle devam edelim
          </h2>
          <p className="mt-3 text-sm leading-6 text-neutral-600">
            formu doldurduğunda bilgiler hazır mesaj olarak WhatsApp ekranında
            açılır. böylece sana uygun ilk yönlendirme daha hızlı başlar.
          </p>
        </div>

        <MiniForm />
      </section>
    </main>
  );
}
