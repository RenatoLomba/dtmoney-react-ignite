import { useTransactions } from '../../hooks/useTransactions';
import { TransactionsContainer } from './styles';

function Transactions() {
  const { transactions } = useTransactions();

  return (
    <TransactionsContainer>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((t) => (
            <tr key={t.id}>
              <td>{t.title}</td>
              <td className={t.type}>{t.formattedAmount}</td>
              <td>{t.category}</td>
              <td>{t.formattedCreatedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TransactionsContainer>
  );
}

export { Transactions };
