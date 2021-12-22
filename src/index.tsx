import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: '1',
          title: 'Desenvolvimento de site',
          amount: 12000,
          category: 'Venda',
          type: 'deposit',
          createdAt: new Date(),
        },
        {
          id: '2',
          title: 'Hamburguer',
          amount: 59,
          category: 'Alimentação',
          type: 'withdraw',
          createdAt: new Date(),
        },
        {
          id: '3',
          title: 'Aluguel do apartamento',
          amount: 1200,
          category: 'Casa',
          type: 'withdraw',
          createdAt: new Date(),
        },
        {
          id: '4',
          title: 'Computador',
          amount: 5400,
          category: 'Venda',
          type: 'deposit',
          createdAt: new Date(),
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      data.createdAt = new Date();

      return schema.create('transaction', data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
