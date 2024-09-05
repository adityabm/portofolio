import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Aditya Dewantara Fadillah</title>
        <meta
          name="description"
          content="Learn how to create a responsive website design with our expert tutorials and guides. Get started with HTML, CSS, and JavaScript today!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />

        <Hero />

        <About />
      </main>
    </>
  );
}
