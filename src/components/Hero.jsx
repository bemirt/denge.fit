function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[rgba(248,246,241,0.92)] backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-6">
        <a href="#" className="flex min-w-0 items-center gap-3">
          <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[rgba(47,58,50,0.08)] bg-[var(--color-primary)]">
            <div className="h-5 w-5 rounded-full border-2 border-[var(--color-text)] opacity-80"></div>
          </div>

          <div className="min-w-0">
            <p className="truncate text-lg font-semibold leading-none tracking-[-0.02em]">denge.fit</p>
            <p className="truncate pt-1 text-xs text-[var(--color-text-soft)]">wellness için daha sade bir başlangıç</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#neden"
            className="text-sm text-[var(--color-text-soft)] transition hover:text-[var(--color-text)]"
          >
            neden denge.fit
          </a>
          <a
            href="#nasil"
            className="text-sm text-[var(--color-text-soft)] transition hover:text-[var(--color-text)]"
          >
            nasıl çalışır
          </a>
          <a
            href="#iletisim"
            className="text-sm text-[var(--color-text-soft)] transition hover:text-[var(--color-text)]"
          >
            iletişim
          </a>
        </nav>

        <a
          href="#basla"
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-[var(--color-text)] px-5 py-3 text-sm font-semibold !text-white whitespace-nowrap transition hover:opacity-90"
        >
          erken erişim
        </a>
      </div>
    </header>
  )
}

export default Header