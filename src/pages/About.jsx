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
            denge.fit, beslenme ve günlük yaşam konularını daha anlaşılır hale
            getirmek için hazırlanmış bir içerik platformudur. Amaç, kullanıcıya
            karmaşık bilgi yerine sade, güvenilir ve uygulanabilir bir çerçeve
            sunmaktır.
          </p>
        </div>

        <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm md:p-8">
          <ul className="space-y-4 text-neutral-700">
            <li>• kısa ve net rehberlerle temel konuları anlaşılır hale getirir</li>
            <li>• abartılı vaatler yerine dengeli ve gerçekçi bir yaklaşım benimser</li>
            <li>• kullanıcıların sık zorlandığı alanlara odaklanır</li>
            <li>• rehberler ve araçlarla günlük kararları biraz daha kolaylaştırır</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
