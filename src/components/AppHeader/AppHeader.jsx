import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import '../../assets/styles/animations.scss'


class AppHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
      appBar: {
        backgroundColor: 'transparent',
        color: 'white',
        transition: 'all 0.4s ease 0s',
      },
      links: {
        color: 'white'
      }
    };
    this.toolbarMostChangeAspect = this.toolbarMostChangeAspect.bind(this);
  }

  componentDidMount() {
    if (this.props.behavior) {
      window.addEventListener('scroll', this.toolbarMostChangeAspect);
    }
  }

  toolbarMostChangeAspect() {
    const { behavior } = this.props;
    const changeColorOnScroll = behavior.changeColorOnScroll;
    const windowsScrollTop = window.pageYOffset;
  
    if (windowsScrollTop > changeColorOnScroll.height) {
      this.setState({
        appBar: {
          backgroundColor: 'white',
          height: '50px',
          minHeight: '50px',
          transition: 'all 0.4s ease 0s',
        },
        link: {
          height: '50px',
        }
      });
    } else {
      this.setState({
        appBar: {
          backgroundColor: 'transparent',
          color: 'white',
          transition: 'all 0.4s ease 0s',
          height: '70px',
        },
        link: {
          height: '70px',
        }
      });
    }
  }

  render() {
    const { classes } = this.props;
    
    return (
      <CSSTransition
        in={true}
        appear={true}
        timeout={200}
        classNames="fade">
        <div className={classes.root} id="AppToolBar" style={{...this.state.appBar}}>
        <AppBar position="fixed"  style={{...this.state.appBar}}>
          <Toolbar style={{...this.state.appBar}}>
            <Button style={{...this.state.appBar}} component={Link} className={classes.logoButton} to="/">
             Trip Paradise
            </Button>
          
            <Button style={{...this.state.appBar}} component={Link} className={classes.link}to="/">
              Hotels
            </Button>
            <Button style={{...this.state.appBar}} component={Link} className={classes.link} to="/">
              Places
            </Button>
            <Button style={{...this.state.appBar}} component={Link} className={classes.link} to="/">
              Experience
            </Button>
          </Toolbar>
        </AppBar>
      </div>
      </CSSTransition>
    );
  }
}

const styles = {
  root: {
    flexGrow: 1,
    position: 'fixed',
    zIndex: 999,
    color: 'white'
  },
  grow: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: 'rgb(0,0,0,0)',
    height: '70px',
  },
  logoButton: {
    marginLeft: -12,
    marginRight: 'auto',
    width: '200px',
    height: '70px',
    borderRadius: 0,
    fontSize: '15px',
    fontWeight: '800'
  },
  link: {
    height: '70px',
    width: '200px',
    borderRadius: 0,
    margin: 0,
  } 
};


AppHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppHeader);