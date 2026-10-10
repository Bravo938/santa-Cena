import Verso from "./Verso";

export default function Pascua() {
  return (
    <section id="pascua" className="border-t border-white/10 py-24 md:py-32">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 md:px-10">
        <h2 className="max-w-2xl text-3xl leading-[1.1] sm:text-4xl md:text-5xl">
          La noche en que la muerte pasó de largo
        </h2>

        <div className="mt-8 max-w-xl space-y-5 text-base leading-7 text-ceniza/90 sm:mt-10 sm:text-lg sm:leading-8">
          <p>
            Antes de la Santa Cena existió la Pascua. En Egipto, el pueblo de
            Dios vivía esclavizado, y Dios anunció una última noche: la muerte
            iba a pasar por cada casa.
          </p>
          <p>
            A cada familia le pidió algo concreto: tomar un cordero sin defecto,
            sacrificarlo y marcar con su sangre los dos postes y el dintel de la
            puerta. Nadie se salvaba por ser mejor que su vecino. Se salvaba la
            casa que tenía la señal.
          </p>
        </div>

        <div className="max-w-xl">
          <Verso cita="Éxodo 12:13 (paráfrasis)">
            La sangre en las puertas será la señal. Cuando yo la vea, pasaré de
            largo y la muerte no tocará esa casa.
          </Verso>
        </div>

        <p className="max-w-xl text-base leading-7 text-ceniza/90 sm:text-lg sm:leading-8">
          Desde entonces, cada año, el pueblo celebró la Pascua para recordar que
          Dios los había sacado de la muerte y de la esclavitud.
        </p>
      </div>
    </section>
  );
}
