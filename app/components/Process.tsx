import styles from "./Process.module.css";
import shared from "./shared.module.css";
import { steps } from "../data";

export default function Process() {
  return (
    <section id="como-funciona" className={`${styles.process} ${shared.section}`}>
      <div className={shared.wrap}>
        <h2 className={shared.h2}>Do balcão à entrega, em quatro etapas</h2>
        <ol className={styles.steps}>
          {steps.map((s, i) => (
            <li key={s.t} className={styles.step}>
              <span className={styles.stepNum}>Etapa {i + 1}</span>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
