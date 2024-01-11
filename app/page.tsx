import { Button } from "@nextui-org/react";
import Container from "./components/Container";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Container>
        <Navigation />
        <Hero />
        <Services />
        <Contact />
        <Button color="primary">Click me</Button>
      </Container>
    </main>
  );
}
