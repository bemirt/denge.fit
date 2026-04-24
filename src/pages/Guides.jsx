import { useMemo, useState } from "react";
import { guideLibrary } from "../shared/siteData";
import { GuideCard } from "../shared/siteContent";

export default function Guides() {
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("tümü");

  const tags = ["tümü", ...new Set(guideLibrary.map((guide) => guide.tag))];

  const filteredGuides = useMemo(() => {
    return guideLibrary.filter((guide) => {
      const matchesTag =
        selectedTag === "tümü" ? true : guide.tag === selectedTag;

      const q = query.trim().toLowerCase();
      const matchesQuery =
        q === ""
          ? true
          : guide.title.toLowerCase().includes(q) ||
            guide.desc.toLowerCase().includes(q) ||
            guide.tag.toLowerCase().includes(q);

      return matchesTag && matchesQuery;
    });
  }, [query, selectedTag]);

  return (
    <main className="mx-auto max-w-6xl px-6 py-14 md:py-20">
      <span className="text-sm font-medium text-neutral-500">rehberler</span>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">
        rehber içerikler
      </h1>
      <p className="mt-4 max-w-2xl text-neutral-700">
        içerik grupları arasından ilgini çekebilecek rehberleri daha kolay
        filtreleyebilirsin.
      </p>

      <div className="mt-8 rounded-[2rem] border border-black/5 bg-white p-5 shadow-sm">
        <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">
              rehber ara
            </label>
            <input
              type="text"
              placeholder="örnek: insülin, pcos, şişkinlik..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-2xl border border-neutral-200 px-4 py-3 outline-none focus:border-neutral-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">
              kategori filtresi
            </label>
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 outline-none focus:border-neutral-400"
            >
              {tags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>
        </div>

        <p className="mt-4 text-sm text-neutral-600">
          toplam {filteredGuides.length} rehber listeleniyor.
        </p>
      </div>

      {filteredGuides.length > 0 ? (
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredGuides.map((guide) => (
            <GuideCard key={guide.title} guide={guide} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-[2rem] border border-dashed border-black/10 bg-white p-8 text-center shadow-sm">
          <h2 className="text-xl font-semibold">eşleşen rehber bulunamadı</h2>
          <p className="mt-3 text-neutral-600">
            farklı bir kelime dene ya da kategori filtresini değiştir.
          </p>
        </div>
      )}
    </main>
  );
}
