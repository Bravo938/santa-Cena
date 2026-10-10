import { useState } from "react";
import Door from "./Door";
import Verso from "./Verso";

export default function Invitacion() {
  const [abierta, setAbierta] = useState(false);

  return (
    <section
      className="relative overflow-hidden py-24 md:py-32"
      style={{
        background:
          "linear-gradient(to bottom, var(--color-medianoche), #2e2230)",
      }}
    >
      {/* Resplandor que aparece cuando se abre la puerta */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 transition-opacity duration-1000 motion-reduce:transition-none ${
          abierta ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "radial-gradient(circle at 50% 60%, rgb(242 189 92 / 0.28), transparent 60%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-5xl items-center gap-10 px-4 sm:gap-12 sm:px-6 md:grid-cols-2 md:gap-14 md:px-10">
        <Door
          abierta={abierta}
          marcar={false}
          className="order-1 mx-auto w-[72vw] max-w-[220px] sm:w-60 md:order-2 md:w-full md:max-w-xs"
        />

        <div className="order-2 md:order-1">
          <h2 className="text-3xl leading-[1.1] sm:text-4xl md:text-5xl">
            Todavía hay lugar en la mesa
          </h2>

          <Verso cita="Apocalipsis 3:20 (paráfrasis)">
            Yo estoy a la puerta y llamo. Si alguien escucha mi voz y abre,
            entraré y cenaremos juntos.
          </Verso>

          <button
            type="button"
            onClick={() => setAbierta((v) => !v)}
            aria-pressed={abierta}
            className="min-h-11 w-full rounded-full bg-lampara px-7 py-3 font-medium text-noche transition hover:brightness-110 active:scale-[0.98] sm:w-auto"
          >
            {abierta ? "Cerrar la puerta" : "Abrir la puerta"}
          </button>

          <p aria-live="polite" className="mt-8 max-w-sm text-base leading-7 text-ceniza/90 sm:text-lg sm:leading-8">
            {abierta
              ? "Hay un lugar para vos. Hoy comemos el pan y bebemos la copa, esperando el día en que Él se siente a la mesa con nosotros."
              : "La puerta está marcada, y Él sigue llamando."}
          </p>
        </div>
      </div>
    </section>
  );
}
