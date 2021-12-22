import { useState } from 'react';
import Modal from 'react-modal';

import { Dashboard } from './components/Dashboard/intex';
import { Header } from './components/Header/intex';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './contexts/Transactions';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  const openNewTransactionModal = () => setIsNewTransactionModalOpen(true);
  const closeNewTransactionModal = () => setIsNewTransactionModalOpen(false);

  return (
    <TransactionsProvider>
      <Header onButtonClick={openNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={closeNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}

export { App };
