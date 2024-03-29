import Container from "./components/Container";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import dotenv from "dotenv";

dotenv.config();

export default function Home() {
  return (
    <main>
      <Navigation />
      <Container>
        <Hero />
        <Services />
        <Contact />
      </Container>
      <Footer />
    </main>
  );
}
