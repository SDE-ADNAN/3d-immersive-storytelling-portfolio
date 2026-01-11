import Hero from '../components/sections/Hero';
import Identity from '../components/sections/Identity';
import Experience from '../components/sections/Experience';
import Thinking from '../components/sections/Thinking';
import Impact from '../components/sections/Impact';
import Contact from '../components/sections/Contact';
import Footer from '../components/sections/Footer';

export default function Page() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Identity />
      <Experience />
      <Thinking />
      <Impact />
      <Contact />
      <Footer />
    </main>
  );
}
