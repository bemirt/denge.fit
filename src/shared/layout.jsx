import { useState } from "react";
import { Link } from "react-router-dom";
import { WHATSAPP_LINK } from "./siteData";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { to: "/", label: "ana sayfa" },
    { to: "/rehberler", label: "rehberler" },
    { to: "/testler", label: "testler" },
    { to: "/araclar", label: "hesaplayıcılar" },
    { to: "/hakkimizda", label: "hakkımızda" },
    { to: "/iletisim", label: "iletişim" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f6f1e8]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-xl font-semibold tracking-tight">
          <em className="italic">denge</em>
        </Link>

        <nav className="hidden gap-6 text-sm md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="transition hover:opacity-70"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex rounded-xl border border-black/10 bg-white px-3 py-2 text-sm md:hidden"
        >
          menü
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-black/5 bg-white md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-6 py-4 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-3 transition hover:bg-[#f6f1e8]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white/60">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 lg:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <h3 className="text-lg font-semibold">
            <em className="italic">denge</em>
          </h3>
          <p className="mt-3 max-w-md text-sm leading-6 text-neutral-600">
            beslenme ve günlük yaşam tarafında sade rehberler, pratik araçlar,
            testler ve uygulanabilir bir başlangıç sunar.
          </p>
        </div>

        <div className="lg:justify-self-center">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
            menü
          </h4>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <Link to="/" className="hover:opacity-70">
              ana sayfa
            </Link>
            <Link to="/rehberler" className="hover:opacity-70">
              rehberler
            </Link>
            <Link to="/testler" className="hover:opacity-70">
              testler
            </Link>
            <Link to="/araclar" className="hover:opacity-70">
              araçlar
            </Link>
            <Link to="/hakkimizda" className="hover:opacity-70">
              hakkımızda
            </Link>
            <Link to="/iletisim" className="hover:opacity-70">
              iletişim
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
            iletişim
          </h4>
          <div className="mt-3 space-y-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-900 transition hover:-translate-y-0.5 hover:bg-green-100/80"
            >
              <span>whatsapp</span>
              <span className="text-xs text-green-700">hemen yaz</span>
            </a>

            <a
              href="mailto:denge.fit@protonmail.com"
              className="flex items-center justify-between rounded-2xl border border-black/5 bg-white px-4 py-3 text-sm font-medium text-neutral-900 transition hover:-translate-y-0.5 hover:border-green-200 hover:bg-[#fcfaf6]"
            >
              <span>mail</span>
              <span className="text-xs text-neutral-500">
                denge.fit@protonmail.com
              </span>
            </a>

            <a
              href="https://www.instagram.com/denge.fit/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-2xl border border-black/5 bg-white px-4 py-3 text-sm font-medium text-neutral-900 transition hover:-translate-y-0.5 hover:border-green-200 hover:bg-[#fcfaf6]"
            >
              <span>instagram</span>
              <span className="text-xs text-neutral-500">@denge.fit</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-black/5 px-6 py-4 text-center text-xs text-neutral-500">
        © 2026 <em className="italic">denge</em> - sade, uygulanabilir,
        sürdürülebilir.
      </div>
    </footer>
  );
}
