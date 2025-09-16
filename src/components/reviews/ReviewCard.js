// src/components/reviews/ReviewCard.js
import React from "react";
import RatingStars from "./RatingStars";

export default function ReviewCard({ review, rank }) {
  const {
    title,
    creator,
    rating,
    tags = [],
    body,
    date,
    year,
    image,
    bestTracks = [],
  } = review;

  const displayYear = year || (date ? new Date(date).getFullYear() : null);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="400"
      className="relative w-full h-full bg-gradient-to-b from-white/10 backdrop-blur-md 
                 border border-white/20 shadow-lg rounded-xl p-4"
    >
      {/* Rank badge */}
      {typeof rank === "number" && (
        <div className="absolute -top-2 -left-2 rounded-xl border border-white/20 bg-teal-400/10 px-2 py-1">
          <span className="text-xs font-semibold text-teal-300">#{rank}</span>
        </div>
      )}

      {/* Top row */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          {image && (
            <img
              src={image}
              alt={`${title} cover`}
              className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg border border-white/20"
              referrerPolicy="no-referrer"
              onError={(e) => {
                if (!e.currentTarget.dataset.fallback) {
                  e.currentTarget.dataset.fallback = "1";
                  e.currentTarget.src =
                    "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
                }
              }}
            />
          )}
          <div>
            <h2 className="font-bold text-lg leading-tight">
              {title}
              {displayYear && (
                <span className="ml-2 text-white/60 text-sm">
                  ({displayYear})
                </span>
              )}
            </h2>
            <p className="text-white/80 text-sm">{creator}</p>
            <div className="mt-1">
              <RatingStars value={Number(rating) || 0} />
            </div>
          </div>
        </div>
      </div>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((t, i) => (
            <span
              key={i}
              className="text-xs rounded-md border border-white/20 bg-white/10 px-2 py-1"
            >
              #{t}
            </span>
          ))}
        </div>
      )}

      {/* Body */}
      <p className="mt-3 text-white/90 leading-relaxed whitespace-pre-wrap">
        {body}
      </p>

      {/* Best tracks */}
      {bestTracks && bestTracks.length > 0 && (
        <div className="mt-3">
          <p className="text-xs uppercase tracking-wide text-white/60 mb-1">
            Best Tracks
          </p>
          <ol className="list-decimal list-inside text-white/90 text-sm space-y-0.5">
            {bestTracks.map((track, idx) => (
              <li key={idx}>{track}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
