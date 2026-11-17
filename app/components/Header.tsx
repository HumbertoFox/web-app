import styles from "./Header.module.css";
import Button from "./Button";
import { BRAND, WHATSAPP } from "../data";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="#" className={styles.logo}>{BRAND}</a>
        <ul className={styles.links}>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#como-funciona">Como funciona</a></li>
          <li><a href="#cursos">Cursos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
        <Button href={WHATSAPP} variant="green" className={styles.navCta}>Pedir orçamento</Button>
      </nav>
    </header>
  );
}
