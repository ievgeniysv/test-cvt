import 'core-js';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './js/Container/App/App';
import './css/reset.css'; //сбрасываем стили
import './css/fonts.css'; // подключаем шрфиты
import { Provider } from 'react-redux';
import {store} from './js/redux/Store/Store';

ReactDOM.render(
  <BrowserRouter>
    <Provider  store={store}>
      <App/>
    </Provider>
  </BrowserRouter>,
  document.querySelector('.app')
);


