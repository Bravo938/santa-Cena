import { useId } from "react";

/**
 * La puerta marcada con sangre (Éxodo 12).
 * - abierta: las hojas se abren y se ve la mesa iluminada.
 * - marcar: dibuja los trazos de sangre al cargar (una sola vez).
 */
export default function Door({ abierta = false, marcar = true, className = "" }) {
  const uid = useId().replace(/:/g, "");
  const luz = `luz-${uid}`;

  return (
    <svg
      viewBox="0 0 240 400"
      role="img"
      aria-label={
        abierta
          ? "Una puerta abierta que deja ver una mesa servida con pan y copa"
          : "Una puerta cerrada, marcada con sangre en el dintel y los postes"
      }
      className={`puerta ${abierta ? "puerta-abierta" : ""} ${className}`}
    >
      <defs>
        <linearGradient id={luz} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#f6c76a" />
          <stop offset="1" stopColor="#d98a2b" />
        </linearGradient>
      </defs>

      {/* Interior iluminado (se ve por la rendija y al abrir) */}
      <rect x="40" y="50" width="160" height="330" fill={`url(#${luz})`} />
      <rect x="40" y="340" width="160" height="40" fill="#b9731f" opacity="0.55" />

      {/* La mesa */}
      <g>
        <rect x="58" y="270" width="124" height="8" fill="#3a2615" />
        <rect x="66" y="278" width="6" height="62" fill="#3a2615" />
        <rect x="168" y="278" width="6" height="62" fill="#3a2615" />
        {/* platos */}
        <ellipse cx="82" cy="268" rx="14" ry="3" fill="#f7ecd2" />
        <ellipse cx="158" cy="268" rx="14" ry="3" fill="#f7ecd2" />
        {/* pan */}
        <ellipse cx="108" cy="265" rx="12" ry="5" fill="#8a5a24" />
        <path d="M101 264 l4 -2 M108 263 l4 -2 M114 264 l3 -2" stroke="#5c3a14" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        {/* copa */}
        <path d="M127 248 h12 c0 9 -3 13 -6 13 s-6 -4 -6 -13 z" fill="#7d1a1a" stroke="#d9a441" strokeWidth="1.2" />
        <rect x="132" y="261" width="2" height="6" fill="#d9a441" />
        <rect x="128" y="266" width="10" height="2" fill="#d9a441" />
        {/* velas */}
        <rect x="66" y="252" width="5" height="18" fill="#f7ecd2" />
        <ellipse className="llama" cx="68.5" cy="247" rx="3" ry="5" fill="#fff3c4" />
        <rect x="169" y="252" width="5" height="18" fill="#f7ecd2" />
        <ellipse className="llama" cx="171.5" cy="247" rx="3" ry="5" fill="#fff3c4" />
      </g>

      {/* Hojas de la puerta (queda una rendija de luz en el medio) */}
      <g className="hoja hoja-izq">
        <rect x="40" y="50" width="79" height="330" fill="#262c4b" />
        <path d="M60 50V380M80 50V380M100 50V380" stroke="#1b2039" strokeWidth="2" />
        <circle cx="108" cy="215" r="4" fill="#c9a24d" />
      </g>
      <g className="hoja hoja-der">
        <rect x="121" y="50" width="79" height="330" fill="#262c4b" />
        <path d="M141 50V380M161 50V380M181 50V380" stroke="#1b2039" strokeWidth="2" />
        <circle cx="132" cy="215" r="4" fill="#c9a24d" />
      </g>

      {/* Marco y umbral */}
      <g fill="#39426b">
        <rect x="20" y="30" width="200" height="20" />
        <rect x="20" y="30" width="20" height="350" />
        <rect x="200" y="30" width="20" height="350" />
        <rect x="10" y="380" width="220" height="10" />
      </g>

      {/* La sangre: dintel y los dos postes */}
      <g fill="none" stroke="#c2372d" strokeWidth="7" strokeLinecap="round">
        <path
          className={marcar ? "marca" : ""}
          style={{ animationDelay: "0.5s" }}
          pathLength="1"
          d="M16 40 C 80 34, 160 46, 224 38"
        />
        <path
          className={marcar ? "marca" : ""}
          style={{ animationDelay: "1.7s" }}
          pathLength="1"
          d="M30 54 C 27 130, 33 220, 29 372"
        />
        <path
          className={marcar ? "marca" : ""}
          style={{ animationDelay: "2.2s" }}
          pathLength="1"
          d="M210 54 C 214 130, 207 220, 211 372"
        />
      </g>
    </svg>
  );
}
