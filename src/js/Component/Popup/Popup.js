import React, { useEffect } from 'react';
import s from './Popup.scss';
import { useForm } from 'react-hook-form/dist/react-hook-form.ie11'


//Модальное окно. раобта с формой реализуется с помощью react-hook-form, настроена простая валидация, текстовые поля
//обязательны для заполнения. После успешной отправки формы записываем данные в ls.
export const Popup = ({isVisiblePopup, hidePopup, setUser}) => {

//отключаем прокрутку при открытом модальном окне, в документации к реакту так и написано, если хотим изменить DOM
  //вручную, то используем хук useEffect
  useEffect(() => {
    if(isVisiblePopup){
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  },[isVisiblePopup]);

  const {register, reset, errors, handleSubmit} = useForm();

  const onSubmit = data => {
    // noinspection JSUnresolvedVariable
    setUser(data.login);
    reset();
    hidePopup(false);
  }

  const handleOverlayClick = (e) => {
    if (e.target.className === s['overlay']) {
      reset();
      hidePopup(false);
    }
  }
  return (
    <div
      onClick={handleOverlayClick}
      style={{display: isVisiblePopup ? 'block' : 'none'}}
      className={s['overlay']}>
      <div className={s['wrapper__popup']}>
        <div className={s['popup']}>
          <h2 className={s['title']}>
            Вход
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            action="#"
            className={s['form']}
          >
            <div className={s['input-container']}>
              {errors.login && <p className={s['error']}>{errors.login.message}</p>}
              <input
                ref={register({
                  required: 'Поля обязательно для заполнения',
                })}
                className={s['input']}
                id="login"
                type="text"
                placeholder="Логин"
                name="login"
              />
            </div>

            <div className={s['input-container']}>
              {errors.password && <p className={s['error']}>{errors.password.message}</p>}
              <input
                ref={register({
                  required: 'Поля обязательно для заполнения',
                })}
                className={s['input']}
                id="password"
                type="password"
                placeholder="Пароль"
                name="password"
              />
            </div>

            <div className={s['checkbox']}>
              <input
                ref={register}
                id="remember-me"
                className={s['input-checkbox']}
                type="checkbox"
                name="remember-me"
              />
              <label className={s['checkbox-label']} htmlFor={'remember-me'}>
              </label>
              <label htmlFor={'remember-me'}>Запонмить</label>
            </div>
            <button className={s['login-btn']}>Войти</button>
          </form>
        </div>
      </div>

    </div>
  )
    ;
};