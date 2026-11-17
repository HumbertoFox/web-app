import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import styles from "./page.module.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import Courses from "./components/Courses";
import Contact from "./components/Contact";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--f-display" });
const body = Hanken_Grotesk({ subsets: ["latin"], variable: "--f-body" });

export default function Page() {
  return (
    <div className={`${display.variable} ${body.variable} ${styles.page}`}>
      <Header />
      <Hero />
      <Services />
      <Process />
      <Courses />
      <Contact />
    </div>
  );
}
