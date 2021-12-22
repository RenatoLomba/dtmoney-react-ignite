import { useContext } from 'react';
import { TransactionsContext } from '../contexts/Transactions';

function useTransactions() {
  return useContext(TransactionsContext);
}

export { useTransactions };
