import { useState } from "react";

export default function WaterCalculator() {
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState(null);

  const calculateWater = () => {
    if (!weight) return;

    const w = Number(weight);
    const ml = w * 30;
    const liters = (ml / 1000).toFixed(1);

    setResult({
      ml,
      liters,
    });
  };

  const whatsappUrl = result
    ? `https://wa.me/905050727306?text=${encodeURIComponent(
        `merhaba, günlük su ihtiyacımı hesapladım.
kilo: ${weight}
sonuç: ${result.liters} litre (${result.ml} ml)

buna göre bana özel doğru yönü netleştirebilir miyiz?`
      )}`
    : "https://wa.me/905050727306?text=";

  return (
    <section className="w-full rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          günlük su ihtiyacı hesaplayıcı
        </h2>
        <p className="mt-2 text-sm text-neutral-600">
          kilona göre yaklaşık günlük su ihtiyacını öğren.
        </p>
      </div>

      <div className="grid gap-4">
        <label className="text-sm font-medium text-neutral-700">
          kilonu gir (kg)
        </label>
        <input
          type="number"
          placeholder="ör. 70"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="rounded-2xl border border-neutral-200 px-4 py-3 outline-none focus:border-neutral-400"
        />
        <p className="-mt-1 text-xs leading-5 text-neutral-500">
          sadece mevcut kilonu yazman yeterli.
        </p>
      </div>

      <div className="mt-4">
        <button
          onClick={calculateWater}
          className="rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
        >
          hesapla
        </button>
      </div>

      {result && (
        <div className="mt-6 rounded-2xl bg-[#f5f5ef] p-5">
          <div className="space-y-2 text-sm text-neutral-800">
            <p>
              <span className="font-semibold">yaklaşık ihtiyaç:</span>{" "}
              {result.ml} ml
            </p>
            <p>
              <span className="font-semibold">litre karşılığı:</span>{" "}
              {result.liters} litre
            </p>
          </div>

          <p className="mt-4 text-sm leading-6 text-neutral-700">
            bu sonuç genel bir tahmindir; günlük rutine, hava sıcaklığına ve
            aktivite düzeyine göre sana özel ihtiyaç daha farklı olabilir.
            yani bu miktar tek başına yeterli olmayabilir, birlikte
            netleştirebiliriz.
          </p>

          <p className="mt-4 text-xs leading-5 text-neutral-500">
            bu hesaplama genel bir tahmindir. hava sıcaklığı, aktivite düzeyi,
            sağlık durumu ve günlük yaşam temposu su ihtiyacını değiştirebilir.
          </p>

          <div className="mt-5 rounded-2xl border border-black/5 bg-white p-4">
            <p className="text-sm font-medium text-neutral-900">
              bu sadece başlangıç
            </p>
            <p className="mt-2 text-sm leading-6 text-neutral-600">
              değerlerini gördün, şimdi sana özel doğru yönü netleştirebiliriz.
            </p>
            <div className="mt-3 text-xs leading-5 text-neutral-500">
              <p>kısa bir mesaj yeterli</p>
              <p>ücretsiz ilk yönlendirme</p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:opacity-90 sm:w-auto"
            >
              whatsapp'tan yaz, birlikte netleştirelim
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
