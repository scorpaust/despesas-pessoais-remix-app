import { Link } from '@remix-run/react';
import { FaArrowRight, FaEuroSign, FaChartBar } from 'react-icons/fa';


export default function Index() {
  return (
    <main>
      <section className="marketing-section">
        <header>
          <FaEuroSign />
          <h2>Um Espaço Central de Gestão</h2>
        </header>
        <div className="marketing-content">
          <div className="marketing-image">
            <img src="imgs/gestao_despesas.png" alt="Lista de Despesas." />
          </div>
          <div className="marketing-explanation">
            <p>Gere as tuas despesas num só local.</p>
            <p>
              <Link className="cta" to="/despesas">
                <span>Começa Agora</span>
                <FaArrowRight />
              </Link>
            </p>
          </div>
        </div>
      </section>
      <section className="marketing-section">
        <header>
          <FaChartBar />
          <h2>Análise Detalhada</h2>
        </header>
        <div className="marketing-content">
          <p className='marketing-explanation'>
            Beneficie de uma análise classificada e detalhada para que possa compreender melhor os padrões agregados aos seus gastos.
          </p>
          <div className="marketing-image">
            <img src="imgs/grafico_despesas.png" alt="Demonstração de Gráfico de Barras." />
          </div>
        </div>
      </section>
    </main>
  );
}

export function meta() {
  return {
    title: "Despesas Pessoais - Aplicação Completa",
    description: "Gere aqui todas as tuas despesas"
  }
}

export function headers({ parentHeaders }) {
  return {
      'Cache-Control': parentHeaders.get('Cache-Control')
  }
}

export const handle = {
  disableJS: true
}