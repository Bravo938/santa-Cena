const filas = [
  {
    egipto: "Un cordero sin defecto, elegido para cada casa.",
    jesus: "Jesús, el Cordero de Dios, sin pecado.",
  },
  {
    egipto: "Su sangre marcaba los postes y el dintel de la puerta.",
    jesus: "Su sangre, derramada en la cruz, nos cubre.",
  },
  {
    egipto: "Donde estaba la señal, la muerte pasó de largo.",
    jesus: "Quien confía en Él es librado de la muerte.",
  },
  {
    egipto: "Un pueblo salió de la esclavitud.",
    jesus: "La humanidad puede volver a Dios.",
  },
];

export default function Cordero() {
  return (
    <section className="bg-medianoche py-24 md:py-32">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 md:px-10">
        <h2 className="max-w-2xl text-3xl leading-[1.1] sm:text-4xl md:text-5xl">
          Ese cordero apuntaba a Jesús
        </h2>

        <div className="mt-8 max-w-xl space-y-5 text-base leading-7 text-ceniza/90 sm:mt-10 sm:text-lg sm:leading-8">
          <p>
            Juan el Bautista lo presentó como el Cordero de Dios que quita el
            pecado del mundo (Juan 1:29). Pablo lo dice sin rodeos: Cristo es
            nuestra Pascua, ya sacrificada (1 Corintios 5:7).
          </p>
          <p>
            Lo que Dios hizo en Egipto con una familia y una puerta, lo hizo en
            la cruz con toda la humanidad.
          </p>
        </div>

        <div className="mt-14">
          <div className="hidden grid-cols-2 gap-10 pb-4 font-display text-xl text-bruma md:grid">
            <p>En Egipto</p>
            <p className="text-lampara">En Jesús</p>
          </div>

          <ul>
            {filas.map((fila) => (
              <li
                key={fila.egipto}
                className="grid gap-4 border-t border-white/10 py-6 md:grid-cols-2 md:gap-10"
              >
                <p className="leading-7 text-bruma">
                  <span className="mb-1 block text-sm text-sangre-clara md:hidden">
                    En Egipto
                  </span>
                  {fila.egipto}
                </p>
                <p className="leading-7 text-ceniza">
                  <span className="mb-1 block text-sm text-lampara md:hidden">
                    En Jesús
                  </span>
                  {fila.jesus}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
