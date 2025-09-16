import React from "react";

export default function RatingStars({ value = 0, outOf = 5, showNumber = true }) {
  const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1">
        {Array.from({ length: outOf }, (_, i) => {
          const portion = clamp(value - i, 0, 1);
          return (
            <div key={i} className="relative w-5 h-5">
              <svg viewBox="0 0 24 24" className="absolute inset-0 w-5 h-5 fill-white/20">
                <path d="M12 .587l3.668 7.431 8.2 1.191-5.934 5.788 1.401 8.168L12 18.896l-7.335 3.869 1.401-8.168L.132 9.209l8.2-1.191z"/>
              </svg>
              <div className="absolute inset-0 overflow-hidden" style={{ width: `${portion * 100}%` }}>
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-teal-400">
                  <path d="M12 .587l3.668 7.431 8.2 1.191-5.934 5.788 1.401 8.168L12 18.896l-7.335 3.869 1.401-8.168L.132 9.209l8.2-1.191z"/>
                </svg>
              </div>
            </div>
          );
        })}
      </div>
      {showNumber && (
        <span className="text-sm text-white/80 tabular-nums">
          {value.toFixed(1)}
        </span>
      )}
    </div>
  );
}
