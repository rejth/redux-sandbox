import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import App from './components/App';

// создаем redux-store
// redux-store хранит reducer и глобальный state приложения
const store = createStore(reducer);

ReactDOM.render(
  // компонент-обертка Provider подписан на обновление store
  // и позволяет вложенным компонентам читать state
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
