import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="relative bg-white w-full min-h-screen">
      <Nav />
      <section>
        <Hero />
      </section>
      <section>
        <Services />
      </section>
      <Footer />
    </main>
  );
};

export default App;
