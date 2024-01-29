import Container from "./components/Container";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Arsenio" />
        <meta name="description" content="Personal Portfolio" />
        <meta
          name="keywords"
          content="portfolio, nextjs, typescript, arsenio, kimani"
        />
        <meta name="robots" content="index, nofollow" />
        <meta name="googlebot" content="index, nofollow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Arsenios Portfolio" />
        <meta property="og:description" content="Personal Portfolio" />
        <meta property="og:url" content="https://kimani.vercel.app/" />
        <meta property="og:site_name" content="Kimani Portfolio" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Kimani Portfolio" />
        <meta name="twitter:description" content="Personal Portfolio" />
        <meta name="twitter:url" content="https://kimani.vercel.app/" />
        <meta name="twitter:site" content="@arsenio_kimani" />
        <meta name="twitter:creator" content="@arsenio_kimani" />
        <meta
          property="og:image"
          content="https://photos.app.goo.gl/pyWBJMe62AY3nktM9"
        />
        <meta
          name="twitter:image"
          content="https://photos.app.goo.gl/pyWBJMe62AY3nktM9"
        />
      </Head>
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
