import { Link } from "react-router-dom";
import { BottomCTA, MidCTA, RelatedGuides } from "../shared/siteContent";

export function GuideArticleInsulin() {
  const currentSlug = "/rehberler/insulin-direnci-gunluk-beslenme";

  return (
    <main className="mx-auto max-w-4xl px-6 py-14 md:py-20">
      <Link
        to="/rehberler"
        className="text-sm text-neutral-500 underline underline-offset-4"
      >
        ← rehberlere dön
      </Link>

      <article className="mt-6 overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-sm">
        <div className="h-40 bg-gradient-to-br from-emerald-100 via-lime-50 to-[#f6f1e8]" />
        <div className="p-6 md:p-10">
          <span className="inline-flex rounded-full bg-[#f6f1e8] px-3 py-1 text-xs font-medium text-neutral-700">
            kan şekeri dengesi
          </span>

          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            insülin direnci olanlar için günlük beslenme düzeni nasıl kurulmalı?
          </h1>

          <p className="mt-5 text-base leading-7 text-neutral-700">
            insülin direnci olan birçok kişi ne yemesi gerektiğinden çok, bunu
            günlük hayata nasıl uyarlayacağını bilemediği için zorlanır. sorun
            çoğu zaman tek bir besin değildir; düzensiz öğünler, uzun açlıklar,
            akşam kontrolsüz yeme ve gün içine yayılmış küçük kaçamaklardır.
          </p>

          <div className="mt-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                insülin direncinde temel problem nedir?
              </h2>
              <p className="mt-3 leading-7 text-neutral-700">
                vücut insülini üretir ama hücreler buna olması gerektiği kadar
                iyi yanıt vermez. bunun sonucu olarak kan şekeri yönetimi
                zorlaşabilir, açlık daha sık hissedilebilir ve özellikle tatlı
                isteği artabilir.
              </p>
            </section>

            <MidCTA />

            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                en sık yapılan hatalar
              </h2>
              <div className="mt-4 grid gap-4">
                <div className="rounded-2xl bg-[#f7f4ee] p-4">
                  <h3 className="font-medium">çok uzun süre aç kalmak</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    gün içinde öğün atlamak, akşam daha büyük porsiyonlara ve
                    kontrol kaybına yol açabilir.
                  </p>
                </div>
                <div className="rounded-2xl bg-[#f7f4ee] p-4">
                  <h3 className="font-medium">
                    öğünleri protein yönünden zayıf kurmak
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    sadece karbonhidrat ağırlıklı öğünler daha hızlı acıkmaya
                    neden olabilir.
                  </p>
                </div>
                <div className="rounded-2xl bg-[#f7f4ee] p-4">
                  <h3 className="font-medium">
                    akşam tatlı krizini gün boyu biriktirmek
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    gündüz yetersiz beslenme, akşam yüksek iştah olarak geri
                    dönebilir.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                günlük düzen nasıl kurulabilir?
              </h2>
              <div className="mt-4 space-y-4 text-neutral-700">
                <p>
                  <strong>1.</strong> öğün aralarını aşırı uzatma. herkes için
                  tek doğru saat yok ama uzun açlıklar seni kontrolden
                  çıkarıyorsa bunu fark edip düzen kurmak gerekir.
                </p>
                <p>
                  <strong>2.</strong> ana öğünlerde protein kaynağı bulundur.
                  yumurta, yoğurt, peynir, et, tavuk, balık, bakliyat gibi
                  seçenekler tokluğu destekler.
                </p>
                <p>
                  <strong>3.</strong> lifli besinleri artır. sebzeler, kuru
                  baklagiller, yulaf ve meyve gibi seçenekler günlük düzeni
                  destekler.
                </p>
                <p>
                  <strong>4.</strong> tatlı isteğini sadece iradeyle çözmeye
                  çalışma. önce gün içi düzenin yeterli olup olmadığına bak.
                </p>
                <p>
                  <strong>5.</strong> mükemmel liste yerine uygulanabilir sistem
                  kur. iş hayatına, eve dönüş saatine ve gerçek tempona uyan plan
                  daha değerlidir.
                </p>
              </div>
            </section>

            <section className="rounded-3xl bg-[#f6f1e8] p-5">
              <h2 className="text-xl font-semibold tracking-tight">not</h2>
              <p className="mt-3 text-sm leading-6 text-neutral-700">
                bu içerik genel bilgilendirme amaçlıdır. tanı, tedavi veya
                kişisel beslenme planı yerine geçmez. kişisel sağlık durumunuz
                için uzman desteği alınmalıdır.
              </p>
            </section>

            <BottomCTA />
          </div>
        </div>
      </article>

      <RelatedGuides currentSlug={currentSlug} />
    </main>
  );
}

export function GuideArticleSweet() {
  const currentSlug = "/rehberler/tatli-istegi-nasil-azaltilir";

  return (
    <main className="mx-auto max-w-4xl px-6 py-14 md:py-20">
      <Link
        to="/rehberler"
        className="text-sm text-neutral-500 underline underline-offset-4"
      >
        ← rehberlere dön
      </Link>

      <article className="mt-6 overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-sm">
        <div className="h-40 bg-gradient-to-br from-amber-100 via-orange-50 to-[#f6f1e8]" />
        <div className="p-6 md:p-10">
          <span className="inline-flex rounded-full bg-[#f6f1e8] px-3 py-1 text-xs font-medium text-neutral-700">
            kan şekeri dengesi
          </span>

          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            insülin direncinde tatlı isteği nasıl azaltılır?
          </h1>

          <p className="mt-5 text-base leading-7 text-neutral-700">
            tatlı isteği çoğu zaman sadece irade eksikliği değildir. gün içinde
            yetersiz beslenme, uzun açlık, düşük protein alımı ve düzensiz öğün
            akşam saatlerinde daha güçlü istekler oluşturabilir. bu yüzden
            çözüm yalnızca tatlıyı yasaklamak değildir.
          </p>

          <div className="mt-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                tatlı krizleri neden artar?
              </h2>
              <p className="mt-3 leading-7 text-neutral-700">
                gün boyu yeterli doygunluk sağlanmadığında vücut hızlı enerji
                veren seçeneklere yönelmeye daha yatkın hale gelir. özellikle
                akşam saatlerinde yorgunluk ve stres de bu isteği güçlendirebilir.
              </p>
            </section>

            <MidCTA />

            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                en sık yapılan yanlışlar
              </h2>
              <div className="mt-4 grid gap-4">
                <div className="rounded-2xl bg-[#f7f4ee] p-4">
                  <h3 className="font-medium">tüm gün çok az yemek</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    akşam gelen kontrolsüz tatlı isteğinin en sık nedenlerinden
                    biridir.
                  </p>
                </div>
                <div className="rounded-2xl bg-[#f7f4ee] p-4">
                  <h3 className="font-medium">yasak koyup sonra patlamak</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    aşırı katı kurallar kısa vadede işe yarıyor gibi görünse de
                    çoğu zaman geri teper.
                  </p>
                </div>
                <div className="rounded-2xl bg-[#f7f4ee] p-4">
                  <h3 className="font-medium">
                    stres ve uykuyu görmezden gelmek
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    sadece besine odaklanıp yaşam düzenini unutmak sorunu eksik
                    çözmeye yol açar.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                ne yapmak daha mantıklı?
              </h2>
              <div className="mt-4 space-y-4 text-neutral-700">
                <p>
                  <strong>1.</strong> ana öğünleri daha dengeli kur. protein,
                  lif ve yeterli hacim tatlı isteğinin şiddetini azaltabilir.
                </p>
                <p>
                  <strong>2.</strong> öğün atlamayı alışkanlık haline getirme.
                  özellikle seni akşam kontrolden çıkarıyorsa bu önemli.
                </p>
                <p>
                  <strong>3.</strong> tatlıyı tamamen "yasaklı" kategoriye koyma.
                  bu psikolojik baskıyı artırabilir.
                </p>
                <p>
                  <strong>4.</strong> uykunu ve stres düzeyini ciddiye al.
                  yorgunluk arttıkça hızlı ödül arayışı da artabilir.
                </p>
                <p>
                  <strong>5.</strong> hedefini "hiç istememek" değil, "daha iyi
                  yönetmek" olarak koy. bu daha gerçekçi ve sürdürülebilir olur.
                </p>
              </div>
            </section>

            <section className="rounded-3xl bg-[#f6f1e8] p-5">
              <h2 className="text-xl font-semibold tracking-tight">not</h2>
              <p className="mt-3 text-sm leading-6 text-neutral-700">
                bu içerik genel bilgilendirme amaçlıdır. kişisel sağlık
                durumunuz ve özel ihtiyaçlarınız için uzman desteği alınmalıdır.
              </p>
            </section>

            <BottomCTA />
          </div>
        </div>
      </article>

      <RelatedGuides currentSlug={currentSlug} />
    </main>
  );
}

export function GuideArticleDesk() {
  const currentSlug = "/rehberler/masa-basi-beslenme-hatalari";

  return (
    <main className="mx-auto max-w-4xl px-6 py-14 md:py-20">
      <Link
        to="/rehberler"
        className="text-sm text-neutral-500 underline underline-offset-4"
      >
        ← rehberlere dön
      </Link>

      <article className="mt-6 overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-sm">
        <div className="h-40 bg-gradient-to-br from-sky-100 via-cyan-50 to-[#f6f1e8]" />
        <div className="p-6 md:p-10">
          <span className="inline-flex rounded-full bg-[#f6f1e8] px-3 py-1 text-xs font-medium text-neutral-700">
            günlük yaşam
          </span>

          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            masa başı çalışanlarda en sık yapılan beslenme hataları
          </h1>

          <p className="mt-5 text-base leading-7 text-neutral-700">
            masa başı çalışma düzeni sadece hareketi azaltmaz; öğün saatlerini,
            susama farkındalığını ve atıştırma davranışını da etkiler. bu yüzden
            problem çoğu zaman "ne yediğinden" çok, "gün içinde nasıl bir düzen
            kurduğundan" kaynaklanır.
          </p>

          <div className="mt-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                neden masa başı düzende işler zorlaşıyor?
              </h2>
              <p className="mt-3 leading-7 text-neutral-700">
                uzun süre oturmak, ekran karşısında çalışmak ve yoğun odak
                gerektiren işler; hem açlık sinyallerini karıştırabilir hem de
                fark etmeden sık atıştırmaya yol açabilir. ayrıca çoğu kişi su
                tüketimini ve hareket molalarını ihmal eder.
              </p>
            </section>

            <MidCTA />

            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                en sık görülen hatalar
              </h2>
              <div className="mt-4 grid gap-4">
                <div className="rounded-2xl bg-[#f7f4ee] p-4">
                  <h3 className="font-medium">öğün atlayıp akşam yüklenmek</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    gün içindeki düzensizlik akşam daha yüksek porsiyonlara
                    neden olabilir.
                  </p>
                </div>
                <div className="rounded-2xl bg-[#f7f4ee] p-4">
                  <h3 className="font-medium">susamayı açlık sanmak</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    gün boyu az su içen kişiler gereksiz atıştırmaya daha açık
                    olabilir.
                  </p>
                </div>
                <div className="rounded-2xl bg-[#f7f4ee] p-4">
                  <h3 className="font-medium">ekran başında otomatik yemek</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    farkındalık azaldığında tüketilen miktar kolayca artabilir.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                daha iyi bir düzen nasıl kurulur?
              </h2>
              <div className="mt-4 space-y-4 text-neutral-700">
                <p>
                  <strong>1.</strong> iş temposuna uygun sabit bir öğün akışı
                  belirle. mükemmel saat değil, sürdürülebilir düzen önemli.
                </p>
                <p>
                  <strong>2.</strong> masanda "göz önünde" sürekli atıştırmalık
                  tutma. çevre düzeni davranışı çok etkiler.
                </p>
                <p>
                  <strong>3.</strong> su içmeyi hatırlatacak küçük bir sistem
                  kur. şişe bulundurmak bile fark yaratabilir.
                </p>
                <p>
                  <strong>4.</strong> ana öğünde protein ve sebze/lif dengesini
                  ihmal etme. bu, daha uzun tokluk sağlar.
                </p>
                <p>
                  <strong>5.</strong> kısa hareket molaları ekle. sadece kalori
                  değil, zihinsel yorgunluk açısından da işe yarar.
                </p>
              </div>
            </section>

            <section className="rounded-3xl bg-[#f6f1e8] p-5">
              <h2 className="text-xl font-semibold tracking-tight">not</h2>
              <p className="mt-3 text-sm leading-6 text-neutral-700">
                bu içerik genel bilgilendirme amaçlıdır. kişisel sağlık
                durumunuz, iş rutininiz ve özel ihtiyaçlarınız için uzman
                desteği daha doğru sonuç verir.
              </p>
            </section>

            <BottomCTA />
          </div>
        </div>
      </article>

      <RelatedGuides currentSlug={currentSlug} />
    </main>
  );
}

export function GuideArticlePregnancy() {
  const currentSlug = "/rehberler/gebelik-planlayan-kadinlar-icin-beslenme";

  return (
    <main className="mx-auto max-w-4xl px-6 py-14 md:py-20">
      <Link
        to="/rehberler"
        className="text-sm text-neutral-500 underline underline-offset-4"
      >
        ← rehberlere dön
      </Link>

      <article className="mt-6 overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-sm">
        <div className="h-40 bg-gradient-to-br from-rose-100 via-pink-50 to-[#f6f1e8]" />
        <div className="p-6 md:p-10">
          <span className="inline-flex rounded-full bg-[#f6f1e8] px-3 py-1 text-xs font-medium text-neutral-700">
            kadın sağlığı
          </span>

          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            gebelik planlayan kadınlar için beslenme
          </h1>

          <p className="mt-5 text-base leading-7 text-neutral-700">
            gebelik planı yapılan dönem, sadece kilo odaklı değil; enerji
            dengesi, vitamin-mineral yeterliliği ve sürdürülebilir alışkanlıklar
            açısından da önemlidir. bu süreçte amaç kusursuz beslenmek değil,
            vücudu gebeliğe destek olacak kadar düzenli ve yeterli beslemektir.
          </p>

          <div className="mt-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                neden önceden düzen kurmak faydalı?
              </h2>
              <p className="mt-3 leading-7 text-neutral-700">
                gebelik oluşmadan önce kurulan beslenme düzeni; enerji alımı,
                demir, folat ve protein gibi temel başlıklarda eksik kalma
                riskini azaltmaya yardımcı olabilir. ayrıca ani ve sert
                değişiklikler yerine yavaş oturan alışkanlıklar daha kalıcı olur.
              </p>
            </section>

            <MidCTA />

            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                öncelik verilmesi gereken noktalar
              </h2>
              <div className="mt-4 space-y-4 text-neutral-700">
                <p>
                  <strong>1.</strong> ana öğünleri düzenli kur. uzun açlıklar ve
                  bir öğüne yığılan beslenme, günlük yeterliliği zorlaştırabilir.
                </p>
                <p>
                  <strong>2.</strong> protein kaynaklarına her gün yer ver.
                  yumurta, yoğurt, peynir, balık, et veya bakliyatlar temel
                  yapı taşlarıdır.
                </p>
                <p>
                  <strong>3.</strong> sebze, meyve ve tam tahıl çeşitliliğini
                  artır. bu grup hem lif hem de farklı mikro besin ögeleri
                  açısından destek sağlar.
                </p>
                <p>
                  <strong>4.</strong> takviyeleri kendi kendine başlama mantığıyla
                  değil, doktor önerisiyle düşün. özellikle folik asit ve demir
                  gibi başlıklarda kişisel plan gerekebilir.
                </p>
              </div>
            </section>

            <section className="rounded-3xl bg-[#f6f1e8] p-5">
              <h2 className="text-xl font-semibold tracking-tight">kısa sonuç</h2>
              <p className="mt-3 text-sm leading-6 text-neutral-700">
                gebelik öncesi beslenmede en güçlü adım, geçici liste aramak
                yerine düzenli ve yeterli bir temel oluşturmaktır. özel bir
                sağlık durumun varsa bireysel takip daha doğru olur.
              </p>
            </section>

            <BottomCTA />
          </div>
        </div>
      </article>

      <RelatedGuides currentSlug={currentSlug} />
    </main>
  );
}

export function GuideArticlePcos() {
  const currentSlug = "/rehberler/pcos-beslenme-yaklasimi";

  return (
    <main className="mx-auto max-w-4xl px-6 py-14 md:py-20">
      <Link
        to="/rehberler"
        className="text-sm text-neutral-500 underline underline-offset-4"
      >
        ← rehberlere dön
      </Link>

      <article className="mt-6 overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-sm">
        <div className="h-40 bg-gradient-to-br from-violet-100 via-fuchsia-50 to-[#f6f1e8]" />
        <div className="p-6 md:p-10">
          <span className="inline-flex rounded-full bg-[#f6f1e8] px-3 py-1 text-xs font-medium text-neutral-700">
            kadın sağlığı
          </span>

          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            pcos'ta beslenme yaklaşımı
          </h1>

          <p className="mt-5 text-base leading-7 text-neutral-700">
            pcos tek bir besinle ortaya çıkmaz ve tek bir besinle düzelmez.
            bu nedenle en faydalı yaklaşım, kan şekeri dengesini destekleyen,
            aşırı kısıtlama yaratmayan ve günlük hayata uyabilen bir düzen
            kurmaktır.
          </p>

          <div className="mt-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                pcos'ta beslenme neden önemli?
              </h2>
              <p className="mt-3 leading-7 text-neutral-700">
                pcos bazı kişilerde insülin direnci, açlık dengesizliği ve kilo
                yönetiminde zorlanma ile birlikte görülebilir. düzenli öğün,
                yeterli protein ve lif alımı bu dalgalanmaları yumuşatmaya
                yardımcı olabilir.
              </p>
            </section>

            <MidCTA />

            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                temel prensipler
              </h2>
              <div className="mt-4 space-y-4 text-neutral-700">
                <p>
                  <strong>1.</strong> uzun süre aç kalıp sonra fazla yemek yerine
                  daha dengeli bir öğün akışı kur. bu, gün sonu kontrol kaybını
                  azaltabilir.
                </p>
                <p>
                  <strong>2.</strong> sadece karbonhidrat ağırlıklı tabaklar
                  yerine protein ve lif ekle. yoğurt, yumurta, peynir,
                  bakliyat ve sebze iyi bir temel oluşturur.
                </p>
                <p>
                  <strong>3.</strong> aşırı yasaklar koyma. çok katı listeler
                  kısa sürede bıkkınlık yaratıp sürdürülebilirliği bozabilir.
                </p>
                <p>
                  <strong>4.</strong> uyku, stres ve hareketi beslenmeden ayrı
                  düşünme. pcos yönetiminde tablo genellikle birden fazla
                  başlığın birlikte ele alınmasıyla iyileşir.
                </p>
              </div>
            </section>

            <section className="rounded-3xl bg-[#f6f1e8] p-5">
              <h2 className="text-xl font-semibold tracking-tight">kısa sonuç</h2>
              <p className="mt-3 text-sm leading-6 text-neutral-700">
                pcos'ta en iyi beslenme planı, moda diyetlerden çok sana uyum
                sağlayan düzendir. belirtiler yoğunsa veya laboratuvar takibi
                gerekiyorsa hekim ve diyetisyen desteği birlikte daha faydalıdır.
              </p>
            </section>

            <BottomCTA />
          </div>
        </div>
      </article>

      <RelatedGuides currentSlug={currentSlug} />
    </main>
  );
}

export function GuideArticleBloating() {
  const currentSlug = "/rehberler/siskinlik-icin-gunluk-beslenme-onerileri";

  return (
    <main className="mx-auto max-w-4xl px-6 py-14 md:py-20">
      <Link
        to="/rehberler"
        className="text-sm text-neutral-500 underline underline-offset-4"
      >
        ← rehberlere dön
      </Link>

      <article className="mt-6 overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-sm">
        <div className="h-40 bg-gradient-to-br from-teal-100 via-emerald-50 to-[#f6f1e8]" />
        <div className="p-6 md:p-10">
          <span className="inline-flex rounded-full bg-[#f6f1e8] px-3 py-1 text-xs font-medium text-neutral-700">
            bağırsak sağlığı
          </span>

          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            şişkinlik yaşayanlar için günlük beslenme önerileri
          </h1>

          <p className="mt-5 text-base leading-7 text-neutral-700">
            şişkinlik tek başına bir hastalık değildir; yemek hızı, öğün
            düzeni, porsiyon büyüklüğü ve bazı besinlere kişisel hassasiyet gibi
            farklı nedenlerle artabilir. bu yüzden amaç her şeyi kesmek değil,
            hangi düzenin seni rahatlattığını anlamaktır.
          </p>

          <div className="mt-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                şişkinlik neden günlük hayatta artar?
              </h2>
              <p className="mt-3 leading-7 text-neutral-700">
                çok hızlı yemek, uzun açlıktan sonra büyük porsiyonlar tüketmek,
                yetersiz su içmek veya gün boyu sürekli atıştırmak sindirim
                konforunu bozabilir. bazı kişilerde stres de belirtileri
                belirginleştirir.
              </p>
            </section>

            <MidCTA />

            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                daha rahat bir düzen için neler denenebilir?
              </h2>
              <div className="mt-4 space-y-4 text-neutral-700">
                <p>
                  <strong>1.</strong> yemekleri daha yavaş ye ve lokmaları iyi
                  çiğne. hava yutma ve aşırı hızlı yeme bazı kişilerde önemli
                  bir etkendir.
                </p>
                <p>
                  <strong>2.</strong> öğün aralarını düzenle. çok uzun aç kalıp
                  bir anda fazla yemek sindirim şikâyetini artırabilir.
                </p>
                <p>
                  <strong>3.</strong> sebze, baklagil, süt ürünü veya gazlı
                  içecekler gibi seni rahatsız eden grupları not al. herkeste
                  aynı besin sorun yaratmaz.
                </p>
                <p>
                  <strong>4.</strong> su tüketimini ve günlük hafif hareketi ihmal
                  etme. yürüyüş gibi basit adımlar bile rahatlama sağlayabilir.
                </p>
              </div>
            </section>

            <section className="rounded-3xl bg-[#f6f1e8] p-5">
              <h2 className="text-xl font-semibold tracking-tight">kısa sonuç</h2>
              <p className="mt-3 text-sm leading-6 text-neutral-700">
                şişkinlik sık tekrarlıyorsa önce günlük düzen ve tetikleyiciler
                gözden geçirilmelidir. şikâyetler uzun sürüyor, ağrı veya başka
                belirtiler ekleniyorsa tıbbi değerlendirme geciktirilmemelidir.
              </p>
            </section>

            <BottomCTA />
          </div>
        </div>
      </article>

      <RelatedGuides currentSlug={currentSlug} />
    </main>
  );
}
