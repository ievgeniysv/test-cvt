import React, { useEffect } from 'react';
import s from './Header.scss';
import logoImg from 'pictures/logo.svg';
import { useForm } from 'react-hook-form/dist/react-hook-form.ie11'

const {useState} = require('react');

export const Header = ({showPopup, isLogin, userName, logout, setUser}) => {

  //Для реализации фукционала смены имени исопльзовал локльный стейт и хуки.
  const [name, setName] = useState();
  const [isActiveNameInput, toggleIsActiveNameInput] = useState(false);
 //Этим хуком устанавливаем стейт, так что при нажатии на имя оно подставляется в инпут.
  useEffect(() => {
    setName(userName);
  }, [userName]);

  const handleNameChange = (e)=> {
    setName(e.target.value)
  }

  const handleNameClick = () => {
    toggleIsActiveNameInput(!isActiveNameInput);
  }

  //При снятии фокуса обрезаем пробелы, и если кроме них ничего не было, или была пустая строка, то разлогиниваем
  // пользователя, иначе устанавливаем в качестве имени отредактированное имя.
  const handleInputBlur = ()=> {
    toggleIsActiveNameInput(!isActiveNameInput);
    if(name.trim()) {
      setUser(name);
    } else {
      logout();
    }
  }

  // Для работы с формой поиска, использвум библиотеку react-hook-form, минимальный функционал, просто собираем данные
  //из формы и выводим их в консоль. Если бы было куда отправить, то отправлили бы))
  const {register, reset, handleSubmit} = useForm();
  const onSubmit = data => {
    console.log(data);
    reset();
  }

  //Показываем форму авторизации
  const handleLoginBtnClick = () => {
    showPopup(true);
  }
 //Разлогиниваем пользователя
  const handleLogoutBtnClick = () => {
    logout();
  }

  return (
    <>
      <header className={`${s['header']} center`}>

        <h1>
          <a href="#" className={s['logo']}>
            <img src={logoImg} alt="" className="logo-img"/>
            <span className={s['logo-link']}>Видеосервис</span>
          </a>
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} action="#" className={s['search']}>
          <input ref={register} name="search" id="search-field" placeholder="Поиск..." type="text"
                 className={s['search-input']}/>
          <button className={s['search-submit']}>Найти</button>
        </form>

        {
          isLogin
            ?
            <div className={s['login-container']}>
              {
                isActiveNameInput
                  ?
                  <input
                    value={name}
                    onChange={handleNameChange}
                    autoFocus={true}
                    onBlur={handleInputBlur}
                    className={s['user-name-input']}
                    type="text"
                  />
                  :
                  <p
                    onClick={handleNameClick}
                    className={s['user-name']}
                  >{userName}</p>
              }
              <button
                onClick={handleLogoutBtnClick}
                className={s['logout']}>
                Выйти
              </button>
            </div>
            :
            <button
              onClick={handleLoginBtnClick}
              className={s['login']}>Войти
            </button>
        }
      </header>
    </>
  );
};