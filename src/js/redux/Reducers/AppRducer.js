import { appAT } from '../Actions/ActionsTypes';

//Один редьюсер, этого более чем достаточно, для небольшого приложения.

const initialState = {
  isLogin: false,
  userName: '',
  isVisiblePopup: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {

    case appAT.TOGGLE_POPUP_VISIBLE:
      return {
        ...state,
        isVisiblePopup: action.isVisible
      };

    case appAT.SET_USER:
      return {
        ...state,
        userName: action.userName,
        isLogin: true,
      }

    case appAT.LOGOUT:
      return {
        ...state,
        isLogin: false,
        userName: '',
      };

    default:
      return state;
  }
}