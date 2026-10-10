const tiempos = [
  {
    titulo: "Recordamos",
    texto: "Miramos hacia atrás, a la cruz, donde el Cordero dio su vida.",
    borde: "border-sangre-clara",
  },
  {
    titulo: "Anunciamos",
    texto: "Hoy, al comer el pan y beber la copa, proclamamos su muerte.",
    borde: "border-bruma",
  },
  {
    titulo: "Esperamos",
    texto: "Miramos hacia adelante, a la mesa donde volveremos a comer con Él.",
    borde: "border-lampara",
  },
];

export default function Promesa() {
  return (
    <section className="bg-medianoche py-24 md:py-32">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 md:px-10">
        <h2 className="max-w-2xl text-3xl leading-[1.1] sm:text-4xl md:text-5xl">
          Y en esa misma noche dejó una promesa
        </h2>

        <div className="mt-8 max-w-xl space-y-5 text-base leading-7 text-ceniza/90 sm:mt-10 sm:text-lg sm:leading-8">
          <p>
            Jesús dijo a sus discípulos que no volvería a beber del fruto de la
            vid hasta el día en que lo bebiera con ellos de nuevo, en el reino de
            su Padre (Mateo 26:29; Lucas 22:15-18).
          </p>
          <p>
            Es decir: esta cena no termina en el pasado. El Apocalipsis llama a
            ese día la cena de las bodas del Cordero, y dice que son dichosos los
            invitados (Apocalipsis 19:9). El Cordero que marcó nuestra puerta es
            el mismo que nos espera en esa mesa.
          </p>
        </div>

        <ul className="mt-14 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {tiempos.map((t) => (
            <li key={t.titulo} className={`border-t-2 pt-5 ${t.borde}`}>
              <h3 className="text-2xl">{t.titulo}</h3>
              <p className="mt-3 leading-7 text-bruma">{t.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
