type Transaction = {
  id: string;
  title: string;
  amount: number;
  category: string;
  type: 'deposit' | 'withdraw' | string;
  createdAt: string;
  formattedAmount: string;
  formattedCreatedAt: string;
};

type TransactionInput = {
  title: string;
  amount: number;
  category: string;
  type: string;
};

type GetTransactionsReponse = {
  transactions: Transaction[];
};

type PostTransactionResponse = {
  transaction: Transaction;
};

type TransactionsContextData = {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
};

export type {
  GetTransactionsReponse,
  PostTransactionResponse,
  Transaction,
  TransactionInput,
  TransactionsContextData,
};
