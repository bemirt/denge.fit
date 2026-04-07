import React, { useEffect, useMemo, useState } from "react";

function getCurrentRoute() {
  const hash = window.location.hash || "#/";
  return hash.replace("#", "") || "/";
}

function NavLink({ to, children }) {
  const currentRoute = getCurrentRoute();
  const isActive =
    currentRoute === to ||
    (to === "/rehberler" && currentRoute.startsWith("/rehber/"));

  return (
    <a
      href={`#${to}`}
      className={`transition ${
        isActive ? "text-black font-semibold" : "text-gray-500 hover:text-black"
      }`}
    >
      {children}
    </a>
  );
}

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#f8f6f1] text-gray-900">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f8f6f1]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#/" className="text-xl font-semibold tracking-tight">
            denge.fit
          </a>

          <nav className="flex items-center gap-5 text-sm">
            <NavLink to="/">anasayfa</NavLink>
            <NavLink to="/rehberler">rehberler</NavLink>
            <NavLink to="/araclar">araçlar</NavLink>
            <NavLink to="/hakkinda">hakkında</NavLink>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-black/5 bg-white/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-gray-600 md:flex-row md:items-center md:justify-between">
          <div>© 2026 denge.fit</div>

          <div className="flex gap-4">
            <a href="#/hakkinda" className="hover:text-black">
              hakkında
            </a>
            <a href="#/rehberler" className="hover:text-black">
              rehberler
            </a>
            <a href="#/araclar" className="hover:text-black">
              araçlar
            </a>
          </div>

          <div>iletişim: denge.fit@protonmail.com</div>
        </div>
      </footer>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <section className="px-6 pb-20 pt-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-block rounded-full border border-[#bdd6b2] bg-[#e7f0df] px-4 py-2 text-xs font-medium text-gray-700">
              sade · uygulanabilir · sürdürülebilir
            </span>

            <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
              sağlıklı yaşamı
              <br />
              karmaşık olmaktan çıkarıyoruz
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 md:text-lg">
              beslenme, hareket, günlük alışkanlıklar ve pratik araçlar tek
              yerde. denge.fit; bilimsel temeli önemseyen, sade anlatımı
              benimseyen ve uzun vadeli dengeyi hedefleyen modern bir wellness
              platformudur.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#/rehberler"
                className="rounded-2xl bg-[#a8c69f] px-6 py-3 font-medium text-gray-900 transition hover:opacity-90"
              >
                rehberleri keşfet
              </a>
              <a
                href="#/araclar"
                className="rounded-2xl border border-black/10 bg-white px-6 py-3 font-medium transition hover:bg-black hover:text-white"
              >
                araçlara bak
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm">
            <div className="grid gap-4">
              <div className="rounded-2xl bg-[#eef5e8] p-5">
                <p className="text-sm text-gray-500">odak</p>
                <h3 className="mt-1 text-lg font-semibold">
                  sürdürülebilir sağlık yaklaşımı
                </h3>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-black/5 p-5">
                  <p className="text-sm text-gray-500">içerik</p>
                  <h3 className="mt-1 font-semibold">5 rehber içerik yayında</h3>
                </div>
                <div className="rounded-2xl border border-black/5 p-5">
                  <p className="text-sm text-gray-500">araç</p>
                  <h3 className="mt-1 font-semibold">bmi hesaplayıcı aktif</h3>
                </div>
              </div>

              <div className="rounded-2xl border border-black/5 p-5">
                <p className="text-sm text-gray-500">yaklaşım</p>
                <h3 className="mt-1 font-semibold">
                  uç vaatler yerine uygulanabilir bilgi
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-semibold md:text-3xl">
            bu platformda ne var?
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-[1.5rem] border border-black/5 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">beslenme rehberleri</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                başlangıç, kilo yönetimi, gece acıkmaları ve daha fazlası.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-black/5 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">sağlıklı yaşam içerikleri</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                sade, okunabilir ve gündelik hayata uygulanabilir çerçeveler.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-black/5 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">pratik araçlar</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                ilk araç aktif: bmi hesaplayıcı. diğer araçlar yolda.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white/70 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-semibold md:text-3xl">
            kimler için?
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              "kilo yönetimiyle ilgilenenler",
              "daha iyi beslenmek isteyenler",
              "günlük enerji ve rutinini toparlamak isteyenler",
              "sağlıklı yaşamı sade şekilde öğrenmek isteyenler",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.25rem] border border-black/5 bg-[#f8f6f1] p-5 shadow-sm"
              >
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold md:text-3xl">
                öne çıkan rehberler
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                bugünlük ilk içerik omurgası hazır
              </p>
            </div>

            <a
              href="#/rehberler"
              className="hidden text-sm font-medium text-gray-700 md:inline-block"
            >
              tüm rehberler →
            </a>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <GuideCard
              href="#/rehber/akdeniz-tipi-beslenme"
              title="akdeniz tipi beslenme nedir?"
              text="sürdürülebilir ve bilimsel temelli en popüler beslenme modellerinden biri."
            />
            <GuideCard
              href="#/rehber/saglikli-beslenmeye-baslangic"
              title="sağlıklı beslenmeye başlangıç"
              text="mükemmel liste değil, sürdürülebilir temel alışkanlıklar önemlidir."
            />
            <GuideCard
              href="#/rehber/surdurulebilir-kilo-yonetimi"
              title="sürdürülebilir kilo yönetimi"
              text="hızlı sonuç değil, korunabilir düzen kurmak asıl meseledir."
            />
            <GuideCard
              href="#/rehber/gece-acikmalari"
              title="gece acıkmaları neden olur?"
              text="sadece irade değil; öğün düzeni, içerik ve metabolik etkenler de rol oynar."
            />
          </div>
        </div>
      </section>

      <section className="bg-[#eef5e8] px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-semibold md:text-3xl">
            ilk araç aktif
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            bmi hesaplayıcı artık çalışıyor. diğer araçlar da aynı yapıya
            eklenmeye hazır.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#/araclar"
              className="rounded-2xl border border-black/10 bg-white px-4 py-2 text-sm"
            >
              bmi hesaplayıcı
            </a>
            <span className="rounded-2xl border border-black/10 bg-white px-4 py-2 text-sm opacity-70">
              kalori ihtiyacı · yakında
            </span>
            <span className="rounded-2xl border border-black/10 bg-white px-4 py-2 text-sm opacity-70">
              su ihtiyacı · yakında
            </span>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold md:text-3xl">yaklaşımımız</h2>
          <p className="mt-5 leading-7 text-gray-600">
            denge.fit, bilimsel temeli önemseyen, uç vaatlerden kaçınan ve
            sürdürülebilir sağlıklı yaşam yaklaşımını savunan bir platformdur.
            hızlı çözümler yerine uzun vadeli dengeyi hedefler.
          </p>
        </div>
      </section>
    </>
  );
}

function GuideCard({ href, title, text }) {
  return (
    <a
      href={href}
      className="rounded-[1.5rem] border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-gray-600">{text}</p>
      <span className="mt-4 inline-block text-sm font-medium text-gray-700">
        içeriği oku →
      </span>
    </a>
  );
}

function AboutPage() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <span className="inline-block rounded-full border border-[#bdd6b2] bg-[#e7f0df] px-4 py-2 text-xs font-medium text-gray-700">
          hakkında
        </span>

        <h1 className="mt-6 text-4xl font-semibold md:text-5xl">
          denge.fit nedir?
        </h1>

        <p className="mt-6 max-w-3xl leading-7 text-gray-600">
          denge.fit; beslenme, hareket, yaşam tarzı ve günlük alışkanlıklar
          etrafında şekillenen modern bir sağlıklı yaşam platformudur. amacı,
          internette dağınık halde bulunan bilgileri daha sade, daha güvenilir ve
          daha uygulanabilir hale getirmektir.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <InfoCard
            title="amacı"
            text="sağlıklı yaşamı sadece diyet listesi seviyesine indirmeden; daha geniş, daha sürdürülebilir ve daha gerçekçi bir çerçevede sunmak."
          />
          <InfoCard
            title="yaklaşımı"
            text="uç vaatler, hızlı çözümler ve temelsiz iddialar yerine; bilimsel zemini olan, sade anlatılmış ve günlük hayata uyarlanabilir bilgi."
          />
          <InfoCard
            title="neleri kapsar?"
            text="beslenme rehberleri, sağlıklı yaşam içerikleri, temel hesaplama araçları, günlük rutin önerileri ve zamanla büyüyecek dijital çözümler."
          />
          <InfoCard
            title="ne değildir?"
            text="mucize vaat eden, korku dili kullanan veya tek tip çözüm satan bir platform değildir."
          />
        </div>
      </div>
    </section>
  );
}

function InfoCard({ title, text }) {
  return (
    <div className="rounded-[1.5rem] border border-black/5 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-gray-600">{text}</p>
    </div>
  );
}

function GuidesPage() {
  const guides = [
    {
      title: "akdeniz tipi beslenme nedir?",
      text: "sürdürülebilir ve bilimsel temelli en popüler beslenme modellerinden biri.",
      href: "#/rehber/akdeniz-tipi-beslenme",
    },
    {
      title: "sağlıklı beslenmeye başlangıç",
      text: "kafayı karıştırmadan, temel prensiplerle iyi bir başlangıç yapmanın çerçevesi.",
      href: "#/rehber/saglikli-beslenmeye-baslangic",
    },
    {
      title: "sürdürülebilir kilo yönetimi",
      text: "geçici motivasyon yerine kalıcı alışkanlıklarla ilerlemenin mantığı.",
      href: "#/rehber/surdurulebilir-kilo-yonetimi",
    },
    {
      title: "gece acıkmaları neden olur?",
      text: "yalnızca irade değil; düzen, içerik ve metabolik yapı da işin parçasıdır.",
      href: "#/rehber/gece-acikmalari",
    },
    {
      title: "bmi tek başına yeterli mi?",
      text: "bmi yararlıdır ama vücudu tek başına eksiksiz anlatmaz.",
      href: "#/rehber/bmi-tek-basina-yeterli-mi",
    },
  ];

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <span className="inline-block rounded-full border border-[#bdd6b2] bg-[#e7f0df] px-4 py-2 text-xs font-medium text-gray-700">
          rehberler
        </span>

        <h1 className="mt-6 text-4xl font-semibold md:text-5xl">
          sade anlatılmış rehberler
        </h1>

        <p className="mt-5 max-w-3xl leading-7 text-gray-600">
          burada amaç bilgi yığını sunmak değil. gerçekten işine yarayacak temel
          çerçeveyi, sade ve okunabilir biçimde vermek.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {guides.map((guide) => (
            <GuideCard
              key={guide.title}
              href={guide.href}
              title={guide.title}
              text={guide.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function BMIResultBox({ bmi }) {
  const category = useMemo(() => {
    if (bmi < 18.5) {
      return {
        title: "zayıf",
        text: "bu değer düşük aralıkta. tek başına yorumlamak doğru olmaz; genel vücut yapısı ve sağlık durumu da önemlidir.",
      };
    }
    if (bmi < 25) {
      return {
        title: "normal aralık",
        text: "bu değer genel bmi sınıflamasında normal aralıkta görünüyor. yine de tek başına yeterli değildir.",
      };
    }
    if (bmi < 30) {
      return {
        title: "fazla kilolu aralık",
        text: "bu değer bmi sınıflamasında yüksek görünüyor. ancak kas kütlesi ve bel çevresi gibi diğer veriler de önemlidir.",
      };
    }
    return {
      title: "obezite aralığı",
      text: "bu değer bmi sınıflamasında belirgin yüksek aralıkta. daha kapsamlı değerlendirme yapmak daha doğru olur.",
    };
  }, [bmi]);

  return (
    <div className="mt-6 rounded-[1.5rem] border border-black/5 bg-[#eef5e8] p-5">
      <p className="text-sm text-gray-500">sonuç</p>
      <h3 className="mt-1 text-2xl font-semibold">{bmi.toFixed(1)}</h3>
      <p className="mt-3 font-medium">{category.title}</p>
      <p className="mt-2 text-sm leading-6 text-gray-700">{category.text}</p>
    </div>
  );
}

function ToolsPage() {
  const [kg, setKg] = useState("");
  const [cm, setCm] = useState("");
  const [bmi, setBmi] = useState(null);

  function calculateBMI() {
    const weight = Number(kg);
    const height = Number(cm) / 100;

    if (!weight || !height) {
      setBmi(null);
      return;
    }

    const result = weight / (height * height);
    setBmi(result);
  }

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <span className="inline-block rounded-full border border-[#bdd6b2] bg-[#e7f0df] px-4 py-2 text-xs font-medium text-gray-700">
          araçlar
        </span>

        <h1 className="mt-6 text-4xl font-semibold md:text-5xl">
          pratik araçlar
        </h1>

        <p className="mt-5 max-w-3xl leading-7 text-gray-600">
          ilk aktif araç bmi hesaplayıcı. diğer araçlar aynı yapıyla buraya
          eklenecek.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">bmi hesaplayıcı</h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              boy ve kilo verilerine göre temel bir başlangıç göstergesi sunar.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium">kilo (kg)</label>
                <input
                  type="number"
                  value={kg}
                  onChange={(e) => setKg(e.target.value)}
                  placeholder="örnek: 85"
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">boy (cm)</label>
                <input
                  type="number"
                  value={cm}
                  onChange={(e) => setCm(e.target.value)}
                  placeholder="örnek: 183"
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-black"
                />
              </div>

              <button
                onClick={calculateBMI}
                className="w-full rounded-xl bg-black px-4 py-3 font-medium text-white transition hover:opacity-90"
              >
                hesapla
              </button>
            </div>

            {bmi !== null && <BMIResultBox bmi={bmi} />}
          </div>

          <div className="space-y-6">
            <ComingSoonCard
              title="kalori ihtiyacı"
              text="günlük enerji ihtiyacını daha anlaşılır hale getiren araç."
            />
            <ComingSoonCard
              title="su ihtiyacı"
              text="günlük tüketim hedefini daha pratik hale getiren araç."
            />
            <ComingSoonCard
              title="makro dağılım rehberi"
              text="temel makro dengesini hızlıca yorumlamaya yardımcı olur."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ComingSoonCard({ title, text }) {
  return (
    <div className="rounded-[1.5rem] border border-black/5 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-gray-600">{text}</p>
      <span className="mt-5 inline-block rounded-full bg-[#eef5e8] px-3 py-1 text-xs font-medium text-gray-700">
        yakında
      </span>
    </div>
  );
}

function ArticleLayout({ title, intro, children }) {
  return (
    <section className="px-6 py-20">
      <article className="mx-auto max-w-3xl">
        <a
          href="#/rehberler"
          className="text-sm font-medium text-gray-600 hover:text-black"
        >
          ← rehberlere dön
        </a>

        <span className="mt-6 inline-block rounded-full border border-[#bdd6b2] bg-[#e7f0df] px-4 py-2 text-xs font-medium text-gray-700">
          rehber
        </span>

        <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl">
          {title}
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">{intro}</p>

        <div className="mt-12 space-y-12">{children}</div>
      </article>
    </section>
  );
}

function Section({ title, children }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-4 space-y-4 leading-7 text-gray-700">{children}</div>
    </section>
  );
}

function MediterraneanGuidePage() {
  return (
    <ArticleLayout
      title="akdeniz tipi beslenme nedir?"
      intro="akdeniz tipi beslenme, tek tek yasak listeleriyle değil; genel beslenme düzeniyle öne çıkan, sürdürülebilirliği yüksek bir yaklaşımdır. mesele sadece zeytinyağı değil; daha fazla gerçek gıda, daha az aşırı işlenmiş ürün ve daha dengeli bir günlük yapı kurmaktır."
    >
      <Section title="kısa özet">
        <p>
          akdeniz tipi beslenme; sebze, meyve, baklagil, tam tahıl, zeytinyağı,
          yoğurt ve dengeli protein kaynaklarını merkeze alan, uzun vadede
          uygulanabilirliği yüksek bir beslenme modelidir.
        </p>
      </Section>

      <Section title="temel mantığı nedir?">
        <p>
          bu modelin gücü, mükemmel beslenme iddiasında olmamasıdır. günlük
          hayatla kavga etmez. dışarıda yemek yiyen, yoğun çalışan, sosyal hayatı
          olan insanlar için daha uygulanabilir bir çerçeve sunar.
        </p>
      </Section>

      <Section title="neler daha çok yer alır?">
        <ul className="space-y-2">
          <li>• sebzeler ve meyveler</li>
          <li>• baklagiller</li>
          <li>• zeytinyağı</li>
          <li>• yoğurt ve fermente ürünler</li>
          <li>• tam tahıllar</li>
          <li>• dengeli protein kaynakları</li>
          <li>• kontrollü miktarda kuruyemiş</li>
        </ul>
      </Section>

      <Section title="neden bu kadar popüler?">
        <p>
          çünkü kural sayısı az, uygulanabilirliği yüksek ve sert yasaklara
          dayanmıyor. bir beslenme düzeni ne kadar ideal görünürse görünsün, uzun
          süre uygulanamıyorsa pratik değeri düşer.
        </p>
      </Section>

      <Section title="son söz">
        <p>
          akdeniz tipi beslenme sihirli çözüm değildir. ama günlük hayatla uyumlu,
          dengeli ve uzun vadeli uygulanabilir bir yapı sunar. bu yüzden birçok
          kişi için güçlü bir başlangıç noktasıdır.
        </p>
      </Section>
    </ArticleLayout>
  );
}

function HealthyStartGuidePage() {
  return (
    <ArticleLayout
      title="sağlıklı beslenmeye başlangıç"
      intro="sağlıklı beslenmeye başlamak isteyen çoğu kişi ilk hatayı çok büyük kararlarla yapar. bir gecede her şeyi değiştirmeye çalışmak kısa süreli motivasyon üretir ama sürdürülebilir olmaz. doğru başlangıç daha sade olur."
    >
      <Section title="ilk gün mükemmel olmak zorunda değil">
        <p>
          sağlıklı beslenmenin başlangıcı kusursuz liste değildir. en önemli şey
          birkaç temel davranışı oturtmaktır: öğün düzeni, daha az paketli ürün,
          daha dengeli tabaklar ve gereksiz sıvı kalori tüketimini azaltmak.
        </p>
      </Section>

      <Section title="nereden başlanmalı?">
        <p>
          önce her şeyi değil, en çok sorun çıkaran noktayı düzelt. örneğin:
          düzensiz öğün, sürekli atıştırma, akşam kontrolsüz yeme veya yetersiz
          protein alımı. tek bir problemi çözmek, her şeyi aynı anda çözmeye
          çalışmaktan daha etkilidir.
        </p>
      </Section>

      <Section title="tabak mantığı iş görür">
        <p>
          çoğu insan için en pratik çerçeve şudur: tabağın yarısına sebze, bir
          bölümüne protein, bir bölümüne kontrollü karbonhidrat koymak. bu kadar
          basit bir sistem bile karar yorgunluğunu azaltır.
        </p>
      </Section>

      <Section title="en büyük hata ne?">
        <p>
          aç kalmayı plan sanmak. çok sert başlangıçlar birkaç gün disiplinli
          hissettirse de sonrasında daha büyük yeme ataklarına dönebilir.
        </p>
      </Section>

      <Section title="sonuç">
        <p>
          sağlıklı beslenmeye başlangıç, radikal yasaklar değil; sürdürülebilir
          düzeltmelerle olur. küçük ama kalıcı adımlar, büyük ama geçici
          motivasyondan daha değerlidir.
        </p>
      </Section>
    </ArticleLayout>
  );
}

function WeightManagementGuidePage() {
  return (
    <ArticleLayout
      title="sürdürülebilir kilo yönetimi"
      intro="kilo yönetiminde asıl mesele kilo vermek değil, verilen kiloyu koruyabilecek düzeni kurmaktır. hızlı sonuçlar etkileyici görünür ama çoğu zaman aynı hızla geri döner."
    >
      <Section title="neden sürdürülebilirlik önemli?">
        <p>
          çünkü vücut birkaç haftalık motivasyona değil, tekrar eden günlük
          davranışlara yanıt verir. kilo yönetimi uzun vadeli oyundur.
        </p>
      </Section>

      <Section title="en yaygın yanlış">
        <p>
          çok düşük kalorili, sosyal hayata uymayan ve kişiyi sürekli aç bırakan
          planları çözüm sanmak. bunlar genelde kısa sürede bırakılır.
        </p>
      </Section>

      <Section title="doğru çerçeve nedir?">
        <p>
          korunabilir öğün düzeni, yeterli protein, makul porsiyon, hareketin
          artırılması ve akşam kontrolünün güçlendirilmesi. çoğu kişi için asıl
          oyun burada kazanılır.
        </p>
      </Section>

      <Section title="tartı tek kriter değildir">
        <p>
          bel çevresi, enerji seviyesi, açlık kontrolü ve genel iştah düzeni de
          önemlidir. bazen iyi giden süreç tartıda hemen görünmeyebilir.
        </p>
      </Section>

      <Section title="sonuç">
        <p>
          sürdürülebilir kilo yönetimi, kendini zorlayarak değil; kendine uygun
          çalışan bir düzen kurarak olur. korunamayan sonuç, gerçek sonuç değildir.
        </p>
      </Section>
    </ArticleLayout>
  );
}

function NightHungerGuidePage() {
  return (
    <ArticleLayout
      title="gece acıkmaları neden olur?"
      intro="gece acıkmaları çoğu zaman sadece irade meselesi değildir. gün içinde yetersiz beslenme, dengesiz öğün yapısı, aşırı kısıtlama, stres ve alışkanlıklar bu tabloyu büyütebilir."
    >
      <Section title="gün içinde az yemek akşam patlayabilir">
        <p>
          sabah ve öğlen çok yetersiz beslenen birçok kişi akşam saatlerinde daha
          kontrolsüz hale gelir. vücut gün boyu biriken açlığı akşam telafi etmeye
          çalışır.
        </p>
      </Section>

      <Section title="protein ve lif eksikliği önemli">
        <p>
          gün içindeki öğünler yeterince tok tutmuyorsa, akşam zihinsel ve fiziksel
          açlık daha sert hissedilir. özellikle protein ve lif yetersizliği burada
          belirleyici olabilir.
        </p>
      </Section>

      <Section title="alışkanlık etkisi">
        <p>
          bazı insanlar için gece yemek yalnızca açlık değil; ekran karşısı,
          ödül hissi veya rahatlama rutini haline gelmiştir. bu durumda problem
          sadece mideyle ilgili değildir.
        </p>
      </Section>

      <Section title="ne yapılabilir?">
        <p>
          gün içi öğünleri toparlamak, akşam yemeğini daha dengeli kurmak, protein
          ve lif alımını artırmak ve gece atıştırmasını otomatik rutinden çıkarmak
          iyi başlangıçtır.
        </p>
      </Section>

      <Section title="sonuç">
        <p>
          gece acıkmaları zayıf karakter göstergesi değildir. çoğu zaman gün içi
          yapı bozukluğunun akşamdaki sonucudur. doğru yerden bakarsan çözüm
          kolaylaşır.
        </p>
      </Section>
    </ArticleLayout>
  );
}

function BMIGuidePage() {
  return (
    <ArticleLayout
      title="bmi tek başına yeterli mi?"
      intro="bmi yani vücut kitle indeksi, boy ve kilo üzerinden hızlı bir çerçeve sunar. bu yüzden faydalıdır. ama vücudu tek başına tam anlatmaz."
    >
      <Section title="neden kullanılıyor?">
        <p>
          çünkü çok hızlı hesaplanır ve kabaca bir sınıflama sağlar. büyük
          popülasyonları değerlendirmede pratik araçtır.
        </p>
      </Section>

      <Section title="neden tek başına yetmez?">
        <p>
          çünkü kas kütlesi, yağ dağılımı, bel çevresi, cinsiyet, yaş ve genel
          vücut kompozisyonu bmi içine girmez. iki kişinin bmi değeri aynı olabilir
          ama sağlık profili çok farklı olabilir.
        </p>
      </Section>

      <Section title="yine de tamamen işe yaramaz mı?">
        <p>
          hayır. bmi başlangıç için yararlıdır. sorun, onu nihai karar aracı gibi
          görmekte başlar.
        </p>
      </Section>

      <Section title="daha doğru bakış nasıl olur?">
        <p>
          bmi’yi bel çevresi, fiziksel görünüm, açlık durumu, enerji düzeyi,
          hareket kapasitesi ve gerekiyorsa profesyonel değerlendirmeyle birlikte
          düşünmek daha doğrudur.
        </p>
      </Section>

      <Section title="sonuç">
        <p>
          bmi iyi bir giriş verisidir ama son söz değildir. sana yön gösterebilir;
          seni bütünüyle tanımlayamaz.
        </p>
      </Section>
    </ArticleLayout>
  );
}

function NotFoundPage() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-semibold">sayfa bulunamadı</h1>
        <p className="mt-4 text-gray-600">
          yanlış bir bağlantıya gelmiş olabilirsin.
        </p>
        <a
          href="#/"
          className="mt-8 inline-block rounded-2xl bg-[#a8c69f] px-6 py-3 font-medium text-gray-900"
        >
          anasayfaya dön
        </a>
      </div>
    </section>
  );
}

function RouterView() {
  const [route, setRoute] = useState(getCurrentRoute());

  useEffect(() => {
    const onHashChange = () => {
      setRoute(getCurrentRoute());
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("hashchange", onHashChange);

    if (!window.location.hash) {
      window.location.hash = "#/";
    }

    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  if (route === "/") return <HomePage />;
  if (route === "/hakkinda") return <AboutPage />;
  if (route === "/rehberler") return <GuidesPage />;
  if (route === "/araclar") return <ToolsPage />;
  if (route === "/rehber/akdeniz-tipi-beslenme") return <MediterraneanGuidePage />;
  if (route === "/rehber/saglikli-beslenmeye-baslangic") return <HealthyStartGuidePage />;
  if (route === "/rehber/surdurulebilir-kilo-yonetimi") return <WeightManagementGuidePage />;
  if (route === "/rehber/gece-acikmalari") return <NightHungerGuidePage />;
  if (route === "/rehber/bmi-tek-basina-yeterli-mi") return <BMIGuidePage />;

  return <NotFoundPage />;
}

function App() {
  return (
    <Layout>
      <RouterView />
    </Layout>
  );
}

export default App;