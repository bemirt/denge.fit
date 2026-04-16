import { useState } from "react";

export default function Calculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [result, setResult] = useState(null);

  const calculate = () => {
    if (!weight || !height || !age) return;

    const w = Number(weight);
    const hCm = Number(height);
    const a = Number(age);

    const h = hCm / 100;
    const bmi = (w / (h * h)).toFixed(1);

    let status = "";
    if (bmi < 18.5) status = "zayıf";
    else if (bmi < 25) status = "normal";
    else if (bmi < 30) status = "fazla kilolu";
    else status = "obez";

    const bmr = 10 * w + 6.25 * hCm - 5 * a + 5;
    const daily = Math.round(bmr * 1.3);

    setResult({ bmi, status, daily });
  };

  const whatsappUrl = result
    ? `https://wa.me/905050727306?text=${encodeURIComponent(
        `merhaba, vücut değerlerimi hesapladım.
kilo: ${weight} kg
boy: ${height} cm
yaş: ${age}
bkİ: ${result.bmi}
durum: ${result.status}
günlük kalori ihtiyacı: ${result.daily} kcal

buna göre bana özel doğru yönü netleştirebilir miyiz?`
      )}`
    : "https://wa.me/905050727306?text=";

  return (
    <section className="w-full rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          vücut hesaplayıcı
        </h2>
        <p className="mt-2 text-sm text-neutral-600">
          temel vücut değerlerini görmek, hangi noktada olduğunu anlamanı
          sağlar. bu da hedefini daha gerçekçi kurmanı kolaylaştırır.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <input
          type="number"
          placeholder="kilo (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="rounded-2xl border border-neutral-200 px-4 py-3 outline-none focus:border-neutral-400"
        />
        <input
          type="number"
          placeholder="boy (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="rounded-2xl border border-neutral-200 px-4 py-3 outline-none focus:border-neutral-400"
        />
        <input
          type="number"
          placeholder="yaş"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="rounded-2xl border border-neutral-200 px-4 py-3 outline-none focus:border-neutral-400"
        />
      </div>

      <div className="mt-4">
        <button
          onClick={calculate}
          className="rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
        >
          hesapla
        </button>
      </div>

      {result && (
        <div className="mt-6 rounded-2xl bg-[#f5f5ef] p-5">
          <div className="space-y-2 text-sm text-neutral-800">
            <p>
              <span className="font-semibold">BKİ:</span> {result.bmi}
            </p>
            <p>
              <span className="font-semibold">durum:</span> {result.status}
            </p>
            <p>
              <span className="font-semibold">günlük kalori ihtiyacı:</span>{" "}
              {result.daily} kcal
            </p>
          </div>

          <p className="mt-4 text-xs leading-5 text-neutral-500">
            bu hesaplama genel bilgilendirme amaçlıdır. kişisel sağlık
            durumunuz için uzman desteği alınmalıdır.
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
