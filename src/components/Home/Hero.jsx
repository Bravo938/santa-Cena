import Door from "./Door";

export default function Hero() {
  return (
    <section className="mx-auto grid min-h-svh w-full max-w-5xl items-center gap-8 px-4 py-16 sm:gap-10 sm:px-6 md:grid-cols-[1.25fr_0.75fr] md:gap-12 md:px-10 md:py-20">
      <div>
        <h1 className="text-4xl leading-[1.05] sm:text-5xl md:text-7xl">
          Una mesa, una puerta marcada y una promesa
        </h1>
        <p className="mt-6 max-w-md text-base leading-7 text-bruma sm:text-lg sm:leading-8 md:mt-8">
          La Santa Cena es más que un recuerdo. Nació en una noche de Pascua,
          apunta a un Cordero y termina en una mesa donde todavía hay lugar.
        </p>
        <a
          href="#pascua"
          className="mt-8 inline-block text-lampara underline decoration-lampara/40 underline-offset-8 transition hover:decoration-lampara sm:mt-10"
        >
          Empezar por Egipto
        </a>
      </div>

      <Door className="mx-auto w-[78vw] max-w-[220px] sm:w-64 md:w-full md:max-w-xs" />
    </section>
  );
}
