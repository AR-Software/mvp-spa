import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';


import { changeHeader } from '../../redux/appActions';
import AppSearch from '../../components/AppSearch/AppSearch'
import './AppBanner.scss'

class AppBanner extends Component {
    constructor(props) {
        super(props);

        const bannerStyle = {
          height: '100vh',
          transform: 'translate3d(0,0,0)',
          transition: 'all 200ms ease'
        };

        const scrollDownStyle = {
          transform: 'translate3d(0,0,0)',
          opacity: 1
        }
  
        this.state = {
          bannerStyle,
          scrollDownStyle
        };

        this.translateBanner = this.translateBanner.bind(this);
      }
    
      componentDidMount() {
        window.addEventListener('scroll', this.translateBanner);
      }
    
      componentWillUnmount() {
        window.removeEventListener('scroll', this.translateBanner);
      }
    
      translateBanner() {
        const bannerScrollTop = window.pageYOffset / 7;
        const scrollDownTop = window.pageYOffset/ 2;
        const update = {
            bannerStyle: {
            height: '100vh',
            transform: 'translate3d(0,' + bannerScrollTop + 'px,0)',
            transition: 'all 200ms ease'
          },
          scrollDownStyle: {
            transform: 'translate3d(0,' + -scrollDownTop + 'px,0)',
            opacity: (400 - window.scrollY)/400,
          }
        };

        console.log(scrollDownTop)

        this.setState({...update});
      }
    
      render() {
        const headerTitle = this.props.headerTitle
        const headerSubtitle = this.props.headerSubtitle
    
        return (
            <CSSTransition
                in={true}
                appear={true}
                timeout={500}
                classNames="fade">
                <div className="App-banner" style={{ ...this.state.bannerStyle }}>
                  <div className="background kenburns-top" style={{ backgroundImage: `url(${this.props.headerBackground})`}}></div>
                  <div className="shadow"></div>
                  <div className="Header-text slide-in">
                    <h1 className="title-large">{headerTitle}</h1>
                    <h4 className="subtitle">{headerSubtitle}</h4>
                  </div>
                  <div className="search-container">
                    <AppSearch/>
                  </div>
                </div>
            </CSSTransition>
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
)(AppBanner);