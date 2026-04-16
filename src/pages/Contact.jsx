import { WHATSAPP_LINK } from "../shared/siteData";

export default function Contact() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14 md:py-20">
      <span className="text-sm font-medium text-neutral-500">iletişim</span>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">
        bize ulaş
      </h1>
      <p className="mt-4 max-w-2xl text-neutral-700">
        ihtiyacını kısaca yaz, sana uygun uzman veya çözüm için nasıl
        ilerleyebileceğimizi netleştirelim.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm md:p-8">
          <span className="text-sm font-medium text-neutral-500">
            en hızlı başlangıç
          </span>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            önce WhatsApp'tan yaz
          </h2>
          <p className="mt-4 leading-7 text-neutral-700">
            kısa bir mesaj yeterli. hedefini, zorlandığın noktayı veya ne aradığını
            yaz; sana uygun yönlendirme için dönüş yapalım.
          </p>

          <div className="mt-6 rounded-3xl bg-[#f6f1e8] p-5">
            <p className="text-sm font-medium text-neutral-900">
              nasıl ilerliyor?
            </p>
            <div className="mt-3 space-y-3 text-sm leading-6 text-neutral-700">
              <p>1. ihtiyacını kısaca yaz</p>
              <p>2. durumuna uygun ilk yönlendirmeyi paylaşalım</p>
              <p>3. sana uygun uzman / çözüm için dönüş yapalım</p>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              WhatsApp'tan iletişime geç
            </a>
            <a
              href="mailto:denge.fit@protonmail.com"
              className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-medium transition hover:bg-black/5"
            >
              mail gönder
            </a>
          </div>

          <p className="mt-4 text-xs leading-6 text-neutral-500">
            paylaştığın bilgiye göre kısa, net ve yönlendirici bir dönüş hedeflenir.
          </p>
        </div>

        <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm md:p-8">
          <span className="text-sm font-medium text-neutral-500">
            diğer kanallar
          </span>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            güvenli ve net iletişim
          </h2>
          <p className="mt-4 leading-7 text-neutral-700">
            iş birliği, içerik katkısı veya proje önerileri için diğer iletişim
            kanallarını da kullanabilirsin.
          </p>

          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border border-black/5 bg-[#fcfaf6] p-4">
              <p className="text-sm font-medium text-neutral-500">e-posta</p>
              <p className="mt-1 font-medium text-neutral-900">
                denge.fit@protonmail.com
              </p>
            </div>

            <div className="rounded-2xl border border-black/5 bg-[#fcfaf6] p-4">
              <p className="text-sm font-medium text-neutral-500">instagram</p>
              <p className="mt-1 font-medium text-neutral-900">@denge.fit</p>
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-black/10 p-5">
            <p className="text-sm font-medium text-neutral-900">
              hangi durumlar için uygun?
            </p>
            <div className="mt-3 space-y-2 text-sm leading-6 text-neutral-700">
              <p>• beslenme desteği hakkında ilk iletişim</p>
              <p>• doğru uzman veya doğru başlangıç arayışı</p>
              <p>• iş birliği ve içerik proje talepleri</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
