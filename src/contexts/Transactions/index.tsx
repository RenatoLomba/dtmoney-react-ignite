import { createContext, FC, useEffect, useState } from 'react';
import { api } from '../../services/api';
import { createFormattedTransaction } from '../../utils/createFormattedTransaction';
import {
  GetTransactionsReponse,
  PostTransactionResponse,
  Transaction,
  TransactionInput,
  TransactionsContextData,
} from './types';

const TransactionsContext = createContext({} as TransactionsContextData);

const TransactionsProvider: FC = ({ children }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function createTransaction(transaction: TransactionInput) {
    const { data } = await api.post<PostTransactionResponse>(
      '/transactions',
      transaction,
    );

    const newTransaction: Transaction = createFormattedTransaction(
      data.transaction,
    );

    setTransactions([...transactions, newTransaction]);
  }

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await api.get<GetTransactionsReponse>('transactions');

      const newTransactions = data.transactions.map((d) =>
        createFormattedTransaction(d),
      );

      setTransactions(newTransactions);
    };

    fetchData();
  }, [setTransactions]);

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
};

export { TransactionsContext, TransactionsProvider };
