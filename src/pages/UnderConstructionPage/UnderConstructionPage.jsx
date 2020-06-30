import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeHeader } from '../../redux/appActions';
import { UnderConstructionsConstants } from './UnderConstructionsConstants';

class UnderContructionPage extends Component {
    constructor(props) {
        super(props);
  
        this.state = {
            headerAppearance: {
                headerTitle: UnderConstructionsConstants.TITLE,
                headerSubtitle: UnderConstructionsConstants.SUBTITLE,
                headerBackground: UnderConstructionsConstants.BACKGROUND,
            }
        };
      }
    
      componentDidMount() {
        this.props.changeHeader(this.state.headerAppearance);
      }
    
      render() {
        return (<div></div>)
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
)(UnderContructionPage);