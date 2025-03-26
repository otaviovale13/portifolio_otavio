import styles from "./Footer.module.css";

export function Footer() {
  return (
    <div className={styles.paiFooter}>
      <div className={styles.nomesFooter}>
        <h1 className={styles.desFooter}>Desenvolvido por Otávio Vale</h1>
        <h1 className={styles.otaFooter}>otaviovale13@gmail.com</h1>
      </div>
      <div className={styles.iconsFooter}>
        <a href="https://www.linkedin.com/in/ot%C3%A1vio-augusto-palermo-do-vale-161b32351/" target="_black"><i class="bi bi-linkedin"></i></a>
        <a href="https://github.com/otaviovale13" target="_black"><i class="bi bi-github"></i></a>
        <a href="mailto:otaviovale13@gmail.com" target="_black"><i class="bi bi-envelope"></i></a>
      </div>
    </div>
  );
}
