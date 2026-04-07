import React, { useEffect, useState } from "react";

function getCurrentRoute() {
  const hash = window.location.hash || "#/";
  return hash.replace("#", "") || "/";
}

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#f8f6f1] text-gray-900">
      <header className="border-b p-4 flex justify-between">
        <a href="#/" className="font-semibold">denge.fit</a>
        <div className="flex gap-4 text-sm">
          <a href="#/rehberler">rehberler</a>
          <a href="#/araclar">araçlar</a>
        </div>
      </header>

      <main>{children}</main>
    </div>
  );
}

/* ---------------- HOME ---------------- */

function Home() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-semibold">
        sağlıklı yaşamı sadeleştiriyoruz
      </h1>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        <a href="#/rehber/akdeniz" className="border p-5 rounded-xl">
          akdeniz tipi beslenme nedir?
        </a>
        <a href="#/rehber/baslangic" className="border p-5 rounded-xl">
          sağlıklı beslenmeye başlangıç
        </a>
        <a href="#/rehber/kilo" className="border p-5 rounded-xl">
          sürdürülebilir kilo yönetimi
        </a>
        <a href="#/rehber/gece" className="border p-5 rounded-xl">
          gece acıkmaları neden olur?
        </a>
        <a href="#/rehber/bmi" className="border p-5 rounded-xl">
          bmi tek başına yeterli mi?
        </a>
      </div>
    </div>
  );
}

/* ---------------- TOOL ---------------- */

function ToolBMI() {
  const [kg, setKg] = useState("");
  const [cm, setCm] = useState("");
  const [result, setResult] = useState(null);

  function calc() {
    const h = cm / 100;
    const bmi = kg / (h * h);
    setResult(bmi.toFixed(1));
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-semibold mb-6">BMI hesaplayıcı</h1>

      <input
        placeholder="kilo (kg)"
        className="border p-2 w-full mb-3"
        value={kg}
        onChange={(e) => setKg(e.target.value)}
      />

      <input
        placeholder="boy (cm)"
        className="border p-2 w-full mb-3"
        value={cm}
        onChange={(e) => setCm(e.target.value)}
      />

      <button
        onClick={calc}
        className="bg-black text-white px-4 py-2 w-full"
      >
        hesapla
      </button>

      {result && (
        <p className="mt-4">
          BMI: <b>{result}</b>
        </p>
      )}
    </div>
  );
}

/* ---------------- CONTENT ---------------- */

function Page({ title, children }) {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <a href="#/" className="text-sm">← geri</a>
      <h1 className="text-3xl font-semibold mt-4">{title}</h1>
      <div className="mt-6 text-gray-700 leading-7">{children}</div>
    </div>
  );
}

function ContentPages(route) {
  if (route === "/rehber/akdeniz")
    return (
      <Page title="akdeniz tipi beslenme nedir?">
        akdeniz tipi beslenme, sürdürülebilir ve dengeli bir beslenme modelidir.
        sebze, zeytinyağı ve doğal gıdalar ön plandadır.
      </Page>
    );

  if (route === "/rehber/baslangic")
    return (
      <Page title="sağlıklı beslenmeye başlangıç">
        en önemli şey mükemmel diyet değil, sürdürülebilir alışkanlıktır.
      </Page>
    );

  if (route === "/rehber/kilo")
    return (
      <Page title="sürdürülebilir kilo yönetimi">
        hızlı kilo vermek değil, kalıcı denge kurmak önemlidir.
      </Page>
    );

  if (route === "/rehber/gece")
    return (
      <Page title="gece acıkmaları neden olur?">
        düzensiz beslenme ve insülin dalgalanmaları en büyük sebeptir.
      </Page>
    );

  if (route === "/rehber/bmi")
    return (
      <Page title="bmi tek başına yeterli mi?">
        bmi faydalıdır ama tek başına yeterli değildir.
      </Page>
    );

  if (route === "/araclar") return <ToolBMI />;

  return <Home />;
}

/* ---------------- ROUTER ---------------- */

function App() {
  const [route, setRoute] = useState(getCurrentRoute());

  useEffect(() => {
    window.addEventListener("hashchange", () =>
      setRoute(getCurrentRoute())
    );
  }, []);

  return (
    <Layout>
      <ContentPages {...route} />
    </Layout>
  );
}

export default App;