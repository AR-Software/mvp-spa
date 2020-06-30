import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeHeader } from '../../redux/appActions';
import './AppSearch.scss'

class AppSearch extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {

        return (
            <div className="AppSearch">
                <form>
                    <input className="search-input"></input>
                    <button className="search-btn">Search</button>
                </form>                
            </div>
        );
    }
}
    
const mapStateToProps = (state) => {
    return {}
}
const mapDispatchToProps = {changeHeader}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AppSearch);