import styles from "./Header.module.css";

export function Header({ scrollToSection }) {
  return (
    <div className={styles.paiSupremo}>
      <div className={styles.paiHeader}>
        <h1 className={styles.nome}>Otávio Vale</h1>
        <div className={styles.filhoHeader}>
          <a href="#" onClick={() => scrollToSection("sobre")}><h1 className={styles.sobreHeader}>Sobre Mim</h1></a>
          <a href="#" onClick={() => scrollToSection("habi")}><h1 className={styles.habHeader}>Habilidades</h1></a>
          <a href="#" onClick={() => scrollToSection("proje")}><h1 className={styles.proHeader}>Projetos</h1></a>
          <a href="#" onClick={() => scrollToSection("experi")}><h1 className={styles.expHeader}>Experiência</h1></a>
        </div>
      </div>
    </div>
  );
}
