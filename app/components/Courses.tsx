import styles from "./Courses.module.css";
import shared from "./shared.module.css";
import Button from "./Button";
import { courses, WHATSAPP } from "../data";

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" className={styles.check} aria-hidden="true">
      <path d="M4 10.5l4 4 8-9" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Courses() {
  return (
    <section id="cursos" className={`${shared.wrap} ${shared.section}`}>
      <h2 className={shared.h2}>Aprenda reparo de placas com quem trabalha nelas todos os dias</h2>
      <div className={styles.courses}>
        {courses.map((c) => (
          <article key={c.level} className={`${styles.course} ${c.featured ? styles.courseFeatured : ""}`}>
            <span className={styles.level}>{c.level}</span>
            <h3>{c.name}</h3>
            <p>{c.desc}</p>
            <ul className={styles.list}>
              {c.items.map((it) => (
                <li key={it}>
                  <CheckIcon />
                  {it}
                </li>
              ))}
            </ul>
            <Button href={WHATSAPP} variant={c.featured ? "gold" : "green"} className={styles.cta}>
              Ver próximas turmas
            </Button>
          </article>
        ))}
      </div>
    </section>
  );
}
