import { Check } from "phosphor-react";
import "./Price.css";

export function Price() {
  return (
    <>
      <div className="geral">
        <div className="cabecalho1">
          <div className="cabecalho2">
            <h1> Conheça nossos planos</h1>
            <span>
              Conheça nossas soluções e escolha o plano ideal para o seu próximo
              projeto
            </span>
          </div>
        </div>

        <div className="container">
          <div className="item1">
            <header className="planoGratisHeader">Grátis</header>

            <div className="valor1">
              <h1>R$ 0</h1>
              <h1 className="decimais1">,00</h1>
              <span className="preco1"> /mês</span>
            </div>
            <p className="informativo1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <div className="conteudo1">
              <ul>
                <li>
                  <Check /> Lorem ipsum dolor sit amet
                </li>
                <li>
                  <Check /> Lorem ipsum dolor sit amet
                </li>
              </ul>
            </div>
            <footer className="footer1">
              <button type="button" className="assinar1">
                ASSINAR
              </button>
            </footer>
          </div>

          <div className="item2">
            <header className="planoBasicoHeader">Básico</header>
            <div className="valor2">
              <h1>R$ 29</h1>
              <h1 className="decimais2">,00</h1>
              <span className="preco2">/mês</span>
            </div>
            <p className="informativo2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="conteudo2">
              <ul>
                <li>
                  <Check /> Lorem ipsum dolor sit amet
                </li>
                <li>
                  <Check /> Lorem ipsum dolor sit amet
                </li>
                <li>
                  <Check /> Lorem ipsum dolor sit amet
                </li>
              </ul>
            </div>

            <footer className="footer2">
              <button type="button" className="assinar2">
                ASSINAR
              </button>
            </footer>
          </div>
          <div className="item3">
            <header className="planoProfissionalHeader">Profissional</header>
            <div className="valor3">
              <h1>R$ 59</h1>
              <h1 className="decimais3">,00</h1>
              <span className="preco3"> /mês</span>
            </div>
            <p className="informativo3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="conteudo3">
              <ul>
                <li>
                  <Check /> Lorem ipsum dolor sit amet
                </li>
                <li>
                  <Check /> Lorem ipsum dolor sit amet
                </li>
                <li>
                  <Check /> Lorem ipsum dolor sit amet
                </li>
                <li>
                  <Check /> Lorem ipsum dolor sit amet
                </li>
              </ul>
            </div>
            <footer className="footer3">
              <button type="button" className="assinar3">
                ASSINAR
              </button>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
