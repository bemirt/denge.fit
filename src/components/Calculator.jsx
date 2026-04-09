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

  return (
    <section className="w-full max-w-2xl mx-auto rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          vücut hesaplayıcı
        </h2>
        <p className="mt-2 text-sm text-neutral-600">
          başlangıç noktanı görmek için temel değerlerini gir.
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

      <button
        onClick={calculate}
        className="mt-4 rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
      >
        hesapla
      </button>

      {result && (
        <div className="mt-6 rounded-2xl bg-[#f5f5ef] p-5">
          <div className="space-y-2 text-sm text-neutral-800">
            <p>
              <span className="font-semibold">bkİ:</span> {result.bmi}
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
        </div>
      )}
    </section>
  );
}