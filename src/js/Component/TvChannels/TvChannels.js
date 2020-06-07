import React from 'react';
import s from './TvChannels.scss';
import firstChannel from 'pictures/first-channel.svg';
import twoByTwo from 'pictures/two-by-two.svg';
import rbc from 'pictures/rbc.svg';
import aMedia from 'pictures/a-media.svg';
import { Scrollbars } from 'react-custom-scrollbars';

//Кастомный скроллбар реализовал с помощью библиотеки react-custom-scrollbars. Есть она скрывает полосы прокрутки
//браузера и добаляет div вместо них, так что решение получается кроссбраузерным, насоклько я заню средствами css
//реализовать это в полной мере невозможно на данный момент (есть свойства стилизации у webkit браузеров, и очень скудный набор у FF)
const CustomScrollbars = props => (
  <Scrollbars
    renderThumbVertical={(props) => {
      return <div {...props} className={s['thumb-vertical']}/>
    }}
    renderTrackVertical={(props) => {
      return <div {...props} className={s['track-vertical']}/>
    }}
    {...props}
  />
);

//Здесь отрисовывается список каналов, опять же, контент статичен, по-этому оставил так, если бы данные приходили с сервера
//то естественно разбил бы на подкомпоненты и собирал их в цикле снабжая необходмой информацией.

export const TvChannels = (props) => {
  return (
    <div className={`${s['channels-container']} center`}>

      <div className={s['channels']}>
        <CustomScrollbars>

          <div className={s['channel-container']}>
            <div className={s['channel']}>
              <div className={s['chanel-logo-container']}>
                <img className={s['channel-logo']} src={firstChannel} alt=""/>
              </div>
              <div className={s['programs']}>
                <h2 className={s['program-title']}>Первый канал</h2>
                <p className={`${s['program']} ${s['current-program']}`}>
                  <span className={s['program-time']}>13:00</span>
                  <span className={s['program-name']}>Новости с субтитрами</span>
                </p>
                <p className={s['program']}>
                  <span className={s['program-time']}>14:00</span>
                  <span className={s['program-name']}>Давай поженимся</span>
                </p>
                <p className={s['program']}>
                  <span className={s['program-time']}>15:00</span>
                  <span className={s['program-name']}>Другие новости</span>
                </p>
              </div>
            </div>
          </div>

          <div className={s['channel-container']}>
            <div className={s['channel']}>
              <div className={s['chanel-logo-container']}>
                <img className={s['channel-logo']} src={twoByTwo} alt=""/>
              </div>
              <div className={s['programs']}>
                <h2 className={s['program-title']}>2x2</h2>
                <p className={`${s['program']} ${s['current-program']}`}>
                  <span className={s['program-time']}>13:00</span>
                  <span className={s['program-name']}>МУЛЬТ ТВ. Сезон 4, 7 серия</span>
                </p>
                <p className={s['program']}>
                  <span className={s['program-time']}>14:00</span>
                  <span className={s['program-name']}>ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия</span>
                </p>
                <p className={s['program']}>
                  <span className={s['program-time']}>15:00</span>
                  <span className={s['program-name']}>БУРДАШЕВ. Сезон 1, 20 серия</span>
                </p>
              </div>
            </div>
          </div>

          <div className={s['channel-container']}>
            <div className={s['channel']}>
              <div className={s['chanel-logo-container']}>
                <img className={s['channel-logo']} src={rbc} alt=""/>
              </div>
              <div className={s['programs']}>
                <h2 className={s['program-title']}>РБК</h2>
                <p className={`${s['program']} ${s['current-program']}`}>
                  <span className={s['program-time']}>13:00</span>
                  <span className={s['program-name']}>ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС</span>
                </p>
                <p className={s['program']}>
                  <span className={s['program-time']}>14:00</span>
                  <span className={s['program-name']}>ДЕНЬ. Главные темы</span>
                </p>
                <p className={s['program']}>
                  <span className={s['program-time']}>15:00</span>
                  <span className={s['program-name']}>Главные новости</span>
                </p>
              </div>
            </div>
          </div>

          <div className={s['channel-container']}>
            <div className={s['channel']}>
              <div className={s['chanel-logo-container']}>
                <img className={s['channel-logo']} src={aMedia} alt=""/>
              </div>
              <div className={s['programs']}>
                <h2 className={s['program-title']}>AMEDIA PREMIUM</h2>
                <p className={`${s['program']} ${s['current-program']}`}>
                  <span className={s['program-time']}>13:00</span>
                  <span className={s['program-name']}>Клиент всегда мёртв</span>
                </p>
                <p className={s['program']}>
                  <span className={s['program-time']}>14:00</span>
                  <span className={s['program-name']}>Голодные игры: Сойка-пересмешница. Часть I</span>
                </p>
                <p className={s['program']}>
                  <span className={s['program-time']}>15:00</span>
                  <span className={s['program-name']}>Секс в большом городе</span>
                </p>
              </div>
            </div>
          </div>

          <div className={s['channel-container']}>
            <div className={s['channel']}>
              <div className={s['chanel-logo-container']}>
                <img className={s['channel-logo']} src={firstChannel} alt=""/>
              </div>
              <div className={s['programs']}>
                <h2 className={s['program-title']}>Первый канал</h2>
                <p className={`${s['program']} ${s['current-program']}`}>
                  <span className={s['program-time']}>13:00</span>
                  <span className={s['program-name']}>Новости с субтитрами</span>
                </p>
                <p className={s['program']}>
                  <span className={s['program-time']}>14:00</span>
                  <span className={s['program-name']}>Давай поженимся</span>
                </p>
                <p className={s['program']}>
                  <span className={s['program-time']}>15:00</span>
                  <span className={s['program-name']}>Другие новости</span>
                </p>
              </div>
            </div>
          </div>

          <div className={s['channel-container']}>
            <div className={s['channel']}>
              <div className={s['chanel-logo-container']}>
                <img className={s['channel-logo']} src={twoByTwo} alt=""/>
              </div>
              <div className={s['programs']}>
                <h2 className={s['program-title']}>2x2</h2>
                <p className={`${s['program']} ${s['current-program']}`}>
                  <span className={s['program-time']}>13:00</span>
                  <span className={s['program-name']}>МУЛЬТ ТВ. Сезон 4, 7 серия</span>
                </p>
                <p className={s['program']}>
                  <span className={s['program-time']}>14:00</span>
                  <span className={s['program-name']}>ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия</span>
                </p>
                <p className={s['program']}>
                  <span className={s['program-time']}>15:00</span>
                  <span className={s['program-name']}>БУРДАШЕВ. Сезон 1, 20 серия</span>
                </p>
              </div>
            </div>
          </div>

          <div className={s['channel-container']}>
            <div className={s['channel']}>
              <div className={s['chanel-logo-container']}>
                <img className={s['channel-logo']} src={rbc} alt=""/>
              </div>
              <div className={s['programs']}>
                <h2 className={s['program-title']}>РБК</h2>
                <p className={`${s['program']} ${s['current-program']}`}>
                  <span className={s['program-time']}>13:00</span>
                  <span className={s['program-name']}>ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС</span>
                </p>
                <p className={s['program']}>
                  <span className={s['program-time']}>14:00</span>
                  <span className={s['program-name']}>ДЕНЬ. Главные темы</span>
                </p>
                <p className={s['program']}>
                  <span className={s['program-time']}>15:00</span>
                  <span className={s['program-name']}>Главные новости</span>
                </p>
              </div>
            </div>
          </div>

          <div className={s['channel-container']}>
            <div className={s['channel']}>
              <div className={s['chanel-logo-container']}>
                <img className={s['channel-logo']} src={aMedia} alt=""/>
              </div>
              <div className={s['programs']}>
                <h2 className={s['program-title']}>AMEDIA PREMIUM</h2>
                <p className={`${s['program']} ${s['current-program']}`}>
                  <span className={s['program-time']}>13:00</span>
                  <span className={s['program-name']}>Клиент всегда мёртв</span>
                </p>
                <p className={s['program']}>
                  <span className={s['program-time']}>14:00</span>
                  <span className={s['program-name']}>Голодные игры: Сойка-пересмешница. Часть I</span>
                </p>
                <p className={s['program']}>
                  <span className={s['program-time']}>15:00</span>
                  <span className={s['program-name']}>Секс в большом городе</span>
                </p>
              </div>
            </div>
          </div>
        </CustomScrollbars>

      </div>
    </div>
  );
};