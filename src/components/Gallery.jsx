import React from "react";

export default function Gallery({ links, columns }) {
  const gridClass = columns === 2
    ? "gallery-grid gallery-grid-2"
    : columns === 3
      ? "gallery-grid gallery-grid-3"
      : "gallery-grid gallery-grid-4";

  return (
    <div className={gridClass}>
      {links.map((link, i) => (
        <div className="gallery-item" key={i}>
          <img src={link[0]} alt={link[1] || "Gallery"} loading="lazy" />
          {link[1] && (
            <div className="gallery-item-caption">{link[1]}</div>
          )}
        </div>
      ))}
    </div>
  );
}