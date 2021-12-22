import { SummaryCard, SummaryContainer } from './styles';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';
import { currencyFormatter } from '../../utils/formatters';

function Summary() {
  const { transactions } = useTransactions();

  const { deposits, total, withdraws } = transactions.reduce(
    (ac, transaction) => {
      if (transaction.type === 'deposit') {
        ac.deposits += transaction.amount;
        ac.total += transaction.amount;
      } else if (transaction.type === 'withdraw') {
        ac.withdraws += transaction.amount;
        ac.total -= transaction.amount;
      }

      return ac;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    },
  );

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>{currencyFormatter.format(deposits)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>- {currencyFormatter.format(withdraws)}</strong>
      </SummaryCard>

      <SummaryCard className="highlight">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>{currencyFormatter.format(total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}

export { Summary };
