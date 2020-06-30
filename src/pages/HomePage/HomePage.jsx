import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeHeader } from '../../redux/appActions';
import { ReduxConstants } from '../../redux/reduxConstants';

import '../../assets/styles/animations.scss';
import '../../assets/styles/texts.scss';
import '../../assets/styles/layout.scss';
import './HomePage.scss';


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    this.props.changeHeader(ReduxConstants.DEFAULT_STATE.headerAppearance);
  }

  render() {
    return (
         <div className="Home-page Page">  
         </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      headerTitle: state.headerAppearance.headerTitle,
      headerSubtitle: state.headerAppearance.headerSubtitle,
      headerBackground: state.headerAppearance.headerBackground
  }
}
const mapDispatchToProps = {changeHeader}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
