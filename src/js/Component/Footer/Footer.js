import React from 'react';
import s from './Footer.scss';
import footerLogo from '../../../assets/img/footer-logo.svg';

export const Footer = (props) => {
  return (
   <footer className={s['footer']}>
    <div className={`${s['footer-container']} center fixed-container`}>
      <img src={footerLogo} alt="" className={s['footer-logo']}/>
      <div className={s['footer-info']}>
        <p className="address">
          426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса, 246 (ДК «Металлург»)
        </p>
        <a className={s['phones']} href="tel:+7(3412)93-88-61" aria-label="tel-link">+7 (3412) 93-88-61, 43-29-29</a>
        <a className={s['site-address']} href="https://htc-cs.ru">htc-cs.ru</a>
      </div>
    </div>
   </footer>
  );
};