import Verso from "./Verso";

function Pan() {
  return (
    <svg viewBox="0 0 120 80" className="h-24 w-auto" aria-hidden="true">
      <ellipse cx="60" cy="48" rx="50" ry="26" fill="#c68a3e" />
      <ellipse cx="60" cy="42" rx="44" ry="20" fill="#d9a050" />
      <path
        d="M34 38 l12 -8 M54 40 l12 -8 M74 38 l12 -8"
        stroke="#8a5a24"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function Copa() {
  return (
    <svg viewBox="0 0 80 100" className="h-24 w-auto" aria-hidden="true">
      <path d="M16 10 H64 C64 44 52 54 40 54 C28 54 16 44 16 10 Z" fill="#8b1f1a" stroke="#d9a441" strokeWidth="3" />
      <rect x="37" y="54" width="6" height="30" fill="#d9a441" />
      <ellipse cx="40" cy="88" rx="22" ry="6" fill="#d9a441" />
    </svg>
  );
}

export default function Memoria() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 md:px-10">
        <h2 className="max-w-2xl text-3xl leading-[1.1] sm:text-4xl md:text-5xl">
          Jesús nos pidió que no lo olvidáramos
        </h2>

        <div className="mt-8 max-w-xl space-y-5 text-base leading-7 text-ceniza/90 sm:mt-10 sm:text-lg sm:leading-8">
          <p>
            En esa mesa de Pascua, Jesús tomó el pan y la copa y les dio un
            sentido nuevo. El pan es su cuerpo entregado; la copa, el nuevo pacto
            en su sangre (Lucas 22:19-20).
          </p>
        </div>

        <div className="my-12 grid max-w-md grid-cols-1 gap-8 sm:grid-cols-2">
          <figure className="flex flex-col items-start gap-4">
            <Pan />
            <figcaption className="leading-6 text-bruma">Su cuerpo, entregado por nosotros.</figcaption>
          </figure>
          <figure className="flex flex-col items-start gap-4">
            <Copa />
            <figcaption className="leading-6 text-bruma">Su sangre, el nuevo pacto.</figcaption>
          </figure>
        </div>

        <div className="max-w-xl">
          <Verso cita="1 Corintios 11:24-26 (paráfrasis)">
            Háganlo en memoria de mí. Cada vez que coman este pan y beban esta
            copa, anuncian la muerte del Señor hasta que Él vuelva.
          </Verso>
        </div>
      </div>
    </section>
  );
}
