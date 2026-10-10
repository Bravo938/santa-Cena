import { useState } from "react";

const CHURCH_NAME = "Ríos de Vida";
const CHURCH_INSTAGRAM = "https://www.instagram.com/riosdevidamonteros/";
const DEV_INSTAGRAM = "https://www.instagram.com/elroisystems/";

// Poné el logo en /public/logo-rios-de-vida.png (o cambiá esta ruta)
const LOGO_SRC = "/logordv.png";

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  const [logoRoto, setLogoRoto] = useState(false);

  return (
    <footer className="border-t border-white/10 bg-noche">
      <div className="mx-auto w-full max-w-5xl px-6 py-12 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            {!logoRoto && (
              <img
                src={LOGO_SRC}
                alt={`Logo de ${CHURCH_NAME}`}
                className="h-14 w-auto"
                onError={() => setLogoRoto(true)}
              />
            )}
            <div>
              <p className="font-display text-2xl">{CHURCH_NAME}</p>
              <p className="text-sm text-bruma">Montero, Tucumán</p>
            </div>
          </div>

          <a
            href={CHURCH_INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-3 self-start rounded-full border border-white/15 px-5 py-2 text-ceniza transition hover:border-lampara hover:text-lampara md:self-auto"
          >
            <InstagramIcon />
            <span>@riosdevidamonteros</span>
          </a>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-bruma md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {CHURCH_NAME}. Todos los derechos
            reservados.
          </p>
          <p className="text-xs text-bruma/60">
            Desarrollado por{" "}
            <a
              href={DEV_INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-bruma/30 underline-offset-4 transition hover:text-ceniza hover:decoration-ceniza"
            >
              @elroisystems
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
