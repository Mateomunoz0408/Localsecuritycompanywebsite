import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Coverage } from "./components/Coverage";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Coverage />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
