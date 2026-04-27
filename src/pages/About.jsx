const items = [
  "kısa ve net rehberlerle temel konuları anlaşılır hale getirir",
  "abartılı vaatler yerine dengeli ve gerçekçi bir yaklaşım benimser",
  "kullanıcıların sık zorlandığı alanlara odaklanır",
  "rehberler ve araçlarla günlük kararları biraz daha kolaylaştırır",
];

export default function About() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14 md:py-20">
      <span className="text-sm font-medium text-neutral-500">hakkımızda</span>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">
        sade, uygulanabilir, sürdürülebilir.
      </h1>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm md:p-8">
          <p className="leading-7 text-neutral-700">
            <em className="italic">denge</em>, beslenme ve günlük yaşam
            konularını daha anlaşılır hale getirmek için hazırlanmış bir içerik
            yapısıdır. Amaç, karmaşık bilgi yerine daha sade, güvenilir ve
            uygulanabilir bir çerçeve sunmaktır.
          </p>
        </div>

        <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm md:p-8">
          <div className="grid gap-4 md:grid-cols-2">
            {items.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-black/15 bg-white p-4 text-sm font-semibold text-gray-700 transition duration-200 hover:-translate-y-1 hover:border-green-300 hover:bg-[#fcfdf9] hover:shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
