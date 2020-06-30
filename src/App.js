import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeHeader } from './redux/appActions'
import { MuiThemeProvider } from '@material-ui/core/styles';

import AppBanner from './components/AppBanner/AppBanner';
import AppRoutes from './AppRoutes';
import AppHeader from './components/AppHeader/AppHeader';
import AppTheme from './AppTheme';
import Footer from './components/Footer/Footer';
import './App.scss';
import './assets/styles/texts.scss';
import './assets/styles/animations.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isSidenavOpened: false };
  }

  render() {
    const viewPortHeight = window.innerHeight;

    return (
      <MuiThemeProvider theme={AppTheme}>
        <div className="App">
          <AppHeader behavior = {{changeColorOnScroll: { height: viewPortHeight * 0.10, color: 'white'}}}/>
          <AppBanner/>
          <AppRoutes/>
          <Footer/>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return { isSidenavOpened: state.isSidenavOpened }
}
const mapDispatchToProps = {changeHeader}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

