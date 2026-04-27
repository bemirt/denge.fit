import Calculator from "../components/Calculator";
import WaterCalculator from "../components/WaterCalculator";

export default function Tools() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14 md:py-20">
      <div className="mb-8">
        <p className="text-sm font-medium text-neutral-500">araçlar</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900">
          hesaplayıcılar
        </h1>
      </div>

      <p className="max-w-2xl text-neutral-700">
        mevcut durumu görmek bazen karar vermeyi kolaylaştırır. bu araçlar,
        temel ihtiyaçlarını kısa sürede görerek daha bilinçli bir başlangıç
        yapmana yardımcı olur.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Calculator />
        <WaterCalculator />
      </div>
    </main>
  );
}
