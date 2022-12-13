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
            <h1>R$ 0</h1>
            <span>,00 /mês</span>
          </div>
          <div className="item2">
            <header className="planoBasicoHeader">Básico</header>
            <h1>R$ 29</h1>
            <span>,00 /mês</span>
          </div>
          <div className="item3">
            <header className="planoProfissionalHeader">Profissional</header>
            <h1>R$ 59</h1>
            <span>,00 /mês</span>
          </div>
        </div>
      </div>
    </>
  );
}
