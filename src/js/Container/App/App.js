import React from 'react';
import { Header } from '../../Component/Header/Header';
import { Navigation } from '../../Component/Navigation/Navigation';
import { FilmsAndGenres } from '../../Component/FilmsAndGenres/FilmsAndGenres';
import { Footer } from '../../Component/Footer/Footer';
import { TvChannels } from '../../Component/TvChannels/TvChannels';
import { Popup } from '../../Component/Popup/Popup';
// noinspection ES6CheckImport
import { Redirect, Route } from 'react-router-dom';
import { appAC } from '../../redux/Actions/Actions';
import { connect } from 'react-redux';

export class App extends React.Component {
  constructor(props) {
    super(props);
  }

//При монтировании компоненты проверяем сохранен ли профиль и если сохранен, то устанавливаем его
//Моем сказать, что инициализируем приложение.
  componentDidMount() {
    if ("user" in localStorage) {
      const user = JSON.parse(localStorage.user);
      this.props.setUser(user.userName);
    }
  }

  togglePopup = (isVisible) => {
    this.props.togglePopupVisible(isVisible);
  }

  render() {
    return (
      <>
        <Header
          setUser={this.props.setUser}
          logout={this.props.logout}
          userName={this.props.userName}
          isLogin={this.props.isLogin}
          showPopup={this.togglePopup}
        />
        <Navigation/>
        <Redirect to={"/films"}/> {/*При открытии приложение сразу загружаем компонент FilmsAndGenres*/}
        <Route path="/films" component={FilmsAndGenres}/>
        <Route path="/tvchannels" component={TvChannels}/>
        <Footer/>
        <Popup
          setUser={this.props.setUser}
          isVisiblePopup={this.props.isVisiblePopup}
          hidePopup={this.togglePopup}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isVisiblePopup: state.app.isVisiblePopup,
    isLogin: state.app.isLogin,
    userName: state.app.userName,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    togglePopupVisible: (isVisible) => {
      dispatch(appAC.togglePopupVisible(isVisible));
    },
    setUser: (userName) => {
      dispatch(appAC.setUser(userName));
    },
    logout: () => {
      dispatch(appAC.logout());
    }
  }

}

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);