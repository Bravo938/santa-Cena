/** Cita bíblica parafraseada. El borde lateral indica "texto bíblico". */
export default function Verso({ cita, children }) {
  return (
    <figure className="my-10 border-l-2 border-sangre pl-6">
      <blockquote className="font-display text-2xl font-light italic leading-snug md:text-3xl">
        {children}
      </blockquote>
      <figcaption className="mt-3 text-sm text-bruma">{cita}</figcaption>
    </figure>
  );
}
