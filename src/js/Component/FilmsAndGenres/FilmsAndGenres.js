import React from 'react';
import s from './FilmsAndGenres.scss';
import { Films } from './Films/Films';
import { Genres } from './Genres/Genres';

//Этот компонент отрисовывает список фильмов и жанров, больше ничего не делает. Если бы нам приходили данные с сервера
//о фильмах и жанрах, то мы могли бы сделать эту компоненту контейнерной, и через нее снабжать пропсами дочерние копоненты

export const FilmsAndGenres = (props) => {
  return (
    <div className={`${s['title']} center fixed-container`}>
      <h3 className={s['new-films']}>🔥 Новинки</h3>
      <Films/>
      <h3 className={s['genre']}>Жанры</h3>
      <Genres/>
    </div>
  );
};