import React from 'react';
import s from './Navigation.scss';
import { NavLink } from 'react-router-dom';

//Для навигации и переключения вкладок сделал отдельный компонент, такой подход удобен и позволяет без особых проблем
//масштабировать приложение.
export const Navigation = (props) => {
  return (
    <h2 className={s['nav-container']}>
      <NavLink className={s['nav-item']} activeClassName={s['nav-item--active']} to={'/films'}>
        Фильмы
      </NavLink>
      <NavLink className={s['nav-item']} activeClassName={s['nav-item--active']} to={'/tvchannels'}>
        Телеканалы
      </NavLink>
    </h2>
  );
};