import React, { useState } from "react";

export default function ReviewFormModal({ open, onClose, onCreate, defaultType = "music" }) {
  const [form, setForm] = useState({
    type: defaultType, title: "", creator: "",
    rating: 4, tags: "", body: "", date: new Date().toISOString(),
  });

  React.useEffect(() => {
    setForm(prev => ({ ...prev, type: defaultType }));
  }, [defaultType]);

  if (!open) return null;

  const submit = (e) => {
    e.preventDefault();
    const tags = form.tags
      .split(",")
      .map(s => s.trim())
      .filter(Boolean);
    onCreate({ ...form, rating: Number(form.rating), tags });
  };

  const set = (k, v) => setForm(prev => ({ ...prev, [k]: v }));

  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <form
        onSubmit={submit}
        className="relative w-full max-w-xl rounded-2xl border border-white/20 
                   bg-white/10 backdrop-blur-xl shadow-2xl p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">New Review</h3>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg px-3 py-1 border border-white/20 bg-white/10 hover:bg-white/20"
          >
            Close
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm text-white/80">Type</label>
            <select
              value={form.type}
              onChange={(e) => set("type", e.target.value)}
              className="rounded-xl bg-black/30 border border-white/20 px-3 py-2"
            >
              <option value="music">Music</option>
              <option value="film">Film</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-white/80">Rating</label>
            <input
              type="number"
              min="1" max="5" step="1"
              value={form.rating}
              onChange={(e) => set("rating", e.target.value)}
              className="rounded-xl bg-black/30 border border-white/20 px-3 py-2"
            />
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-sm text-white/80">Title</label>
            <input
              value={form.title}
              onChange={(e) => set("title", e.target.value)}
              className="rounded-xl bg-black/30 border border-white/20 px-3 py-2"
              placeholder={form.type === "music" ? "Album / Track title" : "Film title"}
              required
            />
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-sm text-white/80">
              {form.type === "music" ? "Artist" : "Director"}
            </label>
            <input
              value={form.creator}
              onChange={(e) => set("creator", e.target.value)}
              className="rounded-xl bg-black/30 border border-white/20 px-3 py-2"
              required
            />
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-sm text-white/80">Tags (comma separated)</label>
            <input
              value={form.tags}
              onChange={(e) => set("tags", e.target.value)}
              className="rounded-xl bg-black/30 border border-white/20 px-3 py-2"
              placeholder="ambient, sci-fi, thriller"
            />
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-sm text-white/80">Review</label>
            <textarea
              value={form.body}
              onChange={(e) => set("body", e.target.value)}
              rows={6}
              className="rounded-xl bg-black/30 border border-white/20 px-3 py-2"
              placeholder="Your thoughts…"
              required
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-md px-4 py-2 shadow-lg hover:bg-white/20 transition"
          >
            Save Review
          </button>
        </div>
      </form>
    </div>
  );
}
