import { appAT } from './ActionsTypes';
import { operations } from '../Operations/Operations';

//Здесь находятся action creators

export const appAC = {
  togglePopupVisible(isVisible){
    return {
      type: appAT.TOGGLE_POPUP_VISIBLE,
      isVisible
    };
  },
  setUser(userName){
    return operations.setUser(userName);
  },
  logout(){
    return operations.logout();
  }
}

