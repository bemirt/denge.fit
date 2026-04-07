import React from "react";

function App() {
  return (
    <div className="font-sans text-gray-900">

      {/* NAVBAR */}
      <nav className="w-full flex items-center justify-between py-4 px-6">
        <h1 className="text-xl font-semibold">denge.fit</h1>
        <div className="flex gap-6 text-sm">
          <a href="/">anasayfa</a>
          <a href="/rehberler">rehberler</a>
          <a href="/araclar">araçlar</a>
          <a href="/hakkinda">hakkında</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          sağlıklı yaşamı<br />karmaşık olmaktan çıkarıyoruz
        </h1>

        <p className="mt-6 text-gray-600 max-w-xl mx-auto">
          beslenme, hareket ve günlük alışkanlıklar hakkında sade, uygulanabilir bilgiler ve pratik araçlar tek platformda.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a href="/rehberler" className="px-6 py-3 bg-black text-white rounded-xl">
            keşfet
          </a>
          <a href="/araclar" className="px-6 py-3 border rounded-xl">
            araçlara bak
          </a>
        </div>
      </section>

      {/* BU SİTEDE NE VAR */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-10">
          bu platformda ne var?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-2xl">
            <h3 className="font-semibold mb-2">beslenme rehberleri</h3>
            <p className="text-sm text-gray-600">
              sürdürülebilir beslenme yaklaşımları, diyet türleri ve temel bilgiler.
            </p>
          </div>

          <div className="p-6 border rounded-2xl">
            <h3 className="font-semibold mb-2">sağlıklı yaşam içerikleri</h3>
            <p className="text-sm text-gray-600">
              günlük alışkanlıklar, enerji yönetimi ve yaşam kalitesini artıran bilgiler.
            </p>
          </div>

          <div className="p-6 border rounded-2xl">
            <h3 className="font-semibold mb-2">pratik araçlar</h3>
            <p className="text-sm text-gray-600">
              bmi, kalori ve diğer hesaplayıcılarla kendini daha iyi analiz et.
            </p>
          </div>
        </div>
      </section>

      {/* KİMLER İÇİN */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-2xl font-semibold text-center mb-10">
          kimler için?
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="p-5 border rounded-xl">
            kilo yönetimiyle ilgilenenler
          </div>
          <div className="p-5 border rounded-xl">
            daha iyi beslenmek isteyenler
          </div>
          <div className="p-5 border rounded-xl">
            günlük enerjisini toparlamak isteyenler
          </div>
          <div className="p-5 border rounded-xl">
            sağlıklı yaşamı sade şekilde öğrenmek isteyenler
          </div>
        </div>
      </section>

      {/* ÖNE ÇIKAN İÇERİKLER */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-10 text-center">
          öne çıkan içerikler
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold mb-2">
              akdeniz tipi beslenme nedir?
            </h3>
            <p className="text-sm text-gray-600">
              sürdürülebilir ve bilimsel temelli en popüler beslenme modellerinden biri.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold mb-2">
              bmi tek başına yeterli mi?
            </h3>
            <p className="text-sm text-gray-600">
              vücut kitle indeksinin sınırları ve doğru kullanım şekli.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold mb-2">
              gece acıkmaları neden olur?
            </h3>
            <p className="text-sm text-gray-600">
              insülin direnci, stres ve alışkanlıkların etkisi.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold mb-2">
              sürdürülebilir başlangıç rehberi
            </h3>
            <p className="text-sm text-gray-600">
              sağlıklı yaşam için uygulanabilir ilk adımlar.
            </p>
          </div>
        </div>
      </section>

      {/* ARAÇLAR */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-2xl font-semibold mb-6">
          yakında: pratik araçlar
        </h2>

        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          bmi, kalori ihtiyacı ve günlük su tüketimi gibi araçlarla kendini daha iyi analiz edebileceksin.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <span className="px-4 py-2 border rounded-xl">bmi hesaplayıcı</span>
          <span className="px-4 py-2 border rounded-xl">kalori ihtiyacı</span>
          <span className="px-4 py-2 border rounded-xl">su ihtiyacı</span>
        </div>
      </section>

      {/* YAKLAŞIM */}
      <section className="py-20 px-6 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">
          yaklaşımımız
        </h2>

        <p className="text-gray-600">
          denge.fit, bilimsel temeli önemseyen, uç vaatlerden kaçınan ve sürdürülebilir sağlıklı yaşam yaklaşımını savunan bir platformdur. hızlı çözümler yerine uzun vadeli dengeyi hedefler.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6 border-t text-sm text-gray-500 flex flex-col md:flex-row justify-between gap-4">
        <div>© 2026 denge.fit</div>

        <div className="flex gap-4">
          <a href="/hakkinda">hakkında</a>
          <a href="/rehberler">rehberler</a>
          <a href="/araclar">araçlar</a>
        </div>

        <div>
          iletişim: denge.fit@protonmail.com
        </div>
      </footer>

    </div>
  );
}

export default App;