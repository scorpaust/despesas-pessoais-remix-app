import { FaTrophy, FaHandshake } from 'react-icons/fa';

import PricingPlan from '~/components/marketing/PricingPlan';

const PRICING_PLANS = [
  {
    id: 'p1',
    title: 'Básico',
    price: 'Gratuito',
    perks: ['1 Utilizador', 'Até 100 Despesas/Ano', 'Análises Básicas'],
    icon: FaHandshake
  },
  {
    id: 'p2',
    title: 'Pro',
    price: '4.99 €/mês',
    perks: ['Utilizadores Ilimitados', 'Despesas Ilimitadas/Ano', 'Análises Detalhadas'],
    icon: FaTrophy
  },
];

export default function PricingPage() {
  return (
    <main id="pricing">
      <h2>Excelente Produto, Preços Acessíveis</h2>
      <ol id="pricing-plans">
        {PRICING_PLANS.map((plan) => (
          <li key={plan.id} className="plan">
            <PricingPlan
              title={plan.title}
              price={plan.price}
              perks={plan.perks}
              icon={plan.icon}
            />
          </li>
        ))}
      </ol>
    </main>
  );
}

export function meta() {
  return {
    title: "Planos de Pagamento",
    description: "Consulte aqui os nossos planos de pagamento."
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