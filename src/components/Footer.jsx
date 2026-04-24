function Footer() {
  return (
    <footer id="iletisim" className="border-t border-[var(--color-border)] px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-[var(--color-text-soft)]">
          © 2026 <em className="italic">denge</em> - daha dengeli bir başlangıç
        </p>
        <p className="text-sm text-[var(--color-text-soft)]">landing v1</p>
      </div>
    </footer>
  );
}

export default Footer;
