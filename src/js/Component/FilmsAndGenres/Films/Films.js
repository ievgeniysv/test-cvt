import React from 'react';
import s from './Films.scss';
import cat from 'pictures/cat';
import batman from 'pictures/batman';
import hollywood from 'pictures/hollywood';
import stripper from 'pictures/stripper';

//Здесь, по идее мы могли бы собирать список фильмов. Сделать каждый фильм отедельным компонентом и отрисовывать его
//на основе пропсов, но т.к. наше приложение по большей части статично, тут я уже ничего не дробил на компоненты.
export const Films = (props) => {
  return (
    <div className={s['films-container']}>
      <div className={s['films-item']}>

        <div className={s["flip-container"]}>
          <div className={s["flipper"]}>
            <div className={s["front"]}>
              <img src={cat} alt="" className={s['film-img']}/>
            </div>
            <div className={s["back"]}>
              <img src={cat} alt="" className={s['film-img-back']}/>
              <p className={s['back-text']}>Фильм повествует о череде событий, произошедших в Голливуде в 1969 году,
                на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое
                место в стремительно меняющемся мире киноиндустрии.
              </p>
            </div>
          </div>
        </div>

        <p className={s['film-title']}>
          <a href={'#'}>Мульт в кино. Выпуск №103. Некогда грустить!</a>
        </p>
      </div>
      <div className={s['films-item']}>
        <div className={s["flip-container"]}>
          <div className={s["flipper"]}>
            <div className={s["front"]}>
              <img src={batman} alt="" className={s['film-img']}/>
            </div>
            <div className={s["back"]}>
              <img src={batman} alt="" className={s['film-img-back']}/>
              <p className={s['back-text']}>Фильм повествует о череде событий, произошедших в Голливуде в 1969 году,
                на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое
                место в стремительно меняющемся мире киноиндустрии.
              </p>
            </div>
          </div>
        </div>
        <p className={s['film-title']}>
          <a href={'#'}>Новый Бэтмен</a>
        </p>
      </div>
      <div className={s['films-item']}>
        <div className={s["flip-container"]}>
          <div className={s["flipper"]}>
            <div className={s["front"]}>
              <img src={hollywood} alt="" className={s['film-img']}/>
            </div>
            <div className={s["back"]}>
              <img src={hollywood} alt="" className={s['film-img-back']}/>
              <p className={s['back-text']}>Фильм повествует о череде событий, произошедших в Голливуде в 1969 году,
                на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое
                место в стремительно меняющемся мире киноиндустрии.
              </p>
            </div>
          </div>
        </div>
        <p className={s['film-title']}>
          <a href={'#'}>Однажды... в Голливуде</a>
        </p>
      </div>
      <div className={s['films-item']}>
        <div className={s["flip-container"]}>
          <div className={s["flipper"]}>
            <div className={s["front"]}>
              <img src={stripper} alt="" className={s['film-img']}/>
            </div>
            <div className={s["back"]}>
              <img src={stripper} alt="" className={s['film-img-back']}/>
              <p className={s['back-text']}>Фильм повествует о череде событий, произошедших в Голливуде в 1969 году,
                на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое
                место в стремительно меняющемся мире киноиндустрии.
              </p>
            </div>
          </div>
        </div>
        <p className={s['film-title']}>
          <a href={'#'}>Стриптизёрши</a>
        </p>
      </div>
    </div>
  );
};