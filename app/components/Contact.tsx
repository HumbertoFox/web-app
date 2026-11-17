import styles from "./Contact.module.css";
import Button from "./Button";
import { BRAND, COPYRIGHT_YEAR, WHATSAPP } from "../data";

export default function Contact() {
  return (
    <section id="contato" className={styles.contact}>
      <div className={styles.contactGrid}>
        <div>
          <h2>Descreva o defeito e receba um retorno no mesmo dia</h2>
          <Button href={WHATSAPP} variant="gold">Chamar no WhatsApp</Button>
        </div>
        <address className={styles.address}>
          <p>Rua Exemplo, 123, Centro, Recife, PE</p>
          <p>Segunda a sexta, 8h às 18h</p>
          <p>Sábado, 8h às 12h</p>
          <p>(81) 99999-9999</p>
        </address>
      </div>
      <p className={styles.copy}>© {COPYRIGHT_YEAR} {BRAND}</p>
    </section>
  );
}
