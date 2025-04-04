import styles from "./App.module.css";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";

function App() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 100; // Ajuste a altura do header
      window.scrollTo({
        top: section.offsetTop - offset, // Ajusta a posição para evitar sobreposição do header
        behavior: "smooth", // Faz a rolagem ser suave
      });
    }
  };

  return (
    <>
      <Header scrollToSection={scrollToSection} />
      <div className={styles.container}>
        <div className={styles.paiMain}>
          <h1 className={styles.oi}>Oi, eu sou o</h1>
          <h1 className={styles.vale}>Otávio Vale</h1>
          <h1 className={styles.front}>Desenvolvedor Front-End</h1>
          <div className={styles.iconsMain}>
            <a
              href="https://www.linkedin.com/in/ot%C3%A1vio-augusto-palermo-do-vale-161b32351/"
              target="_black"
              class="bi-main"
            >
              <i class="bi bi-linkedin"></i>
            </a>
            <a
              href="https://github.com/otaviovale13"
              target="_black"
              class="bi-main"
            >
              <i class="bi bi-github"></i>
            </a>
            <a
              href="mailto:otaviovale13@gmail.com"
              target="_black"
              class="bi-main"
            >
              <i class="bi bi-envelope"></i>
            </a>
          </div>
        </div>
        <img
          className={styles.fotoMinha}
          src="./public/IMG-20241215-WA0007.jpg"
        />
      </div>
      <section
        onClick={() => scrollToSection}
        id="sobre"
        className={styles.sobreMim}
      >
        <h1 className={styles.sobreMimTitulo}>Sobre Mim</h1>
        <p className={styles.sobreMimTexto}>
          Eu sou Otávio Augusto Palermo do Vale, sou estudante do Senac, faço
          curso de Técnico de Informática para Internet, estou estudando
          programação, sou estudioso, focado e dedicado, esperando minha
          primeira oportunidade de emprego, além de saber de programação, já
          estudei Design Gráfico e de Web, agora estou totalmente focado em
          conseguir um emprego como programador por enquanto na área de
          desenvolvedor de Front-End.
        </p>
      </section>
      <section onClick={() => scrollToSection} id="habi" className={styles.skills}>
        <div className={styles.Tecnologias}>
          <h1 className={styles.minhas}>Minhas Tecnologias</h1>
          <div className={styles.skillsMain}>
            <div className={styles.skill}>
              <img
                className={styles.skillImg}
                src="./public/HTML.png"
                alt=""
                srcset=""
              />
              <p className={styles.skillNome}>HTML5</p>
              <div></div>
            </div>
            <div className={styles.skill}>
              <img
                className={styles.skillImg}
                src="./public/CSS.png"
                alt=""
                srcset=""
              />
              <p className={styles.skillNome}>CSS3</p>
            </div>
            <div className={styles.skill}>
              <img
                className={styles.skillImg}
                src="./public/JS.png"
                alt=""
                srcset=""
              />
              <p className={styles.skillNome}>JavaScript</p>
            </div>
            <div className={styles.skill}>
              <img
                className={styles.skillImg}
                src="./public/BOOTSTRAP.png"
                alt=""
                srcset=""
              />
              <p className={styles.skillNome}>Bootstrap</p>
            </div>
            <div className={styles.skill}>
              <img
                className={styles.skillImg}
                src="./public/REACT.png"
                alt=""
                srcset=""
              />
              <p className={styles.skillNome}>React</p>
            </div>
            <div className={styles.skill}>
              <img
                className={styles.skillImg}
                src="./public/ASPNET.png"
                alt=""
                srcset=""
              />
              <p className={styles.skillNome}>ASP.NET</p>
            </div>
            <div className={styles.skill}>
              <img
                className={styles.skillImg}
                src="./public/CSharp.png"
                alt=""
                srcset=""
              />
              <p className={styles.skillNome}>C#</p>
            </div>
            <div className={styles.skill}>
              <img
                className={styles.skillImg}
                src="./public/ASPNET.png"
                alt=""
                srcset=""
              />
              <p className={styles.skillNome}>.NET</p>
            </div>
          </div>
        </div>
        <div className={styles.Tecnologias}>
          <h1 className={styles.minhas}>Minhas Ferramentas</h1>
          <div className={styles.skillsMainTecnologias}>
            <div className={styles.skill}>
              <img
                className={styles.skillImg}
                src="./public/VS2022.png"
                alt=""
                srcset=""
              />
              <p className={styles.skillNome}>VS2022</p>
              <div></div>
            </div>
            <div className={styles.skill}>
              <img
                className={styles.skillImg}
                src="./public/VSCODE.png"
                alt=""
                srcset=""
              />
              <p className={styles.skillNome}>VSCode</p>
            </div>
            <div className={styles.skill}>
              <img
                className={styles.skillImg}
                src="./public/GIT.png"
                alt=""
                srcset=""
              />
              <p className={styles.skillNome}>GIT</p>
            </div>
            <div className={styles.skill}>
              <img
                className={styles.skillImg}
                src="./public/FIGMA.png"
                alt=""
                srcset=""
              />
              <p className={styles.skillNome}>Figma</p>
            </div>
          </div>
        </div>
      </section>
      <section onClick={() => scrollToSection} id="proje" className={styles.projetos}>
        <h1 className={styles.Meus}>Meus Projetos</h1>
        <div className={styles.projetosMain}>
          <div className={styles.projeto}>
            <h2 className={styles.nomeProjeto}>Mix Burguer</h2>
            <div className={styles.ferraentas}>
              <h3 className={styles.ferraenta}>HTML5</h3>
              <h3 className={styles.ferraenta}>CSS3</h3>
              <h3 className={styles.ferraenta}>JS</h3>
            </div>
            <p className={styles.descricao}>
              Um site de uma Hamburgueria de Itupeva
            </p>
            <a
              className={styles.link}
              href="https://otaviovale13.github.io/mix-burguer-front/index.html"
              target="black"
            >
              Ver Projeto
            </a>
          </div>
          <div className={styles.projeto}>
            <h2 className={styles.nomeProjeto}>Mix Burguer - React</h2>
            <div className={styles.ferraentas}>
              <h3 className={styles.ferraenta}>React</h3>
            </div>
            <p>Um site de uma Hamburgueria de Itupeva, agora feito em React</p>
            <a
              className={styles.link}
              href="https://otaviovale13.github.io/mix-burguer-front/index.html"
              target="black"
            >
              Ver Projeto
            </a>
          </div>
          <div className={styles.projeto}>
            <h2 className={styles.nomeProjeto}>Trabalhando em Mais...</h2>
            <p>Próximos projetos a vista...</p>
            <div className={styles.ferraentas}>
              <h3 className={styles.ferraenta}>ASP.NET</h3>
              <h3 className={styles.ferraenta}>Bootstrap</h3>
              <h3 className={styles.ferraenta}>.NET</h3>
              <h3 className={styles.ferraentaC}>C#</h3>
            </div>
          </div>
        </div>
      </section>
      <section onClick={() => scrollToSection} id="experi" className={styles.sobreMim}>
        <h1 className={styles.sobreMimTitulo}>Minha Experiência</h1>
        <p className={styles.sobreMimTexto}>
          Até o momento não tenho experiência profissional, mas estou estudando,
          me dedicando e focando para conseguir minha primeira oportunidade de
          emprego. Como estou estudando no periodo da tarde, estou disponível
          para trabalho no periodo da manhã, entro no curso ás 13h:30m, procuro
          um estágio e um trabalho HomeOffice que seja no periodo de Manhã e que
          posso sair para chegar a tempo no meu curso.
        </p>
      </section>
      <Footer />
    </>
  );
}

export default App;
