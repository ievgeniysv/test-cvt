import { appAT } from '../Actions/ActionsTypes';

//Это отдльный объект для операций, по идее тут должны быть асснихронные операции, но так как у нас их нет, сюда вынес
//работу с локальным хранилищем

export const operations = {
  setUser: (userName) => {
    return (dispatch) => {
      dispatch({
        type: appAT.SET_USER,
        userName,
      });
      localStorage.user = JSON.stringify({userName});
    }
  },
  logout: () => {
    return (dispatch) => {
      dispatch({
        type: appAT.LOGOUT,
      });
     delete localStorage.user;
    }
  }
}