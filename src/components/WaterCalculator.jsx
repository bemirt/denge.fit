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

  return (
    <section className="w-full max-w-2xl rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          günlük su ihtiyacı hesaplayıcı
        </h2>
        <p className="mt-2 text-sm text-neutral-600">
          kilona göre yaklaşık günlük su ihtiyacını öğren.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-[1fr_auto]">
        <input
          type="number"
          placeholder="kilo (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="rounded-2xl border border-neutral-200 px-4 py-3 outline-none focus:border-neutral-400"
        />

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

          <p className="mt-4 text-xs leading-5 text-neutral-500">
            bu hesaplama genel bir tahmindir. hava sıcaklığı, aktivite düzeyi,
            sağlık durumu ve günlük yaşam temposu su ihtiyacını değiştirebilir.
          </p>
        </div>
      )}
    </section>
  );
}