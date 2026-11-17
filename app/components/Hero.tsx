import styles from "./Hero.module.css";
import Button from "./Button";
import Board from "./Board";
import { BRAND, WHATSAPP } from "../data";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroGrid}>
        <div>
          <h1 className={styles.heroTitle}>Seu equipamento só é consertado depois do laudo.</h1>
          <p className={styles.heroText}>
            Reparo de PCs, notebooks e placas de vídeo com diagnóstico em bancada, orçamento aprovado por você e garantia por escrito. Também ensinamos a técnica em cursos presenciais.
          </p>
          <div className={styles.actions}>
            <Button href={WHATSAPP} variant="gold">Pedir orçamento no WhatsApp</Button>
            <Button href="#cursos" variant="ghost">Ver cursos</Button>
          </div>
          <dl className={styles.stats}>
            <div><dt>Garantia no serviço</dt><dd>90 dias</dd></div>
            <div><dt>Laudo técnico</dt><dd>Sempre incluso</dd></div>
          </dl>
        </div>
        {/* Quando tiver a logo em public/logo.svg, adicione: logoSrc="/logo.svg" */}
        <Board logoAlt={BRAND} />
      </div>
    </section>
  );
}
