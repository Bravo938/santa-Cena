import Hero from "../components/Home/Hero";
import Pascua from "../components/Home/Pascua";
import Cordero from "../components/Home/Cordero";
import Memoria from "../components/Home/Memoria";
import Promesa from "../components/Home/Promesa";
import Invitacion from "../components/Home/Invitacion";
import Footer from "../components/Home/Footer";

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Pascua />
        <Cordero />
        <Memoria />
        <Promesa />
        <Invitacion />
      </main>
      <Footer />
    </>
  );
}
