import Calculator from "../components/Calculator";
import WaterCalculator from "../components/WaterCalculator";

export default function Tools() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14 md:py-20">
      <span className="text-sm font-medium text-neutral-500">hesaplayıcılar</span>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">
        çalışan hesaplayıcılar
      </h1>
      <p className="mt-4 max-w-2xl text-neutral-700">
        nereden başlayacağını görmek bazen karar vermeyi kolaylaştırır. bu
        hesaplayıcılar, temel ihtiyaçlarını kısa sürede görerek daha bilinçli
        adım atmana yardımcı olur.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Calculator />
        <WaterCalculator />
      </div>
    </main>
  );
}
