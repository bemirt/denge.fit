import React, { useEffect, useState } from "react";

function getCurrentRoute() {
  const hash = window.location.hash || "#/";
  return hash.replace("#", "") || "/";
}

function NavLink({ to, children }) {
  const currentRoute = getCurrentRoute();
  const isActive = currentRoute === to;

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
                  <h3 className="mt-1 font-semibold">beslenme rehberleri</h3>
                </div>
                <div className="rounded-2xl border border-black/5 p-5">
                  <p className="text-sm text-gray-500">yakında</p>
                  <h3 className="mt-1 font-semibold">pratik hesaplayıcılar</h3>
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
                sürdürülebilir beslenme yaklaşımları, temel kavramlar ve sade
                anlatımlı içerikler.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-black/5 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">sağlıklı yaşam içerikleri</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                enerji, rutin, alışkanlık ve günlük yaşam kalitesini destekleyen
                pratik bilgiler.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-black/5 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">pratik araçlar</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                bmi, su ihtiyacı ve günlük enerji ihtiyacı gibi araçlarla kendini
                daha iyi analiz et.
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
                öne çıkan içerikler
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                büyümeye hazır ilk içerik omurgası
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
            <a
              href="#/rehber/akdeniz-tipi-beslenme"
              className="rounded-[1.5rem] border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold">
                akdeniz tipi beslenme nedir?
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                sürdürülebilir ve bilimsel temelli en popüler beslenme
                modellerinden biri.
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-gray-700">
                içeriği oku →
              </span>
            </a>

            <div className="rounded-[1.5rem] border border-black/5 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">bmi tek başına yeterli mi?</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                vücut kitle indeksinin sınırları ve daha doğru yorumlama
                çerçevesi.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-black/5 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">gece acıkmaları neden olur?</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                alışkanlıklar, düzensiz öğünler ve metabolik etkenlerin rolü.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-black/5 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">
                sürdürülebilir başlangıç rehberi
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                sağlıklı yaşam için abartısız ve uygulanabilir ilk adımlar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eef5e8] px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-semibold md:text-3xl">
            yakında: pratik araçlar
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            bmi, kalori ihtiyacı ve günlük su tüketimi gibi araçlarla kendini
            daha iyi analiz edebileceksin.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <span className="rounded-2xl border border-black/10 bg-white px-4 py-2 text-sm">
              bmi hesaplayıcı
            </span>
            <span className="rounded-2xl border border-black/10 bg-white px-4 py-2 text-sm">
              kalori ihtiyacı
            </span>
            <span className="rounded-2xl border border-black/10 bg-white px-4 py-2 text-sm">
              su ihtiyacı
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

function AboutPage() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <span className="inline-block rounded-full border border-[#bdd6b2] bg-[#e7f0df] px-4 py-2 text-xs font-medium text-gray-700">
          hakkında
        </span>

        <h1 className="mt-6 text-4xl font-semibold md:text-5xl">denge.fit nedir?</h1>

        <p className="mt-6 max-w-3xl leading-7 text-gray-600">
          denge.fit; beslenme, hareket, yaşam tarzı ve günlük alışkanlıklar
          etrafında şekillenen modern bir sağlıklı yaşam platformudur. amacı,
          internette dağınık halde bulunan bilgileri daha sade, daha güvenilir ve
          daha uygulanabilir hale getirmektir.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-[1.5rem] border border-black/5 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">amacı</h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              sağlıklı yaşamı sadece “diyet listesi” seviyesine indirmeden; daha
              geniş, daha sürdürülebilir ve daha gerçekçi bir çerçevede sunmak.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-black/5 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">yaklaşımı</h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              uç vaatler, hızlı çözümler ve temelsiz iddialar yerine; bilimsel
              zemini olan, sade anlatılmış ve günlük hayata uyarlanabilir bilgi.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-black/5 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">neleri kapsar?</h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              beslenme rehberleri, sağlıklı yaşam içerikleri, temel hesaplama
              araçları, günlük rutin önerileri ve zamanla büyüyecek dijital
              çözümler.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-black/5 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">ne değildir?</h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              denge.fit; mucize vaat eden, korku dili kullanan veya tek tip çözüm
              satan bir platform değildir. amaç, insanlara daha net düşünme zemini
              sunmaktır.
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-[2rem] border border-black/5 bg-[#eef5e8] p-8">
          <h2 className="text-xl font-semibold">uzun vadeli hedef</h2>
          <p className="mt-4 leading-7 text-gray-700">
            denge.fit zaman içinde sadece içerik sunan bir site değil; aynı
            zamanda araçlar, yönlendirmeler, dijital ürünler ve daha geniş
            wellness deneyimleri barındıran güçlü bir platforma dönüşmeyi hedefler.
          </p>
        </div>
      </div>
    </section>
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
    },
    {
      title: "sürdürülebilir kilo yönetimi",
      text: "geçici motivasyon yerine kalıcı alışkanlıklarla ilerlemenin mantığı.",
    },
    {
      title: "hareketli yaşam için temel prensipler",
      text: "spor salonuna kapanmadan da günlük hareket kalitesini artırmanın yolları.",
    },
    {
      title: "uyku ve enerji dengesi",
      text: "gün içi performans, toparlanma ve yaşam kalitesi için uyku tarafının önemi.",
    },
    {
      title: "gece acıkmaları neden olur?",
      text: "yalnızca irade değil; düzen, içerik ve metabolik yapı da işin parçasıdır.",
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
          {guides.map((guide) =>
            guide.href ? (
              <a
                key={guide.title}
                href={guide.href}
                className="rounded-[1.5rem] border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h2 className="text-lg font-semibold">{guide.title}</h2>
                <p className="mt-3 text-sm leading-6 text-gray-600">{guide.text}</p>
                <span className="mt-4 inline-block text-sm font-medium text-gray-700">
                  içeriği oku →
                </span>
              </a>
            ) : (
              <div
                key={guide.title}
                className="rounded-[1.5rem] border border-black/5 bg-white p-6 shadow-sm"
              >
                <h2 className="text-lg font-semibold">{guide.title}</h2>
                <p className="mt-3 text-sm leading-6 text-gray-600">{guide.text}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

function ToolsPage() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <span className="inline-block rounded-full border border-[#bdd6b2] bg-[#e7f0df] px-4 py-2 text-xs font-medium text-gray-700">
          araçlar
        </span>

        <h1 className="mt-6 text-4xl font-semibold md:text-5xl">
          pratik araçlar yakında burada
        </h1>

        <p className="mt-5 max-w-3xl leading-7 text-gray-600">
          denge.fit zamanla yalnızca içerik değil, günlük kararları destekleyen
          basit ama faydalı araçlar da sunacak.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-[1.5rem] border border-black/5 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">bmi hesaplayıcı</h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              boy ve kilo verilerine göre temel bir başlangıç göstergesi.
            </p>
            <span className="mt-5 inline-block rounded-full bg-[#eef5e8] px-3 py-1 text-xs font-medium text-gray-700">
              yakında
            </span>
          </div>

          <div className="rounded-[1.5rem] border border-black/5 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">günlük su ihtiyacı</h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              yaşam tarzı ve temel veriler üzerinden pratik tahmin.
            </p>
            <span className="mt-5 inline-block rounded-full bg-[#eef5e8] px-3 py-1 text-xs font-medium text-gray-700">
              yakında
            </span>
          </div>

          <div className="rounded-[1.5rem] border border-black/5 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">kalori ihtiyacı</h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              günlük enerji ihtiyacını daha anlaşılır hale getiren temel araç.
            </p>
            <span className="mt-5 inline-block rounded-full bg-[#eef5e8] px-3 py-1 text-xs font-medium text-gray-700">
              yakında
            </span>
          </div>
        </div>

        <div className="mt-12 rounded-[2rem] border border-black/5 bg-[#eef5e8] p-8">
          <h2 className="text-xl font-semibold">neden araç ekliyoruz?</h2>
          <p className="mt-4 leading-7 text-gray-700">
            çünkü iyi içerik önemlidir ama bazı şeyleri hızlıca hesaplamak,
            görmek ve yorumlamak da kullanıcı deneyimini güçlendirir. amaç,
            karmaşık paneller değil; sade ve gerçekten kullanılan araçlar üretmek.
          </p>
        </div>
      </div>
    </section>
  );
}

function MediterraneanGuidePage() {
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
          akdeniz tipi beslenme nedir?
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          akdeniz tipi beslenme, tek tek “yasaklı” yiyecek listeleriyle değil;
          genel beslenme düzeniyle öne çıkan, sürdürülebilirliği yüksek bir
          yaklaşım olarak bilinir. çoğu insanın gözünde sadece “zeytinyağlı yemek”
          gibi algılansa da, aslında mesele daha geniştir: daha fazla gerçek gıda,
          daha az aşırı işlenmiş ürün ve daha dengeli bir günlük yapı.
        </p>

        <div className="mt-10 rounded-[2rem] border border-black/5 bg-[#eef5e8] p-8">
          <h2 className="text-xl font-semibold">kısa özet</h2>
          <p className="mt-4 leading-7 text-gray-700">
            akdeniz tipi beslenme; sebze, meyve, baklagil, tam tahıl, zeytinyağı,
            kuruyemiş, yoğurt ve dengeli protein kaynaklarını merkeze alan; uzun
            vadede uygulanabilirliği yüksek bir beslenme modelidir.
          </p>
        </div>

        <div className="mt-12 space-y-12">
          <section>
            <h2 className="text-2xl font-semibold">temel mantığı nedir?</h2>
            <p className="mt-4 leading-7 text-gray-700">
              bu modelin gücü, “mükemmel beslenme” iddiasında olmamasıdır.
              günlük yaşamla kavga etmez. dışarıda yemek yiyen, yoğun çalışan,
              sosyal hayatı olan insanlar için daha uygulanabilir bir çerçeve sunar.
              odak noktası; her öğünü kusursuz yapmak değil, genel düzeni daha iyi
              hale getirmektir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">neler daha çok yer alır?</h2>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li>• sebzeler ve meyveler</li>
              <li>• baklagiller</li>
              <li>• zeytinyağı</li>
              <li>• yoğurt ve benzeri fermente ürünler</li>
              <li>• tam tahıllar</li>
              <li>• balık ve dengeli protein kaynakları</li>
              <li>• kontrollü miktarda kuruyemiş</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">neler azaltılmaya çalışılır?</h2>
            <p className="mt-4 leading-7 text-gray-700">
              paketli atıştırmalıklar, aşırı işlenmiş gıdalar, yüksek şekerli
              içecekler ve fark etmeden fazla tüketilen kalorili ürünler daha geri
              plana itilir. burada amaç “asla yeme” demek değil; günlük düzenin
              merkezini bunların oluşturmamasıdır.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">neden bu kadar popüler?</h2>
            <p className="mt-4 leading-7 text-gray-700">
              çünkü kural sayısı az, uygulanabilirliği yüksek ve sert yasaklara
              dayanmıyor. birçok insan için sürdürülebilir olan şey budur.
              bir beslenme düzeni ne kadar ideal görünürse görünsün, uzun süre
              uygulanamıyorsa pratikte değeri düşer. akdeniz tipi beslenme ise
              tam burada öne çıkar.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">kimler için mantıklı olabilir?</h2>
            <p className="mt-4 leading-7 text-gray-700">
              beslenmesini toparlamak isteyen ama çok katı listeler uygulamak
              istemeyen çoğu kişi için iyi bir başlangıç olabilir. özellikle
              “nereden başlayacağımı bilmiyorum” diyen insanlar için sert bir diyet
              yerine daha mantıklı bir giriş kapısı sunar.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">son söz</h2>
            <p className="mt-4 leading-7 text-gray-700">
              akdeniz tipi beslenme sihirli çözüm değildir. ama günlük hayatla
              uyumlu, dengeli ve uzun vadeli uygulanabilir bir yapı sunar. bu yüzden
              birçok kişi için en iyi beslenme modeli; en “mükemmel” görünen değil,
              en sürdürülebilir olan modeldir.
            </p>
          </section>
        </div>
      </article>
    </section>
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