import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

//Собираем редьюсеры и создаем стор, для операци с локальный хранилищем исопльзовал 'redux-thunk'.
//Опять же, можно было бы использовать один редьюсер, но такой подход дает возмоность к масштабирумости и кода в общем-то
//немного..

import { appReducer } from '../Reducers/AppRducer';

const reducers = combineReducers({
  app: appReducer
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));
