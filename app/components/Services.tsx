import styles from "./Services.module.css";
import shared from "./shared.module.css";
import { services } from "../data";

export default function Services() {
  return (
    <section id="servicos" className={`${shared.wrap} ${shared.section}`}>
      <h2 className={shared.h2}>O que consertamos na bancada</h2>
      <div className={styles.services}>
        {services.map((s) => (
          <article key={s.t} className={`${styles.card} ${s.big ? styles.cardBig : ""}`}>
            <h3>{s.t}</h3>
            <p>{s.d}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
