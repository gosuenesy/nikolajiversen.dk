// src/components/Reviews.js
import React, { useMemo, useState, useRef, useEffect } from "react";
import ReviewCard from "./reviews/ReviewCard";
import musicReviews from "../data/musicReviews";
import filmReviews from "../data/filmReviews";
import gameReviews from "../data/gameReviews";

const TABS = [
  { key: "game", label: "Games" },
  { key: "music", label: "Music" },
  { key: "film", label: "Film" },
];

const SORTS = [
  { key: "rating_desc", label: "Rating (high → low)" },
  { key: "rating_asc", label: "Rating (low → high)" },
  { key: "date_desc", label: "Date (new → old)" },
  { key: "date_asc", label: "Date (old → new)" },
  { key: "title_asc", label: "Title (A → Z)" },
  { key: "title_desc", label: "Title (Z → A)" },
  { key: "creator_asc", label: "Creator (A → Z)" },
  { key: "creator_desc", label: "Creator (Z → A)" },
  { key: "curated", label: "Personal (curated)" },
];

/** Minimal glass dropdown (instead of native select) */
function GlassSelect({ value, onChange, options, className = "", label }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const current =
    options.find((o) => String(o.value) === String(value)) || options[0];

  useEffect(() => {
    const onDocClick = (e) => {
      if (!ref.current || ref.current.contains(e.target)) return;
      setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <div className={`relative ${className}`} ref={ref}>
      {label && <span className="text-white/70 text-sm mr-2">{label}</span>}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="rounded-xl bg-black/30 border border-white/20 px-3 py-2 min-w-[180px] text-left
                   hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-teal-400/40"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {current?.label}
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute z-50 mt-2 w-full rounded-xl border border-white/20 
                     bg-black/60 backdrop-blur-xl shadow-2xl overflow-hidden"
        >
          {options.map((opt) => {
            const active = String(opt.value) === String(value);
            return (
              <button
                key={opt.value}
                role="option"
                aria-selected={active}
                onClick={() => {
                  onChange(opt.value);
                  setOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 transition
                  ${
                    active
                      ? "bg-teal-400/10 text-white"
                      : "hover:bg-white/10 text-white/90"
                  }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function Reviews() {
  const [activeTab, setActiveTab] = useState("game");
  const [yearFilter, setYearFilter] = useState("all");
  const [sortKey, setSortKey] = useState("rating_desc");

  // Merge + normalize
  const all = useMemo(() => {
    const withType = (arr, type) =>
      arr.map((r) => ({
        ...r,
        type,
        year: r.year ?? new Date(r.date).getFullYear(),
        rating: Number(r.rating),
      }));
    return [
      ...withType(gameReviews, "game"),
      ...withType(musicReviews, "music"),
      ...withType(filmReviews, "film"),
    ];
  }, []);

  // Years available per tab
  const yearsForTab = useMemo(() => {
    const from = all.filter((r) => r.type === activeTab).map((r) => r.year);
    const set = Array.from(new Set(from)).sort((a, b) => b - a);
    return set;
  }, [all, activeTab]);

  // Filter by tab + year
  const filtered = useMemo(() => {
    let arr = all.filter((r) => r.type === activeTab);
    if (yearFilter !== "all") {
      const y = Number(yearFilter);
      arr = arr.filter((r) => r.year === y);
    }
    return arr;
  }, [all, activeTab, yearFilter]);

  // ---- Deterministic + curated sorting ----
  const toNum = (v, fallback = 0) =>
    Number.isFinite(Number(v)) ? Number(v) : fallback;
  const cmpStrAsc = (a, b) =>
    a.localeCompare(b, undefined, { sensitivity: "base" });
  const cmpStrDesc = (a, b) =>
    b.localeCompare(a, undefined, { sensitivity: "base" });

  const getId = (r) => r.slug ?? String(r.id ?? "");
  const getTitle = (r) => r.title ?? "";
  const getCreator = (r) => r.creator ?? r.artist ?? "";
  const getDate = (r) =>
    new Date(r.date || `${r.year || 1900}-01-01`).getTime();
  const getRating = (r) => toNum(r.rating, 0);
  const getCurated = (r) =>
    Number.isFinite(r.curated) ? r.curated : Number.POSITIVE_INFINITY;

  const chain =
    (...comparators) =>
    (a, b) => {
      for (const cmp of comparators) {
        const res = cmp(a, b);
        if (res !== 0) return res;
      }
      return 0;
    };

  const sorted = useMemo(() => {
    const arr = [...filtered];

    const byTitleAsc = (a, b) => cmpStrAsc(getTitle(a), getTitle(b));
    const byTitleDesc = (a, b) => cmpStrDesc(getTitle(a), getTitle(b));
    const byCreatorAsc = (a, b) => cmpStrAsc(getCreator(a), getCreator(b));
    const byCreatorDesc = (a, b) => cmpStrDesc(getCreator(a), getCreator(b));
    const byDateDesc = (a, b) => getDate(b) - getDate(a);
    const byDateAsc = (a, b) => getDate(a) - getDate(b);
    const byRatingDesc = (a, b) => getRating(b) - getRating(a);
    const byRatingAsc = (a, b) => getRating(a) - getRating(b);
    const byIdAsc = (a, b) => cmpStrAsc(getId(a), getId(b));
    const byCuratedAsc = (a, b) => getCurated(a) - getCurated(b);

    // default tie-breakers for stability
    const TIE_BREAK = [byDateDesc, byTitleAsc, byIdAsc];

    switch (sortKey) {
      case "rating_desc":
        return arr.sort(chain(byRatingDesc, byCuratedAsc, ...TIE_BREAK));
      case "rating_asc":
        return arr.sort(chain(byRatingAsc, ...TIE_BREAK));
      case "date_desc":
        return arr.sort(chain(byDateDesc, byRatingDesc, byTitleAsc, byIdAsc));
      case "date_asc":
        return arr.sort(chain(byDateAsc, byRatingDesc, byTitleAsc, byIdAsc));
      case "title_asc":
        return arr.sort(chain(byTitleAsc, byRatingDesc, byDateDesc, byIdAsc));
      case "title_desc":
        return arr.sort(chain(byTitleDesc, byRatingDesc, byDateDesc, byIdAsc));
      case "creator_asc":
        return arr.sort(chain(byCreatorAsc, byRatingDesc, byDateDesc, byIdAsc));
      case "creator_desc":
        return arr.sort(
          chain(byCreatorDesc, byRatingDesc, byDateDesc, byIdAsc)
        );
      case "curated":
        return arr.sort(chain(byCuratedAsc, byRatingDesc, ...TIE_BREAK));
      default:
        return arr.sort(chain(byRatingDesc, byCuratedAsc, ...TIE_BREAK));
    }
  }, [filtered, sortKey]);

  // Rank numbers based on the CURRENT view (filter + sort)
  const ranked = useMemo(() => {
    return sorted.map((item, idx) => ({ ...item, __rank: idx + 1 }));
  }, [sorted]);

  return (
    <section className="pt-28 pb-16 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        className="flex items-center justify-between mb-6"
      >
        <h1 className="text-2xl md:text-3xl font-bold">Reviews</h1>
      </div>

      {/* Tabs */}
      <div className="mb-4 flex gap-2">
        {TABS.map((t) => {
          const active = t.key === activeTab;
          return (
            <button
              key={t.key}
              onClick={() => {
                setActiveTab(t.key);
                setYearFilter("all");
              }}
              className={`rounded-xl px-4 py-2 border shadow-lg backdrop-blur-md transition
                ${
                  active
                    ? "border-teal-400/40 bg-teal-400/10"
                    : "border-white/20 bg-white/10 hover:bg-white/20"
                }
              `}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-col md:flex-row gap-3 md:items-center">
        <GlassSelect
          label="Year"
          value={yearFilter}
          onChange={setYearFilter}
          options={[
            { value: "all", label: "All-time" },
            ...yearsForTab.map((y) => ({ value: y, label: String(y) })),
          ]}
        />
        <GlassSelect
          label="Sort"
          value={sortKey}
          onChange={setSortKey}
          options={SORTS}
        />
      </div>

      {/* Empty */}
      {ranked.length === 0 && (
        <div className="rounded-xl border border-white/20 bg-white/5 backdrop-blur-md p-8 text-center text-white/80">
          No {activeTab} reviews
          {yearFilter !== "all" ? ` in ${yearFilter}` : ""}.
        </div>
      )}

      {/* Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {ranked.map((r) => (
          <ReviewCard key={r.id} review={r} rank={r.__rank} />
        ))}
      </div>
    </section>
  );
}
