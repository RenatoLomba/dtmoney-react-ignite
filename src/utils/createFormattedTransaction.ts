import { currencyFormatter, dateFormatter } from './formatters';

type TransactionProps = {
  id: string;
  title: string;
  amount: number;
  category: string;
  type: string;
  createdAt: string;
};

function createFormattedTransaction(transaction: TransactionProps) {
  return {
    ...transaction,
    formattedAmount: currencyFormatter.format(transaction.amount),
    formattedCreatedAt: dateFormatter.format(new Date(transaction.createdAt)),
  };
}

export { createFormattedTransaction };
