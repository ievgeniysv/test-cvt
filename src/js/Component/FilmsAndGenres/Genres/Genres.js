import React from 'react';
import s from './Genres.scss';
import comedy from 'pictures/comedy';
import drama from 'pictures/drama';
import fantasy from 'pictures/fantasy';
import horror from 'pictures/horror';

//Тут могли бы отрисовывать список из дочерних компонет, снабжая их необходимыми пропсами и получать список жанров, но
//наше приложение статично и тут опять же я не дробил на подкомпоненты, оставил, как есть.
export const Genres = (props) => {
  return (
    <div className={s['genre-container']}>
      <a href="#" className={`${s['genre-item']}`}>
        <img src={comedy} alt="" className={s['genre-img']}/>
        <p className={s['genre-name']}>
          Комедии
        </p>
        <div className={`${s['gradient-container']} ${s['comedy']}`}>
        </div>
      </a>
      <a href="#" className={`${s['genre-item']}`}>
        <img src={drama} alt="" className={s['genre-img']}/>
        <p className={s['genre-name']}>
          Драмы
        </p>
        <div className={`${s['gradient-container']} ${s['drama']}`}> </div>
      </a>
      <a href="#" className={`${s['genre-item']}`}>
        <img src={fantasy} alt="" className={s['genre-img']}/>
        <p className={s['genre-name']}>
          Фантастика
        </p>
        <div className={`${s['gradient-container']} ${s['fantasy']}`}> </div>
      </a>
      <a href="#" className={`${s['genre-item']}`}>
        <img src={horror} alt="" className={s['genre-img']}/>
        <p className={s['genre-name']}>
          Ужасы
        </p>
        <div className={`${s['gradient-container']} ${s['horror']}`}> </div>
      </a>
    </div>
  );
};